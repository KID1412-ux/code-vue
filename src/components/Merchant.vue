<template>
  <div id="app">
    <el-container class="height">
      <el-header>
        <div style="float: right">
<!--          <el-button type="success" plain @click="Back">返回首页</el-button>-->
          <el-button @click="Back">返回首页</el-button></div>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu router
                   default-active="2"
                   class="el-menu-vertical-demo"
                   @open="handleOpen"
                   @close="handleClose"
                   background-color="#545c64"
                   text-color="#fff"
                   active-text-color="#ffd04b">
            <el-menu-item index="/ProductData">
              <i class="el-icon-menu"></i>
              <span slot="title">商户资料维护</span>
            </el-menu-item>
            <el-menu-item index="/Revenue">
              <i class="el-icon-menu"></i>
              <span slot="title">统计营收</span>
            </el-menu-item>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="/MerchantOrder0">待发货</el-menu-item>
              <el-menu-item index="/MerchantOrder1">已发货</el-menu-item>
              <el-menu-item index="/MerchantOrder2">待提货</el-menu-item>
              <el-menu-item index="/MerchantOrder3">已提货</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Merchant',
  data() {
    return {
      msg: "afdsf"
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    Back(){
      this.$router.push("/")
    },
  },
  created() {
    this.$router.push("ProductData")
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

html, body{
  margin: 0px;
  height: 100%;
}

.height {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.el-header {
  background-color: #475669;
  text-align: center;
  line-height: 60px;
}

el-header span, a {
  padding-right: 20px;
  color: #99a9bf;
  font-size: 20px;
  text-decoration: none;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

/*.el-main {*/
/*  background-color: #E9EEF3;*/
/*  color: #333;*/
/*  text-align: center;*/
/*  line-height: 160px;*/
/*}*/

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>
