<template>
  <div id="app">
    <el-container class="footer">
      <el-header style="background: red">
        {{userId}}
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content" style="background-color: #ffffff">
              <el-input id="userName" class="input" style="margin-left: 55%;" v-model="orderNum" placeholder="请输入订单号">
              </el-input>
              <el-button slot="append" @click="selectUserOrder" type="primary">查询</el-button>

              <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="4" @click="selectUserOrder">

                  <el-table max-height="400px" v-loading="loading" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
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
                            <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                          </el-popover>
                        </template>
                      </el-table-column>

                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="120">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态"  width="120">
                    </el-table-column>
                    <el-table-column  label="操作" >
                      <template slot-scope="scope" v-if="scope.row.orderStats">
                        <el-button @click="isVisible" type="primary" size="small" v-if="scope.row.orderStats==='待付款'">支付</el-button>
                        <el-button @click="receipt(scope.row)" type="primary" size="small" v-if="scope.row.orderStats==='待收货'">收货</el-button>
                        <el-button @click="cancel(scope.row)" type="danger" size="small" v-if="scope.row.orderStats==='待付款'">取消</el-button>
                        <el-button @click="deleteOrder(scope.row)" type="danger" size="small" v-if="scope.row.orderStats==='待收货'">删除</el-button>
                        <el-button @click="deleteOrder(scope.row)" type="danger" style="margin-left: 45%" size="small" v-if="scope.row.orderStats==='已收货'">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待付款" name="3" @click="selectUserOrder">
                  <el-table max-height="400px" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
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
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="120">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态"  width="120">
                    </el-table-column>
                    <el-table-column label="操作" >
                      <template slot-scope="scope">
                        <el-button @click="pay(scope.row)" type="primary" size="small">付款</el-button>
                        <el-button @click="cancel(scope.row)" type="danger" size="small">取消</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待收货" name="1" @click="selectUserOrder">
                  <el-table max-height="400px" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
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
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="120">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态"  width="120">
                    </el-table-column>
                    <el-table-column   label="操作" >
                      <template slot-scope="scope">
                        <el-button @click="receipt(scope.row)" type="primary" size="small">收货</el-button>
                        <el-button @click="deleteOrder(scope.row)" type="danger" size="small">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="已收货" name="2" @click="selectUserOrder">
                  <el-table max-height="400px" :data="tableData" border style="width: 100%;background-color: #eee" >
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
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="120">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态"  width="120">
                    </el-table-column>
                    <el-table-column   label="操作" >
                      <template slot-scope="scope" >
                        <el-button @click="deleteOrder(scope.row)" type="danger" style="margin-left: 30%" size="small">删除</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="4"><div class="grid-content"><div style="height: 100%"></div></div></el-col>
        </el-row>
      </el-main>
      <el-footer style="background: yellow">Footer</el-footer>
    </el-container>


    <el-dialog title="结算页" :visible.sync="dialogFormVisible">
      <el-form :model="submitForm" :label-width="formLabelWidth">
        <el-form-item label="自提店">
          <el-select placeholder="请选择自提店" v-model="submitForm.merchantId">
            <el-option label="--请选择--" :value="0"></el-option>
            <el-option v-for="(item, index) in merchantData" :label="item.merchantName" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancel">取 消</el-button>
        <el-button type="primary" @click="toSettle">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>



<script>
export default {
  data() {
    return {
      activeName:"4",
      userId:"1",
      loading:true,
      orderNum:"",
      userMsg:"",
      password:"",
      sex:"0",
      phone:"",
      birthday:"",
      tableData: [],
      tableData2: [],
      dialogFormVisible: false,
    }
  },
  methods:{
    handleClick() {
      this.selectUserOrder();
    },
    //查询订单
    selectUserOrder(){
      var _this=this;
      var params =new URLSearchParams();
      params.append("userId",this.userId);
      params.append("orderNumber",this.orderNum);
      var orderStats=this.activeName;
      params.append("orderStats",orderStats);
      console.log(orderStats)
      this.$axios.post("userOrder/selectUserOrderByDto",params).then(function(result) {
        _this.loading=false;
        _this.tableData = result.data;
        console.log(_this.tableData)
        _this.tableData.forEach(item => {if(item.orderStats==="0"){item.orderStats="待付款"}else if (item.orderStats==="1"){item.orderStats="待收货"}else if (item.orderStats==="2"){item.orderStats="已收货"}})
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
        var _this=this;
        this.tableData2=[];
        var params =new URLSearchParams();
        params.append("orderId",id);
        this.$axios.post("userOrder/selectUserOrderDetail",params).then(function(result) {
          _this.tableData2 = result.data;
          _this.tableData2.forEach(item => {item.orderPrice=item.goodsPrice+' x '+item.goodsAmount;

          })
        }).catch();
    },
    pay(row){
      alert(row.id)
    },
    isVisible() {
        this.dialogFormVisible = true;
        var _this = this;
        function queryMerchant() {return _this.$axios.post("shopCart/queryMerchant");}

        function queryUser() {
          var params = new URLSearchParams();
          params.append("id", _this.userId);
          return _this.$axios.post("shopCart/queryUser", params);
        }

        this.$axios.all([queryMerchant(), queryUser()]).then(this.$axios.spread(function (res1, res2) {
          _this.merchantData = res1.data;
          if (res2.data.merchantId != "" && res2.data.merchantId != null) {
            _this.submitForm.merchantId = res2.data.merchantId;
          }
        })).catch();
      } else {
        this.$message({
          showClose: true,
          message: '请至少选择一个商品！',
          type: 'error'
        });
      }
    },
    //收货方法
    receipt(row){
      var _this=this;
      this.$confirm('确认收货?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this=this;
        var params =new URLSearchParams();
        params.append("orderId",row.id);
        this.$axios.post("userOrder/receipt",params).then(function(result) {
        }).catch();
        this.selectUserOrder();
        this.$message({
          type: 'success',
          message: '已收货!'
        });
      });
    },

    //取消订单方法
    cancel(row){
      var _this=this;
      this.$confirm('确认取消订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this=this;
        var params =new URLSearchParams();
        params.append("orderId",row.id);
        this.$axios.post("userOrder/deleteOrder",params).then(function(result) {
        }).catch();
        this.selectUserOrder();
        this.$message({
          type: 'success',
          message: '订单已取消!'
        });
      });
    },

    //删除订单方法
    deleteOrder(row){
      var _this=this;
      this.$confirm('确认删除订单?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this=this;
        var params =new URLSearchParams();
        params.append("orderId",row.id);
        this.$axios.post("userOrder/deleteOrder",params).then(function(result) {
        }).catch();
        this.selectUserOrder();
        this.$message({
          type: 'success',
          message: '订单已删除!'
        });
      });
    },


  },
  created() {
    this.selectUserOrder();
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
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
</style>
