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
            <div class="grid-content" style="background-color: #ffffff">
              <el-input id="userName" class="input" style="margin-left: 55%;" v-model="username" placeholder="请输入订单号">
              </el-input>
              <el-button slot="append" @click="selectUserOrder" type="primary">查询</el-button>

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
      tableData: []
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
</style>
