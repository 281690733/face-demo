export default {
    namespace: true,
    state: () => {
        return {
            setToken: {
                token: "123",
                username: "张三",
            },
        };
    },
    mutations: {
        SET_TOKEN(state: any, payload: any) {
            state.setToken = payload;
        },
    },
    actions: {
        SET_TOKEN_Async(commit: any, payload: any) {
            setTimeout(() => {
                commit("SET_TOKEN", payload);
            }, 2000);
        },
    },
    getters: {},
};