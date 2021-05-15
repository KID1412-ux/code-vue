<template>
  <div>
    <div id="div-cx" style="margin-top: 15px; width: 700px">
      <el-input placeholder="请输入订单号" v-model="orderNum" style="width: 550px" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="selectUserOrder"></el-button>
      </el-input>
    </div>
    <el-row :gutter="20">
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="16">
        <div class="grid-content" style="background-color: #ffffff">
          <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
            <el-tab-pane label="全部订单" name="4" @click="selectUserOrder">

              <el-table max-height="400px" v-loading="loading" :data="tableData" border
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
                <el-table-column prop="userNickname" label="收货人" width="120">
                </el-table-column>
                <el-table-column prop="orderStats" label="订单状态" width="120">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope" v-if="scope.row.orderStats">
                    <el-button @click="counter(scope.row)" type="primary" size="small"
                               v-if="scope.row.orderStats==='待付款'">支付
                    </el-button>
                    <el-button @click="cancelOrder(scope.row)" type="danger" size="small"
                               v-if="scope.row.orderStats==='待付款'">取消
                    </el-button>
                    <el-button @click="deleteOrder(scope.row)" type="danger" style="margin-left: 45%" size="small"
                               v-if="scope.row.orderStats==='已提货'">删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="待付款" name="3" @click="selectUserOrder">
              <el-table max-height="400px" :data="tableData" border style="width: 100%;background-color: #eee"
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
                <el-table-column prop="userNickname" label="收货人" width="120">
                </el-table-column>
                <el-table-column prop="orderStats" label="订单状态" width="120">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="counter(scope.row)" type="primary" size="small">付款</el-button>
                    <el-button @click="cancelOrder(scope.row)" type="danger" size="small">取消</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="待提货" name="1" @click="selectUserOrder">
              <el-table max-height="400px" :data="tableData" border style="width: 100%;background-color: #eee"
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
                <el-table-column prop="userNickname" label="收货人" width="120">
                </el-table-column>
                <el-table-column prop="orderStats" label="订单状态" width="120">
                </el-table-column>
                <el-table-column label="操作">
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="已提货" name="2" @click="selectUserOrder">
              <el-table max-height="400px" :data="tableData" border style="width: 100%;background-color: #eee">
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
                <el-table-column prop="userNickname" label="收货人" width="120">
                </el-table-column>
                <el-table-column prop="orderStats" label="订单状态" width="120">
                </el-table-column>
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <el-button @click="deleteOrder(scope.row)" type="danger" style="margin-left: 30%" size="small">删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
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

  </div>

</template>


<script>
export default {
  data() {
    return {
      activeName: "3",
      userId: "",
      loading: true,
      orderNum: "",
      userMsg: "",
      password: "",
      sex: "0",
      phone: "",
      birthday: "",
      tableData: [],
      tableData2: [],
      // dialogFormVisible: false,
      // submitForm: {orderId:0, merchantId: 0},
      // merchantData: [],
    }
  },
  methods: {
    handleClick() {
      this.selectUserOrder();
    },
    //查询订单
    selectUserOrder() {
      var _this = this;
      var params = new URLSearchParams();
      this.userId = sessionStorage.getItem("userId");
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
            item.orderStats = "待提货"
          } else if (item.orderStats === "2") {
            item.orderStats = "已提货"
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
      var _this = this;
      this.tableData2 = [];
      var params = new URLSearchParams();
      params.append("orderId", id);
      this.$axios.post("userOrder/selectUserOrderDetail", params).then(function (result) {
        _this.tableData2 = result.data;
        console.log(_this.tableData2)
        _this.tableData2.forEach(item => {
          item.orderPrice = item.goodsPrice + ' x ' + item.goodsAmount;
        })
      }).catch();
    },
    //支付方法
    pay(row) {
      var _this = this;

      //将用户订单状态改为待提货
      function payUserOrder() {
        var params = new URLSearchParams();
        params.append("id", row.id);
        params.append("orderStats", "1");
        return _this.$axios.post("userOrder/payUserOrder", params);
      }

      //往商户订单插入数据
      function insertMerchantOrder() {
        var params2 = new URLSearchParams();
        params2.append("merchantId", row.addressId);
        params2.append("amount", row.amount);
        params2.append("stats", "0");
        return _this.$axios.post("shopCart/saveMerchantOrder", params2);
      }

      //查询用户订单详情
      function selectUserOrderDetail() {
        var params3 = new URLSearchParams();
        params3.append("orderId", row.id);
        this.$axios.post("userOrder/selectUserOrderDetail", params3).then(function (result) {
          var tableDetail = result.data;
          console.log(tableDetail)
        })
      }

      //往商户订单详情插入数据
      function insertMerchantOrderDetail(nary) {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/saveMerchantOrderDetail',
          data: JSON.stringify(nary),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }

      //更改商品销量
      function updateGood(ary) {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/updateGood',
          data: JSON.stringify(ary),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }

      this.$axios.all([payUserOrder(), insertMerchantOrder(), selectUserOrderDetail()]).then(this.$axios.spread(function (res1, res2, res3) {
        var nary = res3.data.map((item, index) => {
          return Object.assign(item, {merchantOrderId: res2.data});
        });
        var ary = [];
        res3.data.forEach((item, index) => {
          var json = {};
          json["id"] = item.goodsId;
          json["goodsSales"] = item.goodsAmount;
          ary.push(json);
        });
        _this.$axios.all([insertMerchantOrderDetail(nary), updateGood(ary)]).then(_this.$axios.spread(function (res1, res2) {
        })).catch();
      })).catch();
      this.selectUserOrder();
    },
    //提货方法
    receipt(row) {
      var _this = this;
      this.$confirm('确认提货?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        var params = new URLSearchParams();
        params.append("orderId", row.id);
        this.$axios.post("userOrder/receipt", params).then(function (result) {
        }).catch();
        _this.selectUserOrder();
        this.$message({
          type: 'success',
          message: '已提货!'
        });
      });
    },
    //取消订单方法
    cancelOrder(row) {
      var _this = this;
      this.$confirm('确认取消订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        var params = new URLSearchParams();
        params.append("orderId", row.id);
        this.$axios.post("userOrder/deleteOrder", params).then(function (result) {
        }).catch();
        _this.selectUserOrder();
        this.$message({
          type: 'success',
          message: '订单已取消!'
        });
      });
    },

    //删除订单方法
    deleteOrder(row) {
      var _this = this;
      this.$confirm('确认删除订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        var params = new URLSearchParams();
        params.append("orderId", row.id);
        this.$axios.post("userOrder/deleteOrder", params).then(function (result) {
        }).catch();
        this.selectUserOrder();
        this.$message({
          type: 'success',
          message: '订单已删除!'
        });
      });
    },
    //打开支付界面
    counter(row) {
      this.$prompt('输入数字支付密码', '收银台', {
        center: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d{6}$/,
        inputErrorMessage: '密码格式不正确'
      }).then(({value}) => {
        this.pay(row);
      }).catch(() => {
        // this.$message({
        //   type: 'success',
        //   message: '已取消支付!'
        // });
      });
    }


  },
  computed: {},
  created() {
    this.selectUserOrder();
  }
}
</script>

<style>
#div-cx {
  text-align: center;
  margin: 20px auto;
}

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

.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
</style>
