<!--商户资料-->
<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商户</el-breadcrumb-item>
        <el-breadcrumb-item>商户资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div id="proDiv">
      <el-avatar :size="50" :src="require('./../../img/gg1.png')"></el-avatar>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductData"
}
</script>

<style scoped>

span{
  font-size: 20px;
}

#proDiv{
  width: 500px;
  margin-top: 20px;
  margin-left: 300px;
  height: 600px;
  border: 1px solid gray;
}

</style>
