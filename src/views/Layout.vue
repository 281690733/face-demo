<template>
  <div class="layout-view" id="layout">
    <TopNav></TopNav>
    <AppTop></AppTop>
    <AppMain></AppMain>
    <AppFooter></AppFooter>
  </div>
</template>

<script lang="ts">
import TopNav from "@/components/TopNav.vue";
import AppTop from "@/components/AppTop.vue";
import AppMain from "@/components/AppMain.vue";
import AppFooter from "@/components/AppFooter.vue";
export default {
  components: {
    TopNav,
    AppTop,
    AppMain,
    AppFooter,
  },
};
</script>
