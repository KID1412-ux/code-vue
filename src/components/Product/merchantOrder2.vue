<template>
  <div id="app">
    <el-container class="footer">
      <el-main>
        <el-row :gutter="20">
          <div class="grid-content"  style="background-color: #ffffff">
            <el-input id="userName" class="input" style="margin-left: 40%;" v-model="goodsName" placeholder="请输入订单编号">
            </el-input>
            <el-button slot="append" @click="selectMerchantOrders" type="primary">查询</el-button>

            <el-table max-height="500px" :data="tableData2" border style="margin-left:5%;width: 1100px;background-color: #eee"  >
              <el-table-column label="订单编号" width="300">
                <template slot-scope="scope">
                  <el-popover placement="right" width="500" trigger="click">
                    <el-table :data="tableDetailData">
                      <el-table-column align="center" label="订单详情">
                        <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                        <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                        <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                      </el-table-column>
                    </el-table>
                    <el-link :underline="false" @click="selectMerchantOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                  </el-popover>
                </template>
              </el-table-column>

              <el-table-column  prop="amount"  label="商品总件数"  width="150">
              </el-table-column>
              <el-table-column  prop="createTime"  label="创建时间"  width="200">
              </el-table-column>
              <el-table-column  prop="userNickname"  label="所属提货人"  width="150">
              </el-table-column>
              <el-table-column  prop="stats"  label="订单状态"  width="150">
              </el-table-column>
              <el-table-column  label="操作" >
                <template slot-scope="scope">
                  <el-button @click="receipt(scope.row)" type="success" >确认提货</el-button>
                </template>
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
      tableData2: [],
      tableDetailData:[],
      page:0,
      size:10
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
      params.append("stats", "2");
      this.$axios.post("merchantOrder/selectAllMerchantOrder", params).then(function (result) {
        _this.tableData2 = result.data.map(item => {
          item.imageUrl = "http://127.0.0.1:8090/code/" + item.imageUrl;
          return item;
        });
        _this.tableData2.forEach(item => {
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
    selectMerchantOrderDetail(id) {
      var _this = this;
      this.tableDetailData = [];
      var params = new URLSearchParams();
      params.append("merchantOrderId", id);
      this.$axios.post("merchantOrder/selectMerchantOrderDetail", params).then(function (result) {
        _this.tableDetailData = result.data;
        _this.tableDetailData.forEach(item => {
          item.orderPrice = item.goodsPrice + ' x ' + item.goodsAmount;
        })
      }).catch();
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
        params.append("id", row.id);
        params.append("stats", "3");
        this.$axios.post("merchantOrder/receipt", params).then(function (result) {
          _this.selectMerchantOrders();
        }).catch();
        this.$message({
          type: 'success',
          message: '已提货!'
        });
      });
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
