<template>
  <div class="login-view" id="login">登陆页面
    <el-button @click="testApi"></el-button>
  </div>
</template>

<script lang="ts" setup>
import { add } from '@/api/user';

  const testApi = () => {
    const param = {

    }
    add(param).then((res) => {
      console.log(res)
    })
  }
</script>
