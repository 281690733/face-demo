<template>
  <div class="home-view" id="home">
    <el-row :gutter="12">
      <el-col
        v-for="(o, index) in 3"
        :key="o"
        :span="7"
        :offset="index > 0 ? 1 : 0"
      >
        <el-card
          :body-style="{ width: '75px', height: '60px', margin: '0px auto' }"
          shadow="always"
        >
          <div class="text up-down-ceter">菜单</div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
export default {};
</script>

<style scoped>
.home-view {
  margin: 0px auto;
  padding: 10px 30px;
}
.card-calss {
  width: 200px;
  height: 100px;
}
.text {
  height: 100%;
  font-size: 30px;
}
</style>
