<template>
  <div>
        <el-row>
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="5" style="">
            <el-card class="box-card" style="width: 100%">
              <div>
                <el-avatar :size="80" :src="circleUrl" style="margin-top: 50px"></el-avatar>
                <br>
                <h3>{{userNickname}}</h3>
                <el-button size="mini" round @click="openDialogForm">编辑个人资料</el-button>
              </div>
            </el-card>
          </el-col>
          <el-col :span="10" style="">
            <el-card shadow="never" style="height: 200px;margin-top: 16%">
              <div style="margin-top: 5%;margin-left: -10%">
                <label>默认提货商户：</label>
                <el-select placeholder="请选择自提店" v-model="merchant" @change="changeAddress">
                  <el-option label="--请选择--" :value="0"></el-option>
                  <el-option v-for="(item, index) in merchants" :key="item.id" :label="item.merchantName" :value="item.id"></el-option>
                </el-select>
                <el-popover
                  placement="bottom-end"
                  width="600"
                  trigger="click">
                  <el-table :data="merchants">
                    <el-table-column width="150" property="userNickname" label="商户姓名"></el-table-column>
                    <el-table-column width="150" property="merchantName" label="店铺名"></el-table-column>
                    <el-table-column width="150" property="deliveryAddress" label="店铺地址"></el-table-column>
                    <el-table-column width="150" property="merchantPhone" label="店铺电话"></el-table-column>
                  </el-table>
                  <el-button slot="reference">所有商户</el-button>
                </el-popover>
              </div>
              <div style="margin-top: 5%;margin-left: -10%">
                  <el-row>
                    <label>当前界面：</label>
                    <el-tag type="primary" >用户个人</el-tag>
                    <el-button type="primary" plain v-if="user.type =='0'||user.type =='2'">申请成为商户</el-button>
                    <el-button type="primary" plain v-if="user.type =='1'||user.type =='3'" @click="goMerchantPersonal">前往商户主页</el-button>
                    <el-button type="primary" plain v-if="user.type =='2'||user.type =='3'">前往供应商主页</el-button>
                    <el-button type="primary" plain v-if="user.type =='0'||user.type =='1'">申请成为供应商</el-button>
                  </el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="15" style="margin-left: 17%">
            <div class="grid-content"></div>
<!--    订单区域-->
            <div class="grid-content" style="background-color: #ffffff">
              <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="4" @click="selectUserOrder">

                  <el-table max-height="300px" v-loading="loading" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
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
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态" >
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待付款" name="3" @click="selectUserOrder">
                  <el-table max-height="200px" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
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
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态" >
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待收货" name="1" @click="selectUserOrder">
                  <el-table max-height="200px" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
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
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态" >
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="已收货" name="2" @click="selectUserOrder">
                  <el-table max-height="200px" :data="tableData" border style="width: 100%;background-color: #eee" >
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
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane  name="5" label="前往订单>">
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
    <el-dialog title="个人信息" :visible.sync="dialogForm" width="600px">
      <el-form :model=userForm>
        <el-form-item label="用户头像:" label-width="150px">
          <div @click="changeImage">
            <el-avatar :size="60" :src="circleUrl"></el-avatar>
          </div>
        </el-form-item>
        <el-form-item label="用户账号：" label-width="160px">
          <el-input v-model="userForm.userName" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称：" label-width="160px">
          <el-input v-model="userForm.userNickname" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="用户电话：" label-width="160px">
          <el-input v-model="userForm.phone" style="width: 250px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="closeDialogForm">取 消</el-button>
        <el-button type="primary" @click="changeUser">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: "userOrder",
  data() {
    return {
      activeName:"3",
      userId:"",
      user:{},
      userForm:{},
      userNickname:"",
      loading:true,
      orderNum:"",
      userMsg:"",
      password:"",
      sex:"0",
      phone:"",
      birthday:"",
      tableData: [],
      tableData2: [],
      merchants:[],
      merchant:"",
      circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
      dialogForm:false
    }
  },
  methods: {
    handleClick(tab) {
      if (tab.name === "5"){this.$router.push('/UserOrder');}
      else {this.selectUserOrder();}

    },
    //查询订单
    selectUserOrder(){
      var _this=this;
      var params =new URLSearchParams();
      params.append("userId",this.userId);;
      params.append("orderNumber",this.orderNum);
      var orderStats=this.activeName;
      params.append("orderStats",orderStats);
      console.log(orderStats)
      this.$axios.post("userOrder/selectUserOrderByDto",params).then(function(result) {
        _this.loading=false;
        _this.tableData = result.data;
        // console.log(_this.tableData)
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
      // console.log(id)
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
    //查询提货商户
    selectMerchants() {
      var _this = this;
      function queryMerchant() {
        return _this.$axios.post("shopCart/queryMerchant");
      }
      function queryUser() {
        var params = new URLSearchParams();
        params.append("id", _this.userId);
        return _this.$axios.post("shopCart/queryUser", params);
      }
      this.$axios.all([queryMerchant(), queryUser()]).then(this.$axios.spread(function (res1, res2) {
        _this.merchants = res1.data;
        console.log(_this.merchants)
        if (res2.data.merchantId != "" && res2.data.merchantId != null) {
          _this.merchant = res2.data.merchantId;
        }
      })).catch();
    },
    //更改默认提货商户
    changeAddress(){
      var _this = this;
      // console.log(this.merchant)
      var params = new URLSearchParams();
      params.append("id", this.userId);
      params.append("merchantId", this.merchant);
      this.$axios.post("shopCart/updateUser", params).then().catch()
    },
    //打开修改个人信息模态框
    openDialogForm(){
      this.userForm=this.user;
      this.dialogForm=true
    },
    closeDialogForm(){
      this.dialogForm=false;
      this.userId=sessionStorage.getItem("userId");
      var _this = this;
      var params = new URLSearchParams();
      params.append("id", this.userId);
      this.$axios.post("shopCart/queryUser", params).then(function (result) {
        _this.userNickname=result.data.userNickname;
        _this.user=result.data;
        _this.merchant=_this.user.merchantId;
        // console.log(_this.user)
      }).catch();
    },
    //修改图片
    changeImage(){
      alert("111")
    },
    //提交个人信息的修改
    changeUser(){
      var _this = this;
      var params = new URLSearchParams();
      params.append("id", this.userId);
      params.append("username", this.userForm.username);
      params.append("userNickname", this.userForm.userNickname);
      params.append("phone", this.userForm.phone);
      this.$axios.post("shopCart/updateUser", params);
      this.dialogForm=false;
      var params1 = new URLSearchParams();
      params1.append("id", this.userId);
      this.$axios.post("shopCart/queryUser", params1).then(function (result) {
        _this.userNickname=result.data.userNickname;
        _this.user=result.data;
        _this.merchant=_this.user.merchantId;
        // console.log(_this.user)
      }).catch();
    },
    //前往商户主页
    goMerchantPersonal(){

    }

  },
  created() {
    this.userId=sessionStorage.getItem("userId");
    var _this = this;
    var params = new URLSearchParams();
    params.append("id", this.userId);
    this.$axios.post("shopCart/queryUser", params).then(function (result) {
        _this.userNickname=result.data.userNickname;
        _this.user=result.data;
        _this.merchant=_this.user.merchantId;
        // console.log(_this.user)
    }).catch();
    this.selectUserOrder();
    this.selectMerchants();
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
