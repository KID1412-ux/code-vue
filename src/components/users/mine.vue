<template>
  <div id="app">
    <el-container class="footer">
      <el-header style="background: red">
      </el-header>
      <el-main>
        <el-row gutter="20">
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="16">
            <el-card class="box-card">
              <!--              <div slot="header" class="clearfix">-->
              <!--                <span>个人信息</span>-->
              <!--                <el-button style="float: right; padding: 3px 0" type="text">操作按钮</el-button>-->
              <!--              </div>-->
              <div>
                <el-avatar :size="80" :src="circleUrl" style="margin-top: 50px"></el-avatar>
                <br>
                <h3>用户名</h3>
              </div>

            </el-card>
            <div class="grid-content" style="background-color: #ffffff">

              <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="first">

                  <el-table :data="tableData" style="width: 100%">
                    <el-table-column label="商品详情">
                      <el-table-column prop="province" label="商品名" width="338">
                      </el-table-column>
                      <el-table-column prop="city" label="价格" width="160">
                      </el-table-column>
                    </el-table-column>
                    <el-table-column prop="date" label="收货人" width="150">
                    </el-table-column>
                    <el-table-column prop="date" label="总金额" width="160">
                    </el-table-column>
                    <el-table-column prop="date" label="操作" width="150">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待付款" name="second"></el-tab-pane>
                <el-tab-pane label="待收货" name="third"></el-tab-pane>
                <el-tab-pane label="已收货" name="fourth"></el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              <div style="height: 100%"></div>
            </div>
          </el-col>
        </el-row>
      </el-main>
      <el-footer style="background: yellow">Footer</el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "userOrder",
  data() {
    return {
      activeName: "first",
      username: "",
      userMsg: "",
      password: "",
      sex: "0",
      phone: "",
      birthday: "",
      tableData: [],
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    selectUserOrder() {
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

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 300px;
  height: 300px;
}
</style>
