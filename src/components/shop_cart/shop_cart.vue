<template>
  <!--购物车-->
  <div>
    <div style="padding-bottom: 52px">
      <el-row>
        <el-col :span="8" :offset="8">
          <div style="margin: 15px 0">
            <el-input
              placeholder="请输入商品名称"
              v-model="input"
              clearable>
              <el-button slot="append" @click="search" icon="el-icon-search"></el-button>
            </el-input>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <el-row>
            <el-col :span="3">
              <div class="writing_cartTop cart-body">
                全部商品&nbsp;{{ total }}
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="cart-thead cart-body">
            <el-row>
              <el-col :span="2">
                <div style="padding-left: 5px">
                  <el-checkbox @change="checkChange" v-model="isSelect"><span style="font-size: 12px; color: #434343;"
                                                                              class="cart-body">全选</span></el-checkbox>
                </div>
              </el-col>
              <el-col :span="2" :offset="1">
                <div>
                  商品
                </div>
              </el-col>
              <el-col :span="2" :push="7">
                <div>
                  单价
                </div>
              </el-col>
              <el-col :span="3" :push="7">
                <div>
                  数量
                </div>
              </el-col>
              <el-col :span="2" :push="9">
                <div>
                  小计
                </div>
              </el-col>
              <el-col :span="2" :push="9">
                <div>
                  操作
                </div>
              </el-col>
            </el-row>
          </div>
        </el-col>
        <el-col :span="16" v-for="(item, index) in tableData" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div :class="['item-item',{'item-checked':item.check}]">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox @change="on(item.check, item.id)" v-model="item.check"></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <div style="text-align: center;line-height: 80px">
                      <a href="javascript:void(0)" style="color: #2c3e50">
                        <el-image
                          class="p-img"
                          :src="item.imageUrl"
                        >
                          <div slot="error" style="background: #f3f3f3" class="image-slot">
                            <i class="el-icon-picture-outline"></i>
                          </div>
                        </el-image>
                      </a>
                    </div>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">{{ item.goodsName }}</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="2">
                    ￥{{ item.goodsPrice }}
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number @change="amountChange(item.id, item.amount)" size="mini" :max="item.goodsAmount"
                                       :min="1"
                                       class="number" v-model="item.amount"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" :offset="1" class="font cart-body p-price">
                    ￥{{ item.goodsPrice * item.amount | numFilter }}
                  </el-col>
                  <el-col :span="2">
                    <a href="javascript:void(0)" @click.prevent="removeOne(item.id)"
                       class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
      </el-row>
    </div>
    <div class="cart-floatbar cart-floatbar-fixed"
         style="position: fixed; transform: translateZ(0px); top: auto; bottom: 0px;">
      <div class="cart-floatbar">
        <el-row>
          <el-col :span="16" :offset="4">
            <div class="toolbar-wrap cart-body">
              <el-row>
                <el-col :span="2">
                  <div style="padding-left: 5px">
                    <el-checkbox @change="checkChange" v-model="isSelect"><span style="font-size: 12px; color: #434343;"
                                                                                class="cart-body">全选</span>
                    </el-checkbox>
                  </div>
                </el-col>
                <el-col :span="3">
                  <a href="javascript:void(0)" @click.prevent="removeBatch" class="move-in-a cart-body operation-a">删除选中的商品</a>
                </el-col>
                <el-col :span="2" :offset="1">
                  <a href="javascript:void(0)" @click.prevent="remove" class="move-in-a cart-body operation-a font">清理购物车</a>
                </el-col>
                <el-col :span="16">
                  <el-row>
                    <el-col :span="11" :offset="10">
                      <el-row>
                        <el-col :span="10">
                          <span class="amount-sum cart-body">已选择<span class="em">{{ summation }}</span>件商品</span>
                        </el-col>
                        <el-col :span="14">
                          <span class="amount-sum cart-body">总价：<span class="priceShow">￥{{
                              totalPrice | numFilter
                            }}</span></span>
                        </el-col>
                      </el-row>
                    </el-col>
                    <el-col :span="3">
                      <el-button class="common-submit-btn" @click="isVisible">去结算</el-button>
                    </el-col>
                  </el-row>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
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
        <el-button type="primary" @click="counter">提交订单</el-button>
      </div>
    </el-dialog>
    <el-dialog title="温馨提示" :visible.sync="dialogVisible" center>
      <div class="prompt-dialog"> 未获取到支付成功信息，请及时到订单中继续支付</div>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "shopCart",
  data() {
    return {
      tableData: [],
      input: "",
      total: 0,
      batch: [],
      isSelect: false,
      dialogFormVisible: false,
      submitForm: {merchantId: 0},
      merchantData: [],
      formLabelWidth: "120px",
      dialogVisible: false,
      userId: -1
    };
  },
  methods: {
    getData() {
      var _this = this;
      var params = new URLSearchParams();
      params.append("userId", this.userId);
      params.append("goodsName", this.input);
      this.$axios.post("shopCart/query", params).then(function (result) {
        _this.tableData = result.data.map(item => {
          item.imageUrl = "http://127.0.0.1:8090/code/" + item.imageUrl;
          return item;
        });
      }).catch();
    },
    getTotal() {
      var _this = this;
      var params = new URLSearchParams();
      params.append("userId", this.userId);
      params.append("goodsName", this.input);
      this.$axios.post("shopCart/count", params).then(function (result) {
        _this.total = result.data;
      }).catch();
    },
    getUserId() {
      this.userId = sessionStorage.getItem("userId");
    },
    search() {
      this.getTotal();
      this.getData();
      this.isSelect = false;
    },
    amountChange(id, amount) {
      var _this = this;
      var params = new URLSearchParams();
      params.append("id", id);
      params.append("amount", amount);
      this.$axios.post("shopCart/updateById", params).then(function (result) {
        _this.getTotal();
      }).catch();
    },
    removeOne(id) {
      var _this = this;

      function removeById() {
        var params = new URLSearchParams();
        params.append("id", id);
        return _this.$axios.post("shopCart/removeById", params);
      }

      function query() {
        var params = new URLSearchParams();
        params.append("userId", _this.userId);
        params.append("goodsName", _this.input);
        return _this.$axios.post("shopCart/query", params);
      }

      this.$axios.all([removeById()]).then(this.$axios.spread(function (result) {
        query().then(function (response) {
          _this.getTotal();
          _this.tableData = response.data.map(item => {
            item.imageUrl = "http://127.0.0.1:8090/code/" + item.imageUrl;
            return item;
          });
          _this.batch.splice(_this.batch.findIndex(item => item == id), 1);
          for (var i = 0; i < _this.batch.length; i++) {
            var no = _this.batch[i];
            for (var j = 0; j < _this.tableData.length; j++) {
              if (no == _this.tableData[j].id) {
                _this.tableData[j].check = true;
                break;
              }
            }
          }
          if (_this.batch.length == 0) {
            _this.batch = [];
            _this.isSelect = false;
          }
        }).catch();
      })).catch();
    },
    on(check, id) {
      var batch = this.batch;
      var tableData = this.tableData;
      var bool = false;
      if (check) {
        batch.push(id);
        bool = true;
      } else {
        batch.splice(batch.findIndex(item => item == id), 1);
        bool = false;
      }
      if (batch.length == tableData.length) {
        this.isSelect = true;
      } else {
        this.isSelect = false;
      }
    },
    checkChange(val) {
      if (val) {
        if (this.tableData.length != 0) {
          this.batch = this.tableData.map(item => item = item.id);
          this.tableData.forEach(item => item.check = true);
        } else {
          this.$message({
            showClose: true,
            message: '购物车是空的'
          });
          this.isSelect = false;
        }
      } else {
        this.batch = [];
        this.tableData.forEach(item => item.check = false);
      }
    },
    remove() {
      if (this.tableData.length == 0) {
        this.$message({
          showClose: true,
          message: '购物车是空的'
        });
        return;
      }
      this.$confirm('此操作将清空整个购物车, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        var _this = this;
        var params = new URLSearchParams();
        params.append("userId", this.userId);
        this.$axios.post("shopCart/remove", params).then(function (result) {
          _this.getTotal();
          _this.getData();
          _this.isSelect = false;
          _this.batch = [];
          _this.$message({
            showClose: true,
            type: 'success',
            message: '操作成功!'
          });
        }).catch();
      }).catch(() => {
        this.$message({
          showClose: true,
          type: 'info',
          message: '已取消操作'
        });
      });
    },
    removeBatch() {
      if (this.batch.length != 0) {
        var _this = this;
        this.$axios({
          method: 'post',
          url: 'shopCart/removeByIds',
          data: JSON.stringify(_this.batch),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        }).then(function (result) {
          _this.getData();
          _this.getTotal();
          _this.batch = [];
          if (_this.isSelect) {
            _this.isSelect = false;
          }
        }).catch();
      } else {
        this.$message({
          showClose: true,
          message: '请至少选择一个商品！',
          type: 'error'
        });
      }
    },
    isVisible() {
      if (this.batch.length != 0) {
        this.dialogFormVisible = true;
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
    toSettle() {
      var _this = this;

      function updateUser() {
        var params = new URLSearchParams();
        params.append("id", _this.userId);
        params.append("merchantId", _this.submitForm.merchantId);
        return _this.$axios.post("shopCart/updateUser", params);
      }

      function saveUserOrder() {
        var params = new URLSearchParams();
        params.append("userId", _this.userId);
        params.append("addressId", _this.submitForm.merchantId);
        params.append("amount", _this.summation);
        params.append("orderPrice", _this.totalPrice);
        params.append("orderStats", "1");
        return _this.$axios.post("shopCart/saveUserOrder", params);
      }

      function saveMerchantOrder() {
        var params = new URLSearchParams();
        params.append("merchantId", _this.submitForm.merchantId);
        params.append("amount", _this.summation);
        params.append("stats", "0");
        return _this.$axios.post("shopCart/saveMerchantOrder", params);
      }

      function listByIds() {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/listByIds',
          data: JSON.stringify(_this.batch),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }

      function removeByIds() {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/removeByIds',
          data: JSON.stringify(_this.batch),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
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

      this.$axios.all([updateUser(), saveUserOrder(), listByIds(), saveMerchantOrder()]).then(this.$axios.spread(function (res1, res2, res3, res4) {
        var nary = res3.data.map((item, index) => {
          return Object.assign(item, {orderId: res2.data, goodsAmount: item.amount, merchantOrderId: res4.data});
        });
        var ary = [];
        res3.data.forEach((item, index) => {
          var json = {};
          json["id"] = item.goodsId;
          json["goodsSales"] = item.amount;
          ary.push(json);
        });
        _this.$axios.all([saveUserOrderDetail(nary), updateGood(ary), saveMerchantOrderDetail(nary)]).then(_this.$axios.spread(function (res1, res2, res3) {
          removeByIds().then(function (result) {
            _this.getTotal();
            _this.getData();
            _this.batch = [];
            _this.isSelect = false;
            // _this.$router.push('/');
          }).catch();
        })).catch();
      })).catch();
    },
    cancel() {
      var _this = this;

      function saveUserOrder() {
        var params = new URLSearchParams();
        params.append("userId", _this.userId);
        params.append("addressId", _this.submitForm.merchantId);
        params.append("amount", _this.summation);
        params.append("orderPrice", _this.totalPrice);
        params.append("orderStats", "0");
        return _this.$axios.post("shopCart/saveUserOrder", params);
      }

      function listByIds() {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/listByIds',
          data: JSON.stringify(_this.batch),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }

      function removeByIds() {
        return _this.$axios({
          method: 'post',
          url: 'shopCart/removeByIds',
          data: JSON.stringify(_this.batch),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
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

      this.$axios.all([saveUserOrder(), listByIds()]).then(this.$axios.spread(function (res1, res2) {
        var nary = res2.data.map((item, index) => {
          return Object.assign(item, {orderId: res1.data, goodsAmount: item.amount});
        });
        saveUserOrderDetail(nary).then(function (result) {
          removeByIds().then(function (result) {
            _this.getTotal();
            _this.getData();
            _this.batch = [];
            _this.isSelect = false;
            _this.dialogVisible = true;
          }).catch();
        }).catch();
      })).catch();
    },

    counter() {
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
    }
  },
  computed: {
    totalPrice() {
      if (this.batch.length != 0) {
        var totalPrice = 0;
        for (var i = 0; i < this.batch.length; i++) {
          var no = this.batch[i];
          for (var j = 0; j < this.tableData.length; j++) {
            if (no == this.tableData[j].id) {
              var unitPrice = this.tableData[j].goodsPrice * this.tableData[j].amount;
              totalPrice += unitPrice;
              break;
            }
          }
        }
        return totalPrice;
      }
      return 0;
    },
    summation() {
      if (this.batch.length != 0) {
        var summation = 0;
        for (var i = 0; i < this.batch.length; i++) {
          var no = this.batch[i];
          for (var j = 0; j < this.tableData.length; j++) {
            if (no == this.tableData[j].id) {
              var subTotal = this.tableData[j].amount;
              summation += subTotal;
              break;
            }
          }
        }
        return summation;
      }
      return 0;
    }
  },
  filters: {
    numFilter(val) {
      var realVal = parseFloat(val).toFixed(2);
      return realVal;
    }
  },
  created() {
    this.getUserId();
    this.getTotal();
    this.getData();
  }
}
</script>

<style scoped>
.cart-body {
  font-family: verdana, Microsoft YaHei, SimSun, -apple-system, BlinkMacSystemFont, PingFang SC;
}

.writing_cartTop {
  width: 100%;
  height: 40px;
  color: #e2231a;
  line-height: 40px;
  text-align: center;
  font-weight: 700;
  font-size: 16px;
}

.cart-thead {
  display: block;
  height: 32px;
  line-height: 32px;
  margin: 0;
  padding: 5px 0;
  background: #f3f3f3;
  border: 1px solid #e9e9e9;
  border-top: 0;
  position: relative;
  font-size: 12px;
  color: #434343;
}

.item-list {
  border: 1px solid #f1f1f1;
  border-top: 2px solid #aaa;
  background: #fff;
}

.item-item {
  background: #fff;
  position: relative;
  border-top: 1px solid #c5c5c5;
  line-height: 20px;
  padding: 15px 0px 1px 5px;
  margin: 0;
  clear: both;
}

.item-form {
  display: block;
  margin-bottom: 20px;
}

.p-img {
  width: 80px;
  height: 80px;
}

.goods-item {
  white-space: normal;
  word-break: break-all;
  overflow: hidden;
  font-size: 12px;
  padding: 0 0 1px 5px;
}

.goods-item a {
  color: #434343;
  font-size: 12px;
}

a {
  text-decoration: none;
}

.p-price {
  color: #333;
  font-size: 12px;
  text-align: center;
}

.font {
  font-weight: bolder;
}

.number {
  width: 100px;
}

.move-in-a:hover {
  color: #e2231a;
}

.item-checked {
  background: #fff4e8;
}

.shop {
  height: 30px;
  line-height: 30px;
  margin: 0;
  border: 0;
  vertical-align: baseline;
}

.cart-floatbar {
  position: relative;
  height: 52px;
  z-index: 99;
  box-sizing: content-box;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
}

.cart-floatbar-fixed {
  width: 100%;
  left: 0;
  background: #fff;
  box-shadow: 0 -1px 8px rgb(0 1 1 / 8%);
}

.toolbar-wrap {
  height: 50px;
  font-size: 12px;
  margin: 0;
  padding: 0;
  border: 0;
  vertical-align: baseline;
  line-height: 50px;
}

.operation-a {
  color: #666;
  font-size: 12px;
}

.amount-sum {
  color: #999;
  cursor: pointer;
}

.em {
  color: #e2231a;
  font-weight: 700;
  margin: 0 3px;
}

.priceShow {
  font-size: 16px;
  color: #e2231a;
  font-weight: 700;
}

.common-submit-btn {
  display: block;
  position: relative;
  height: 52px;
  color: #fff;
  text-align: center;
  font-size: 18px;
  font-family: Microsoft YaHei;
  background: #e54346;
  overflow: hidden;
  cursor: pointer;
}

.prompt-dialog {
  text-align: center;
}
</style>
