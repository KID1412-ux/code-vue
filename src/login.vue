<template>
  <div id="app">
    <el-container>

    </el-container>
    <el-container class="footer">
      <el-header style="background: red">
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8"><div class="grid-content"></div></el-col>
          <el-col :span="8"><div class="grid-content">
            <el-input id="name" class="input"  v-model="name" placeholder="请输入帐号">
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
            <el-button id="login" class="input"  type="primary">登录</el-button>
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
  name: 'app',
  data () {
    return {
      name:"",
      password:""
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
