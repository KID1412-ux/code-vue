<template>
  <div id="app">
    <el-container class="footer">
      <el-header style="background: red">
      </el-header>
      <el-main>
        <el-row>
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="5">
            <el-card class="box-card" style="width: 100%">
              <div>
                <el-avatar :size="80" :src="circleUrl" style="margin-top: 50px"></el-avatar>
                <br>
                <el-link :underline="false"><h3>用户名</h3></el-link>
              </div>
            </el-card>
          </el-col>
          <el-col :span="10">
            <el-card shadow="never" style="height: 200px;margin-top: 16%">
              <div style="margin-top: 10%;margin-left: -30%">
                <el-popover
                  placement="right"
                  width="400"
                  trigger="click">
                  <el-table :data="gridData">
                    <el-table-column width="150" property="date" label="日期"></el-table-column>
                    <el-table-column width="100" property="name" label="姓名"></el-table-column>
                    <el-table-column width="300" property="address" label="地址"></el-table-column>
                  </el-table>
                  <el-button slot="reference">提货商户</el-button>
                </el-popover>
                <el-select v-model="merchantValue" placeholder="请选择提货商户">
                  <el-option v-for="item in merchants" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="15" style="margin-left: 17%">
            <div class="grid-content"></div>
            <div class="grid-content" style="background-color: #ffffff">

              <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="4" @click="selectUserOrder">

                  <el-table height="200px" v-loading="loading" :data="tableData" border
                            style="width: 100%;background-color: #eee" row-key="id">
                    <el-table-column label="订单编号" width="250">
                      <template slot-scope="scope">
                        <el-popover placement="right" width="400" trigger="click">
                          <el-table :data="tableData2">
                            <el-table-column align="center" label="订单详情">
                              <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                              <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                              <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                            </el-table-column>
                          </el-table>
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary"
                                   slot="reference">{{ scope.row.orderNumber }}
                          </el-link>
                        </el-popover>
                      </template>

                    </el-table-column>

                    <el-table-column prop="orderPrice" label="总金额" width="120">
                    </el-table-column>
                    <el-table-column prop="createTime" label="创建时间" width="150">
                    </el-table-column>
                    <el-table-column prop="userNickname" label="收货人" width="150">
                    </el-table-column>
                    <el-table-column prop="orderStats" label="订单状态">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待付款" name="3" @click="selectUserOrder">
                  <el-table height="400px" :data="tableData" border style="width: 100%;background-color: #eee"
                            row-key="id">
                    <el-table-column prop="orderNumber" label="订单编号" width="250">
                      <template slot-scope="scope">
                        <el-popover placement="right" width="400" trigger="click">
                          <el-table :data="tableData2">
                            <el-table-column align="center" label="订单详情">
                              <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                              <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                              <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                            </el-table-column>
                          </el-table>
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary"
                                   slot="reference">{{ scope.row.orderNumber }}
                          </el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column prop="orderPrice" label="总金额" width="120">
                    </el-table-column>
                    <el-table-column prop="createTime" label="创建时间" width="150">
                    </el-table-column>
                    <el-table-column prop="userNickname" label="收货人" width="150">
                    </el-table-column>
                    <el-table-column prop="orderStats" label="订单状态">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待收货" name="1" @click="selectUserOrder">
                  <el-table height="400px" :data="tableData" border style="width: 100%;background-color: #eee"
                            row-key="id">
                    <el-table-column prop="orderNumber" label="订单编号" width="250">
                      <template slot-scope="scope">
                        <el-popover placement="right" width="400" trigger="click">
                          <el-table :data="tableData2">
                            <el-table-column align="center" label="订单详情">
                              <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                              <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                              <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                            </el-table-column>
                          </el-table>
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary"
                                   slot="reference">{{ scope.row.orderNumber }}
                          </el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column prop="orderPrice" label="总金额" width="120">
                    </el-table-column>
                    <el-table-column prop="createTime" label="创建时间" width="150">
                    </el-table-column>
                    <el-table-column prop="userNickname" label="收货人" width="150">
                    </el-table-column>
                    <el-table-column prop="orderStats" label="订单状态">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="已收货" name="2" @click="selectUserOrder">
                  <el-table height="400px" :data="tableData" border style="width: 100%;background-color: #eee">
                    <el-table-column prop="orderNumber" label="订单编号" width="250">
                      <template slot-scope="scope">
                        <el-popover placement="right" width="400" trigger="click">
                          <el-table :data="tableData2">
                            <el-table-column align="center" label="订单详情">
                              <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                              <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                              <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                            </el-table-column>
                          </el-table>
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary"
                                   slot="reference">{{ scope.row.orderNumber }}
                          </el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column prop="orderPrice" label="总金额" width="120">
                    </el-table-column>
                    <el-table-column prop="createTime" label="创建时间" width="150">
                    </el-table-column>
                    <el-table-column prop="userNickname" label="收货人" width="150">
                    </el-table-column>
                    <el-table-column prop="orderStats" label="订单状态">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane name="5" label="前往订单>">
                </el-tab-pane>
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
      activeName: "4",
      userId: "1",
      loading: true,
      orderNum: "",
      userMsg: "",
      password: "",
      sex: "0",
      phone: "",
      birthday: "",
      tableData: [],
      tableData2: [],
      merchants: [{value: "1", label: "a"}, {value: "2", label: "b"}, {value: "3", label: "c"}],
      merchantValue: "1",
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png"
    }
  },
  methods: {
    handleClick(tab) {
      if (tab.name === "5") {
        this.$router.push('/UserOrder');
      } else {
        this.selectUserOrder();
      }

    },
    //查询订单
    selectUserOrder() {
      var _this = this;
      var params = new URLSearchParams();
      params.append("userId", this.userId);
      params.append("orderNumber", this.orderNum);
      var orderStats = this.activeName;
      params.append("orderStats", orderStats);
      console.log(orderStats)
      this.$axios.post("userOrder/selectUserOrderByDto", params).then(function (result) {
        _this.loading = false;
        _this.tableData = result.data;
        console.log(_this.tableData)
        _this.tableData.forEach(item => {
          if (item.orderStats === "0") {
            item.orderStats = "待付款"
          } else if (item.orderStats === "1") {
            item.orderStats = "待收货"
          } else if (item.orderStats === "2") {
            item.orderStats = "已收货"
          }
        })
        // var table = [];
        // _this.tableData.forEach((item=> {
        //   table.push(Object.assign({},item,{hasChildren:true}))
        // }))
        // _this.tableData = table;
      }).catch();
    },
    //查看订单详情
    selectUserOrderDetail(id) {
      console.log(id)
      var _this = this;
      this.tableData2 = [];
      var params = new URLSearchParams();
      params.append("orderId", id);
      this.$axios.post("userOrder/selectUserOrderDetail", params).then(function (result) {
        _this.tableData2 = result.data;
        _this.tableData2.forEach(item => {
          item.orderPrice = item.goodsPrice + ' x ' + item.goodsAmount;

        })
      }).catch();
    },
    //查询提货商户
    selectMerchants() {
      var _this = this;
      var params = new URLSearchParams();
      params.append("userId", this.userId);
      this.$axios.post("userOrder/selectUserOrderDetail", params).then(function (result) {
        _this.tableData2 = result.data;
        _this.tableData2.forEach(item => {
          item.orderPrice = item.goodsPrice + ' x ' + item.goodsAmount;

        })
      }).catch();
    },


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
