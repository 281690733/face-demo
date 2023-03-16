<template>
  <div class="app-footer" id="appFooter">
    <div class="check-text up-down-ceter">
      <el-button @click="testKuayu">发送跨域请求</el-button>
      <el-link>
        总预约量<el-icon class="el-icon--right"><icon-view /></el-icon>
      </el-link>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { View as IconView } from "@element-plus/icons-vue";
import axios from "axios";
const testKuayu = () => {
  axios.get('/api/api/v1/topics').then((res: any) => {
    console.log(res)
  })
}
</script>

<style scoped>
.app-footer {
  background-color: rgba(0, 255, 136, 0.548);
  padding: 5px 5px 5px 5px;
  width: 100%;
  height: 48px;
  padding: 10px 20px;
  text-align: right;
  position: fixed;
  top: calc(100% - 48px);
  width: 100%;
}
.check-text {
  height: 100%;
  font-size: 32px;
}
</style>
