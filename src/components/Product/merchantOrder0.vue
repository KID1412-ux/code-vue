<template>
  <div id="app">
    <el-container class="footer">
      <el-main>
        <el-row :gutter="20">
          <div class="grid-content"  style="background-color: #ffffff">
            <el-input id="userName" class="input" style="margin-left: 55%;margin-top: -50px" v-model="goodsName" placeholder="请输入商品名">
            </el-input>
            <el-button slot="append" @click="selectMerchantOrders" type="primary">查询</el-button>

            <el-table max-height="500px" :data="tableData0" border style="width: 100%;background-color: #eee" row-key="id" >
              <el-table-column label="订单编号" width="150">
<!--                <template slot-scope="scope">-->
<!--                  <el-popover placement="right" width="400" trigger="click">-->
<!--                    <el-table :data="tableData0">-->
<!--                      <el-table-column align="center" label="订单详情">-->
<!--                        <el-table-column width="100" property="id" label="详情编号"></el-table-column>-->
<!--                        <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>-->
<!--                        <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>-->
<!--                      </el-table-column>-->
<!--                    </el-table>-->
<!--                    <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>-->
<!--                  </el-popover>-->
<!--                </template>-->
              </el-table-column>

              <el-table-column  prop="goodsName"  label="商品名称"  width="300">
              </el-table-column>
              <el-table-column  prop="imageUrl"  label="商品图片"  width="150">
              </el-table-column>
              <el-table-column  prop="goodsAmount"  label="商品数量"  width="120">
              </el-table-column>
              <el-table-column  prop="stats"  label="订单状态"  width="120">
              </el-table-column>
              <el-table-column  label="操作" >
<!--                <template slot-scope="scope" v-if="scope.row.orderStats">-->
<!--                  <el-button @click="counter(scope.row)" type="primary" size="small" v-if="scope.row.orderStats==='待付款'">支付</el-button>-->
<!--                  <el-button @click="cancelOrder(scope.row)" type="danger" size="small" v-if="scope.row.orderStats==='待付款'">取消</el-button>-->
<!--                  <el-button @click="deleteOrder(scope.row)" type="danger" style="margin-left: 45%" size="small" v-if="scope.row.orderStats==='已提货'">删除</el-button>-->
<!--                </template>-->
              </el-table-column>
            </el-table>
          </div>
        </el-row>
      </el-main>
    </el-container>
  </div>

</template>



<script>
export default {
  data() {
    return {
      userId:"",
      goodsName:"",
      tableData0: []
    }
  },
  methods:{
    // handleClick(tab, event) {
    //   console.log(tab, event);
    // },
    //查询订单
    selectMerchantOrders() {
      var _this = this;
      var params = new URLSearchParams();
      this.userId=sessionStorage.getItem("userId");
      params.append("merchantId",this.userId);
      params.append("goodsName", this.goodsName);
      params.append("stats", "0");
      this.$axios.post("merchantOrder/selectMerchantOrders", params).then(function (result) {
        _this.tableData0 = result.data;
        console.log(result.data)
        _this.tableData0.forEach(item => {
          if (item.stats === "0") {
            item.stats = "待发货"
          } else if (item.stats === "1") {
            item.stats = "已发货"
          } else if (item.stats === "2") {
            item.stats = "待提货"
          } else if (item.stats === "3") {
            item.stats = "已提货"
          }
        })
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
        _this.tableData2.forEach(item => {
          item.orderPrice = item.goodsPrice + ' x ' + item.goodsAmount;
        })
      }).catch();
    },
  },
  created() {
    this.selectMerchantOrders();

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

a {
  color: #42b983;
}

/*.grid-content {*/
/*  margin-top: 30px;*/
/*}*/

.footer{
  /*position: absolute;*/
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}


.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
