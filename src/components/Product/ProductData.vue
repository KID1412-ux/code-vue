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
      <el-avatar style="margin-top: 40px" :size="90" :src="require('./../../img/gg1.png')"></el-avatar>
      <br>
      <div style="height: 315px;width: 400px;border: 1px red solid;margin-top: 50px;text-align: left;margin-left: 50px">
        <h1 style="color: #99a9bf">商户名:<a style="color: #333333">{{ user.merchantName }}</a></h1>
        <h1 style="color: #99a9bf;margin-top: 50px">商户描述:<a style="color: #333333">{{ user.merchantDescribe }}</a></h1>
        <h1 style="color: #99a9bf;margin-top: 50px">商户电话:<a style="color: #333333">{{ user.merchantPhone }}</a></h1>
        <h1 style="color: #99a9bf;margin-top: 50px">提货地址:<a style="color: #333333">{{ user.deliveryAddress }}</a></h1>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductData",
  data() {
    return {
      user: "",
    }
  },
  methods: {
    getUser() {
      sessionStorage.getItem("username",);
    }
  },
  created() {
    this.getUser();
  }
}
</script>

<style scoped>

span {
  font-size: 20px;
}

#proDiv {
  width: 500px;
  margin-top: 75px;
  margin-left: 300px;
  height: 500px;
  border: 1px solid gray;
}

</style>
