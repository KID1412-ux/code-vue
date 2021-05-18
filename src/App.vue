<template>
  <div id="app">
    <el-container style="height: 100%">
      <el-header>
        <el-row>
          <el-col :span="12">
            <img style="height: 60px;margin-right: 400px;" src="./img/logo.png">
          </el-col>
          <el-col :span="12">
            <span v-if="userName==null||userName==''">
              <router-link to="/login">你好,请登录</router-link>
              <router-link to="/Register">注册</router-link>
            </span>


            <span v-if="userName!=null&&userName!=''">
              <router-link to="/UserPersonal"><i class="el-icon-user"></i>你好,{{ user.userNickname }}</router-link>
            </span>

            <router-link to="/UserOrder"><i class="el-icon-shopping-bag-2"></i>我的订单</router-link>
            <router-link to="/ShopCart"><i class="el-icon-shopping-cart-2"></i>购物车</router-link>
            <a @click="fl(0)">全部分类</a>
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
      msg: 'Welcome to Your Vue.js App',
      userName: "",
      user:{},
    }
  },
  methods: {
    login() {
      var userName = sessionStorage.getItem("userName");
      this.userName = userName;
      var userId = sessionStorage.getItem("userId");
      var params=new URLSearchParams();
      params.append("userID",userId);
      var _this=this;
      this.$axios.post("/user/selectUserByID",params).then(function (item){
          _this.user=item.data;
        }).catch()
    },
    fl(id){
      this.$router.push({name: "Classification", params: {id: id,ss:""}});
    }
  },
  created() {
    // this.login();
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'login'
  }
}
</script>

<style>

html, body, #app {
  margin: 0px;
  height: 100%;
}

.el-header {
  background-color: white;
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

