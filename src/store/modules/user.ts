export default {
  namespace: true,
  state: () => {
    return {
      userinfo: {
        token: "123",
        username: "张三",
      },
    };
  },
  mutations: {
    updateName(state: { userinfo: { username: any } }, payload: any) {
      state.userinfo.username = payload;
    },
  },
  actions: {
    updateNameAsync(commit: any, payload: any) {
      setTimeout(() => {
        commit("updateName", payload);
      }, 2000);
    },
  },
  getters: {},
};
