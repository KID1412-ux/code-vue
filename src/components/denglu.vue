<template>
  <div>
  <el-container class="footer">
    <el-header style="background: red">
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="8"><div class="grid-content"></div></el-col>
        <el-col :span="8"><div class="grid-content">
          <el-input id="name" class="input"  v-model="employeeNo" placeholder="请输入帐号">
            <template slot="prepend">帐号</template>
          </el-input>
        </div></el-col>
        <el-col :span="8"><div class="grid-content"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content"></div></el-col>
        <el-col :span="8"><div class="grid-content">
          <el-input id="password" class="input"  type="password"  v-model="password" placeholder="请输入帐号">
            <template slot="prepend">密码</template>
          </el-input>
        </div></el-col>
        <el-col :span="8"><div class="grid-content"></div></el-col>
      </el-row>
      <el-row>
        <el-col :span="8"><div class="grid-content"></div></el-col>
        <el-col :span="8"><div class="grid-content">
          <el-button id="login" class="input" @click="dl" type="primary">登录</el-button>
        </div></el-col>
        <el-col :span="8"><div class="grid-content"></div></el-col>
      </el-row>
    </el-main>
    <el-footer style="background: yellow">Footer</el-footer>
  </el-container>
</div>
</template>

<script>
export default {
  name: "denglu",
  data () {
    return {
      employeeNo:"",
      password:""
    }
  },
  methods:{
    dl(){
      var _this=this;

      var param=new URLSearchParams();
      param.append("employeeNo",this.employeeNo);
      param.append("password",this.password);

      this.$axios.post("/emp/denglu",param).then(function (result) {
        if (result.data==null){
          setTimeout(() => {
            _this.$router.push('/Home')
          }, 2000)
        }else {
          alert("登录失败")
        }
      }).catch()
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
