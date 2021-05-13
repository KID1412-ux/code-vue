<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>
        <el-row>
          <el-col :span="12">
            <img style="height: 60px;margin-right: 400px;" src="./img/logo.png">
          </el-col>
          <el-col :span="12">
            <span v-if="userId==null">
              <router-link to="/login">你好,请登录</router-link>
              <router-link to="/Register">注册</router-link>
            </span>


            <span v-if="userId!=null&&userId!=''">
              <router-link to="">你好,{{user.userName}}</router-link>
            </span>

            <router-link to="/UserOrder"><i class="el-icon-shopping-bag-2"></i>我的订单</router-link>
            <router-link to="/ShopCart"><i class="el-icon-shopping-cart-2"></i>购物车</router-link>
            <router-link to="/"><i class="el-icon-guide"></i>首页</router-link>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <router-view></router-view>

      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    verification() {
      alert("登录");
    }
  }
}
</script>

<style>

html, body, #app {
  margin: 0px;
  height: 100%;
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

</style>

