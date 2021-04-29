<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>
        <el-row>
          <el-col :span="12">
            <img style="height: 55px" src="./img/logo.png">
          </el-col>
          <el-col :span="12" id="div1">
            <router-link to="/login">你好,请登录</router-link>
            <router-link to="">注册</router-link>
            <router-link to=""><i class="el-icon-shopping-bag-2"></i>我的订单</router-link>
            <router-link to=""><i class="el-icon-shopping-cart-2"></i>购物车</router-link>
            <router-link to=""><i class="el-icon-guide"></i>商品分类</router-link>
            <router-link to="/"><i class="el-icon-guide"></i>首页</router-link>
          </el-col>
        </el-row>
      </el-header>
      <el-main >
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<style>

html,body,#app{
  margin: 0px;
  height: 100%;
}

.el-header{
  background-color: #475669;
  text-align: center;
  line-height: 60px;
}

el-header span,a{
  padding-right: 20px;
  color: #99a9bf;
  font-size: 20px;
  text-decoration: none;
}

</style>

