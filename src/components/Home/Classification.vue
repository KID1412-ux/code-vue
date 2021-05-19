<template>
  <div id="app">
    <div id="div-cx" style="margin-top: 15px; width: 700px">
      <el-input placeholder="请输入内容" v-model="input3" style="width: 550px" class="input-with-select" clearable>
        <el-button slot="append" icon="el-icon-search" @click="handleClick()"></el-button>
      </el-input>
    </div>
    <div style="padding-left: 150px;padding-right: 150px;text-align: center">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="全部" name="0">

          <div v-if="GoodsSearch.length>0" style="margin-top: 50px">

            <el-row :gutter="20" style="margin-top: 30px">
              <el-col :span="6" v-for="good in GoodsSearch" style="margin-top: 10px">
                <div @click="selectGoodById(good.id)">
                  <el-card :body-style="{ padding: '0px' }">
                    <img style="width: 326px"
                         :src="good.imageUrl"
                         class="image">
                    <div style="padding: 14px;text-align: left">
                      <span class="span">{{ good.goodsName }}</span>
                      <div class="bottom clearfix">
                        <a style="font-size: 25px;color: orangered"><span
                          style="font-size: 15px">￥</span>{{ good.goodsPrice }}</a><span
                        style="color: #99a9bf">{{ good.goodsSales }}人已购买</span>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>

          <div style="text-align: center;margin-top: 255px;" v-if="GoodsSearch.length<1">
            <h1>未查找到相关商品</h1>
          </div>
        </el-tab-pane>
        <el-tab-pane v-for="fl in fls" :label=fl.goodsTypeName :name=String(fl.id) @tab-click="search(input3)">

          <div v-if="GoodsSearch.length>0" style="margin-top: 50px">

            <el-row :gutter="20" style="margin-top: 30px">
              <el-col :span="6" v-for="good in GoodsSearch" style="margin-top: 10px">
                <div @click="selectGoodById(good.id)">
                  <el-card :body-style="{ padding: '0px' }">
                    <img style="width: 326px"
                         :src="good.imageUrl"
                         class="image">
                    <div style="padding: 14px;text-align: left">
                      <span class="span">{{ good.goodsName }}</span>
                      <div class="bottom clearfix">
                        <a style="font-size: 25px;color: orangered"><span
                          style="font-size: 15px">￥</span>{{ good.goodsPrice }}</a><span
                        style="color: #99a9bf">{{ good.goodsSales }}人已购买</span>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </div>

          <div style="text-align: center;margin-top: 255px;" v-if="GoodsSearch.length<1">
            <h1>未查找到相关商品</h1>
          </div>

        </el-tab-pane>
      </el-tabs>
    </div>

    <el-divider></el-divider>

    <div style="text-align: center">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="pageNo"
        :page-sizes="[8, 12, 16, 20]"
        :page-size="8"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total">
      </el-pagination>
    </div>

<!--    商品详情，购买，加入购物车组件-->
    <el-dialog
      title="商品详情"
      :visible.sync="dialogVisible"
      :fullscreen="true"
      :before-close="handleClose">
      <div style="margin-top: 20px">
        <div style="float: left;margin-left: 200px;width: 500px;height: 500px">
          <img height="100%" width="100%" :src="soso.imageUrl">
        </div>
        <div style="width: 500px;height: 500px;margin-left: 750px">
          <h1 style="color: #333333">{{ soso.goodsName }}</h1>
          <a style="font-size: 15px">价格：</a>
          <a style="color: red;font-size: 25px">￥{{soso.goodsPrice}}</a>
          <div style="margin-top: 20px;padding-bottom: 20px;height: 200px">
            <label>商品描述：{{soso.goodsDescribe}}</label>
          </div>
          <a>销量：{{soso.goodsSales}}</a>
          <br>
          <a>库存：{{warehouse.goodsAmount}}</a>
          <el-divider></el-divider>
          <div v-if="warehouse.goodsAmount>0">
            <label>数量：<el-input-number v-model="num" @change="handleChange" :min="1" :max=warehouse.goodsAmount label="描述文字"></el-input-number></label>
            <el-button type="danger" @click="isVisible">立即购买</el-button>
            <el-button type="warning" @click="addCart">加入购物车</el-button>
          </div>
          <div v-if="warehouse.goodsAmount<1">
            <label>数量：<el-input-number v-model="num" @change="handleChange" :min="0" :max="1" label="描述文字"></el-input-number></label>
            <el-button type="danger" :plain="true" @click="kcbz()">立即购买</el-button>
            <el-button type="warning" @click="kcbz()">加入购物车</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
    <el-dialog title="结算页" :visible.sync="dialogFormVisible" center>
      <el-form :model="submitForm" :label-width="formLabelWidth">
        <el-form-item label="自提店">
          <el-select placeholder="请选择自提店" v-model="submitForm.merchantId">
            <el-option label="--请选择--" :value="0"></el-option>
            <el-option v-for="(item, index) in merchantData" :label="item.merchantName" :value="item.id"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">返回</el-button>
        <el-button type="primary" @click="counter">提交订单</el-button>
      </div>
    </el-dialog>
    <el-dialog title="温馨提示" :visible.sync="dialogVisible1" center>
      <div style="text-align: center"> 未获取到支付成功信息，请及时到订单中继续支付</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible1 = false">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "Classification",
  data() {
    return {
      activeName:String(this.$route.params.id),
      fls:[],
      input3:this.$route.params.ss,
      GoodsSearch:[],
      pageSize: 8,
      pageNo: 1,
      total: 0,
      soso:[],
      warehouse:[],
      dialogFormVisible: false,
      submitForm: {merchantId: 0},
      merchantData: [],
      formLabelWidth: "120px",
      dialogVisible: false,
      dialogVisible1: false,
      num: 1
    };
  },
  methods: {
    handleClick() {
      var _this = this;
      var param = new URLSearchParams();
      param.append("pageSize", this.pageSize)
      param.append("pageNo", this.pageNo)
      param.append("search", this.input3)
      param.append("flID",this.activeName)
      this.$axios.post("/Goods/Search", param).then(function (items) {
        _this.GoodsSearch = items.data.list.map(item => {
          item.imageUrl = "http://127.0.0.1:8090/code/" + item.imageUrl;
          return item;
        });
        _this.total = items.data.total;
      }).catch()
    },
    AllFenLei(){
      var _this=this;
      this.$axios.post("/Goods/FenLei").then(function (item){
        _this.fls=item.data;
      }).catch()
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.handleClick();
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      this.handleClick();
    },
    selectGoodById(id){
      var _this=this;
      var param= new URLSearchParams();
      param.append("id",id)
      this.$axios.post("/Goods/selectGoodById",param).then(function (item){
        var map=item.data;
        _this.soso=map.good;
        _this.soso.imageUrl="http://127.0.0.1:8090/code/" + map.good.imageUrl;
        _this.warehouse=map.warehouse;
        _this.dialogVisible=true;
      }).catch()
    },
    handleClose(done) {
      var _this=this;
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
          _this.num=1;
        })
        .catch(_ => {});
    },
    handleChange(value) {
      console.log(value);
    },
    addCart() {
      var userId = sessionStorage.getItem("userId");
      if (userId == null) {
        alert('请先完成登录！');
        this.$router.push('/login');
        return;
      }
      var _this = this;
      var param = new URLSearchParams();
      param.append("goodsId", this.soso.id);
      param.append("userId", userId);
      param.append("amount", this.num);
      param.append("goodsPrice", this.soso.goodsPrice);
      this.$axios.post("shopCart/saveOrUpdate", param).then(function (result) {
        _this.$message({
          showClose: true,
          type: 'success',
          message: '成功加入购物车!'
        });
      }).catch()
    },
    kcbz(){
      this.$message('库存不足');
    },
    isVisible() {
      var userId = sessionStorage.getItem("userId");
      if (userId == null) {
        alert('请先完成登录！');
        this.$router.push('/login');
        return;
      }
      this.dialogFormVisible = true;
      var _this = this;
      // userId = sessionStorage.getItem("userId"),
      function queryMerchant() {
        return _this.$axios.post("shopCart/queryMerchant");
      }

      function queryUser() {
        var params = new URLSearchParams();
        params.append("id", userId);
        return _this.$axios.post("shopCart/queryUser", params);
      }

      this.$axios.all([queryMerchant(), queryUser()]).then(this.$axios.spread(function (res1, res2) {
        _this.merchantData = res1.data;
        if (res2.data.merchantId != "" && res2.data.merchantId != null) {
          _this.submitForm.merchantId = res2.data.merchantId;
        }
      })).catch();
    },
    counter() {
      if (this.submitForm.merchantId == 0) {
        this.$message({
          showClose: true,
          type: 'info',
          message: '请选择自提店'
        });
        return;
      }
      this.dialogFormVisible = false;
      this.$prompt('输入数字支付密码', '收银台', {
        center: true,
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        inputPattern: /^\d{6}$/,
        inputErrorMessage: '密码格式不正确'
      }).then(({value}) => {
        this.toSettle();
      }).catch(() => {
        this.cancel();
      });
    },
    toSettle() {
      var userId = sessionStorage.getItem("userId");
      var _this = this;
      function updateUser() {
        var params = new URLSearchParams();
        params.append("id", userId);
        params.append("merchantId", _this.submitForm.merchantId);
        return _this.$axios.post("shopCart/updateUser", params);
      }
      function saveUserOrder() {
        var params = new URLSearchParams();
        params.append("userId", userId);
        params.append("addressId", _this.submitForm.merchantId);
        params.append("amount", _this.num);
        params.append("orderPrice", _this.soso.goodsPrice*_this.num);
        params.append("orderStats", "1");
        return _this.$axios.post("shopCart/saveUserOrder", params);
      }
      function saveMerchantOrder() {
        var params = new URLSearchParams();
        params.append("merchantId", _this.submitForm.merchantId);
        params.append("amount", _this.num);
        params.append("stats", "0");
        return _this.$axios.post("shopCart/saveMerchantOrder", params);
      }
      function saveUserOrderDetail(nary) {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/saveUserOrderDetail',
          data: JSON.stringify(nary),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }
      function saveMerchantOrderDetail(nary) {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/saveMerchantOrderDetail',
          data: JSON.stringify(nary),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }
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
      this.$axios.all([updateUser(), saveUserOrder(), saveMerchantOrder()]).then(this.$axios.spread(function (res1, res2, res3, res4) {
        var nary = [];
        var json1={};
        json1["orderId"]=res2.data;
        json1["merchantOrderId"]=res3.data;
        json1["goodsId"]=_this.soso.id;
        json1["goodsAmount"]=_this.num;
        json1["goodsPrice"]=_this.soso.goodsPrice;
        nary.push(json1);
        console.log(nary)
        var ary = [];
        var json2 = {};
        json2["id"] = _this.soso.id;
        json2["goodsSales"] = _this.num;
        ary.push(json2);
        _this.$axios.all([saveUserOrderDetail(nary), updateGood(ary), saveMerchantOrderDetail(nary)]).then(_this.$axios.spread(function (res1, res2, res3) {
          _this.$router.push('/UserOrder');
        })).catch();
      })).catch();
    },
    cancel() {
      var userId = sessionStorage.getItem("userId");
      var _this = this;
      function saveUserOrder() {
        var params = new URLSearchParams();
        params.append("userId", userId);
        params.append("addressId", _this.submitForm.merchantId);
        params.append("amount", _this.num);
        params.append("orderPrice", _this.soso.goodsPrice*_this.num);
        params.append("orderStats", "0");
        return _this.$axios.post("shopCart/saveUserOrder", params);
      }

      function saveUserOrderDetail(nary) {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/saveUserOrderDetail',
          data: JSON.stringify(nary),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }
      this.$axios.all([saveUserOrder()]).then(this.$axios.spread(function (res1) {
        var nary =[];
        var json1={};
        json1["orderId"]=res1.data;
        json1["goodsId"]=_this.soso.id;
        json1["goodsAmount"]=_this.num;
        json1["goodsPrice"]=_this.soso.goodsPrice;
        nary.push(json1);
        saveUserOrderDetail(nary).then(function (result) {
          _this.dialogVisible1 = true;
        }).catch();
      })).catch();
    },
    // search(input3){
    //   var _this = this;
    //   var param = new URLSearchParams();
    //   param.append("search", input3)
    //   param.append("flID",this.activeName)
    //   this.$axios.post("/Goods/Search", param).then(function (items) {
    //     _this.GoodsSearch = items.data;
    //   }).catch()
    // }
  },
  created() {
    this.AllFenLei();
    this.handleClick();
  }
}
</script>

<style scoped>

#div-cx {
  text-align: center;
  margin: 20px auto;
}

.span{
  max-width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /*超出部分用...代替*/
}

.el-card:hover {
  border: 1px solid red;
}

</style>
