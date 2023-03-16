<template>
  <div class="app-top-view w" id="appTop">
    <div class="mt-4">
      <el-input
        v-model="input3"
        placeholder="Please input"
        class="input-with-select"
      >
        <template #append>
          <el-button :icon="Search" />
        </template>
      </el-input>
    </div>
    <el-divider border-style="double" />
  </div>
</template>

<script lang="ts" setup>
import { Search } from "@element-plus/icons-vue";
import { ref } from "vue";

const input3 = ref("");
</script>

<style scoped>
.app-top-view {
  padding: 10px 10px;
}
</style>
