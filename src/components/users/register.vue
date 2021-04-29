<template>
  <div id="app">
    <el-container class="footer">
      <el-header style="background: red">
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="8"><div class="grid-content"></div></el-col>
          <el-col :span="8">
            <div class="grid-content">
              <el-input id="userName" class="input"  v-model="username" placeholder="请输入帐号">
                <template slot="prepend">帐号:</template>
              </el-input>
            </div>
            <div class="grid-content">
              <el-input id="password" class="input"  type="password"  v-model="password" placeholder="请输入密码">
                <template slot="prepend">密码:</template>
              </el-input>
            </div>
            <div class="grid-content">
              <label >性别:</label>
              <el-radio v-model="sex" label="0" style="margin-left: 10%" border>男</el-radio>
              <el-radio v-model="sex" label="1" style="margin-left: 10%" border>女</el-radio>
            </div>
            <div class="grid-content">
              <el-input id="phone" class="input"  type="text"  v-model="phone" placeholder="请输入电话">
                <template slot="prepend">电话</template>
              </el-input>
            </div>
            <div class="grid-content">
                <el-date-picker slot="append"  v-model="birthday" type="date" placeholder="选择日期">
                </el-date-picker>
            </div>
            <div class="grid-content">
              <el-button id="register" class="input"  type="primary">注册</el-button>
            </div>
          </el-col>
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
      sex:"0",
      phone:"",
      birthday:""
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
  margin-top: 30px;
}

.footer{
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
