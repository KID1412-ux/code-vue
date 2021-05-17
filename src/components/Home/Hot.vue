<template>
  <div class="divcss5">
    <div style="padding-left: 150px;padding-right: 150px">

      <div v-if="dianqis.length>0">
        <el-tabs type="border-card">
          <el-tab-pane label="电器">
            <el-row :gutter="20">
              <el-col :span="6" v-for="dq in dianqis">
                <div @click="selectGoodById(dq.id)" >
                  <el-card :body-style="{ padding: '0px' }">
                    <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;text-align: left">
                      <span class="span">{{dq.goodsName}}</span>
                      <div class="bottom clearfix">
                        <a style="font-size: 25px;color: orangered"><span style="font-size: 15px">￥</span>{{dq.goodsPrice}}</a><span style="color: #99a9bf">{{dq.goodsSales}}人已购买</span>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <div style="float: right;margin-top: 15px">
            <a @click="more(1)" class="a1">更多商品>></a>
          </div>
        </el-tabs>
      </div>

      <div v-if="bangongs.length>0" style="margin-top: 10px">
        <el-tabs type="border-card">
          <el-tab-pane label="办公">
            <el-row :gutter="20">
              <el-col :span="6" v-for="bg in bangongs">
                <div @click="selectGoodById(bg.id)" >
                  <el-card :body-style="{ padding: '0px' }">
                    <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                      <span class="span">{{bg.goodsName}}</span>
                      <div class="bottom clearfix">
                        <a style="font-size: 25px;color: orangered"><span style="font-size: 15px">￥</span>{{bg.goodsPrice}}</a><span style="color: #99a9bf">{{bg.goodsSales}}人已购买</span>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <div style="float: right;margin-top: 15px">
            <a @click="more(4)" class="a1">更多商品>></a>
          </div>
        </el-tabs>
      </div>

      <div v-if="meizhuangs.length>0" style="margin-top: 10px">
        <el-tabs type="border-card">
          <el-tab-pane label="美妆">
            <el-row :gutter="20">
              <el-col :span="6" v-for="mz in meizhuangs">
                <div @click="selectGoodById(mz.id)" >
                  <el-card :body-style="{ padding: '0px' }">
                    <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;" class="dspan">
                      <span class="span">{{mz.goodsName}}</span>
                      <div class="bottom clearfix">
                        <a style="font-size: 25px;color: orangered"><span style="font-size: 15px">￥</span>{{mz.goodsPrice}}</a><span style="color: #99a9bf">{{mz.goodsSales}}人已购买</span>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <div style="float: right;margin-top: 15px">
            <a @click="more(3)" class="a1">更多商品>></a>
          </div>
        </el-tabs>
      </div>

      <div v-if="shipins.length>0" style="margin-top: 10px">
        <el-tabs type="border-card">
          <el-tab-pane label="食品">
            <el-row :gutter="20">
              <el-col :span="6" v-for="sp in shipins">
                <div @click="selectGoodById(sp.id)" >
                  <el-card :body-style="{ padding: '0px' }">
                    <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                    <div style="padding: 14px;">
                      <span class="span">{{sp.goodsName}}</span>
                      <div class="bottom clearfix">
                        <a style="font-size: 25px;color: orangered"><span style="font-size: 15px">￥</span>{{sp.goodsPrice}}</a><span style="color: #99a9bf">{{sp.goodsSales}}人已购买</span>
                      </div>
                    </div>
                  </el-card>
                </div>
              </el-col>
            </el-row>
          </el-tab-pane>
          <div style="float: right;margin-top: 15px">
            <a @click="more(5)" class="a1">更多商品>></a>
          </div>
        </el-tabs>
      </div>


    </div>

    <el-dialog
      title="商品详情"
      :visible.sync="dialogVisible"
      :fullscreen="true"
      :before-close="handleClose">
      <div style="margin-top: 20px">
        <div style="float: left;margin-left: 200px;width: 500px;height: 500px">
          <img height="100%" width="100%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
        </div>
        <div style="width: 500px;height: 500px;margin-left: 750px">
          <h1 style="color: #333333">{{ good.goodsName }}</h1>
          <a style="font-size: 15px">价格：</a>
          <a style="color: red;font-size: 25px">￥{{good.goodsPrice}}</a>
          <div style="margin-top: 20px;padding-bottom: 20px;height: 200px">
            <label>商品描述：{{good.goodsDescribe}}</label>
          </div>
          <a>销量：{{good.goodsSales}}</a>
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
import Test from "../../AppUserLogin";
export default {
  name: "Hot",
  components: {Test},
  data(){
    return{
      msg:"热门商品",
      dianqis:[],
      bangongs:[],
      meizhuangs:[],
      shipins:[],
      good:[],
      warehouse:[],
      dialogFormVisible: false,
      submitForm: {merchantId: 0},
      merchantData: [],
      formLabelWidth: "120px",
      dialogVisible: false,
      dialogVisible1: false,
      num: 1
    }
  },
  methods:{
    // getGoods(){
    //   var _this=this;
    //   this.$axios.post("/Goods/rexiao").then(function (items){
    //     _this.goods=items.data;
    //   }).catch()
    // },
    getGoods(){
      var _this=this;
      this.$axios.post("/Goods/tuijian").then(function (items){
        var goods=items.data;
        _this.dianqis=goods.dianqi;
        _this.bangongs=goods.bangong;
        _this.meizhuangs=goods.meizhuang;
        _this.shipins=goods.shipin;
      }).catch()
    },
    selectGoodById(id){
      var _this=this;
      var param= new URLSearchParams();
      param.append("id",id)
      this.$axios.post("/Goods/selectGoodById",param).then(function (item){
        var map=item.data;
        _this.good=map.good;
        console.log(_this.good);
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
      param.append("goodsId", this.good.id);
      param.append("userId", userId);
      param.append("amount", this.num);
      param.append("goodsPrice", this.good.goodsPrice);
      this.$axios.post("shopCart/saveOrUpdate", param).then(function (result) {
        _this.$message({
          showClose: true,
          type: 'success',
          message: '成功加入购物车!'
        });
      }).catch()
    },
    more(id){
      alert(id)
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
        params.append("orderPrice", _this.good.goodsPrice*_this.num);
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
        json1["goodsId"]=_this.good.id;
        json1["goodsAmount"]=_this.num;
        json1["goodsPrice"]=_this.good.goodsPrice;
        nary.push(json1);
        console.log(nary)
        var ary = [];
        var json2 = {};
        json2["id"] = _this.good.id;
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
        params.append("orderPrice", _this.good.goodsPrice*_this.num);
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
        json1["goodsId"]=_this.good.id;
        json1["goodsAmount"]=_this.num;
        json1["goodsPrice"]=_this.good.goodsPrice;
        nary.push(json1);
        saveUserOrderDetail(nary).then(function (result) {
          _this.dialogVisible1 = true;
        }).catch();
      })).catch();
    },
  },

  created() {
    this.getGoods()
  }
}
</script>

<style scoped>

.a1{
  font-size: 15px;
}

.a1:hover{
  color: red;
}

.span{
  max-width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /*超出部分用...代替*/
}

.divcss5 {
  width: 100%;
  height: 100%;
  padding-top: 20px;
}

last-child {
  margin-bottom: 0;
}

.grid-content {
  border-radius: 4px;
  min-height: 300px;
  border: 1px solid gray;
}

.el-col {
  padding-top: 12px
}

.grid-content:hover {
  border: 1px solid red;
}

.el-card:hover {
  border: 1px solid red;
}
</style>
