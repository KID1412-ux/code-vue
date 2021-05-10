<template>
  <div id="app">
    <el-container class="footer">
      <el-header style="background: red">
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="24"><div class="grid-content"></div></el-col>
        </el-row>
        <el-row>
          <el-col :span="8"><div class="grid-content"></div></el-col>
            <div class="grid-content">
              <el-input id="userName" class="input"  v-model="username"  placeholder="请输入帐号">
                <template slot="prepend">帐号</template>
              </el-input>
            </div>
            <div class="grid-content">
              <el-input id="password" class="input"  type="password"  v-model="password" placeholder="请输入密码">
                <template slot="prepend">密码</template>
              </el-input><br>
              <label style="color: red">{{msg}}</label>
            </div>
            <div class="grid-content">
              <el-button id="login" class="input" @click="userLogin" type="primary">登录</el-button>
            </div>
            <div class="grid-content">
              <el-button id="register" class="input" @click="goRegister" type="primary">注册</el-button>
<!--                <router-link to="/Register">注册</router-link>-->
            </div>
          <el-col :span="8"><div class="grid-content"></div></el-col>
        </el-row>
      </el-main>
      <el-footer style="background: yellow">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      username:"",
      password:"",
      msg:""
    }
  },
  methods:{
    userLogin(){
      var _this=this;
      var params =new URLSearchParams();
      params.append("userName",this.username);
      params.append("password",this.password);
      this.$axios.post("user/userLogin",params).then(function(result) {
          if (result.data==""){
            _this.msg="用户名或密码错误";
          }else if (result.data.userStats=="1"){
            _this.msg = "账号已被拉黑";
          }
          else {
            _this.msg="";
            alert("登录成功")
            console.log(result.data)
            sessionStorage.setItem("user",result.data )
            console.log(sessionStorage.getItem("user"))
            _this.$router.push('/')
          }
      }).catch();
    },
    goRegister(){
      this.$router.push('/Register');
    }
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

.input{
  width: 350px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.grid-content {
  margin-top: 40px;
}

.footer{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
