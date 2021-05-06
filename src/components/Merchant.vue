<template>
  <div id="app">
    <el-container class="height">
      <el-header>Header</el-header>
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
              <span slot="title" >商户资料维护</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span>统计营收</span>
              </template>
              <el-menu-item index="1-1">本月营收</el-menu-item>
              <el-menu-item index="1-2">营收查询</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="2-1">全部订单</el-menu-item>
              <el-menu-item index="2-2">待收货订单</el-menu-item>
              <el-menu-item index="2-3">待提货订单</el-menu-item>
              <el-menu-item index="2-4">已提货订单</el-menu-item>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

export default {
  name: 'Merchant',
  data(){
    return{
      msg:"afdsf"
    }
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}

</script>

<style>

html,body,#app{
  margin: 0px;
  height: 100%;
}
.height{
  height: 100%;
}

.el-header, .el-footer {
  background-color: #B3C0D1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #D3DCE6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #E9EEF3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

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
