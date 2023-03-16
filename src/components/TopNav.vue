<template>
  <div class="top-nav-view" id="topNav">
    <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false" @select="handleSelect"
      background-color="#000" text-color="#fff">
      <el-menu-item index="0">
        <router-link to="/login">
          <span style="font-weight: 600">中文社区</span>
        </router-link>
      </el-menu-item>
      <div class="flex-grow" />
      <el-sub-menu index="1">
        <template #title>{{ userinfo.username }}<el-icon>
            <UserFilled />
          </el-icon></template>
        <el-menu-item index="login">登陆</el-menu-item>
        <el-menu-item index="register">注册</el-menu-item>
        <el-menu-item index="exit">退出</el-menu-item>
      </el-sub-menu>
    </el-menu>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref } from "vue";
import { useRouter } from "vue-router";
import { useStore } from "vuex";
const router = useRouter();
const store = useStore();
const userinfo = computed(() => {
  return store.state.user.userinfo;
});
const activeIndex = ref("1");
const handleSelect = (key: string, keyPath: string[]) => {
  debugger;
  switch (keyPath[1]) {
    case "login": {
      router.push({ name: "login" });
      break;
    }
    default:
      break;
  }
};
</script>

<style scoped>.flex-grow {
  flex-grow: 1;
}</style>
