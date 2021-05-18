<template>
  <div id="app">
    <el-container class="footer">
      <el-main>
        <el-row>
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="8" style="margin-top: 50px">
            <div class="grid-content" @mouseleave="userAttest" @mousedown="clearUserInput">
              <el-input id="userName" @focus="clearUserInput" class="input" v-model="username" placeholder="请输入帐号">
                <template slot="prepend">帐号:</template>
              </el-input>
              <br>
              <label style="color: red">{{ userMsg }}</label>
            </div>
            <div class="grid-content">
              <el-input id="password" @mousedown="clearPasswordInput" class="input" type="password" v-model="password"
                        placeholder="请输入密码">
                <template slot="prepend">密码:</template>
              </el-input>
            </div>
            <div class="grid-content">
              <el-input id="password2" @mouseleave="checkPassword" @mousedown="clearPasswordInput" class="input"
                        type="password" v-model="password2" placeholder="请再次输入密码">
                <template slot="prepend">重复密码</template>
              </el-input>
              <br>
              <label style="color: red">{{ passwordMsg }}</label>
            </div>
            <div class="grid-content">
              <label>性别:</label>
              <el-radio v-model="sex" label="0" style="margin-left: 10%" border>男</el-radio>
              <el-radio v-model="sex" label="1" style="margin-left: 10%" border>女</el-radio>
            </div>
            <div class="grid-content">
              <el-input id="phone" @mouseleave="checkPhone" @mousedown="clearPhoneInput" class="input" type="text"
                        v-model="phone" placeholder="请输入电话">
                <template slot="prepend">电话</template>
              </el-input>
              <label style="color: red">{{ phoneMsg }}</label>
            </div>
            <div class="grid-content">
              <el-input class="input" type="text">
                <template slot="prepend">生日</template>
                <el-date-picker slot="append" v-model="birthday" type="date"
                                style="width: 280px;height: 38px;top:-1px;margin-left:-54px;margin-right:-20px;background-color: #fff;" value-format="yyyy-MM-dd"
                                placeholder="选择日期">
                </el-date-picker>
              </el-input>
            </div>
            <div class="grid-content">
              <el-button id="register" class="input" @click="insertUser" type="primary">注册</el-button>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="grid-content"></div>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      username: "",
      userMsg: "",
      password: "",
      password2: "",
      passwordMsg: "",
      sex: "0",
      phone: "",
      phoneMsg: "",
      birthday: ""
    }
  },
  methods: {
    userAttest() {
      var _this = this;
      var params = new URLSearchParams();
      params.append("userName", this.username);
      this.$axios.post("user/selectOneUser", params).then(function (result) {
        if (result.data != "") {
          _this.userMsg = "用户名已存在";
        }
      }).catch();
    },
    checkPassword() {
      if (this.password !== this.password2) {
        this.passwordMsg = "两个密码不一致!!!"
      }
    },
    checkPhone() {
      if (this.phone != this.phone.match(/^1\\d{10}$/)) {
        this.phoneMsg = "电话格式错误!!!"
      }
    },
    clearUserInput() {
      this.userMsg = "";
    },
    clearPasswordInput() {
      this.passwordMsg = "";
    },
    clearPhoneInput() {
      this.phoneMsg = "";
    },
    insertUser() {
      var _this = this;
      var params = new URLSearchParams();
      params.append("userName", this.username);
      params.append("password", this.password);
      params.append("sex", this.sex);
      params.append("phone", this.phone);
      params.append("birthday", this.birthday);
      this.$axios.post("user/insertUser", params).then(function (result) {
      }).catch();
      this.$router.push('/Login');
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

.input {
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

.footer {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
