<template>
  <div>
    <div>
      <el-row>
        <el-col :span="16" :offset="4">
          <el-row>
            <el-col :span="3">
              <div class="writing_cartTop cart-body">
                全部商品&nbsp;103
              </div>
            </el-col>
          </el-row>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="cart-thead cart-body">
            <el-row>
              <el-col :span="2">
                  <el-checkbox><span style="font-size: 12px; color: #434343;" class="cart-body">全选</span></el-checkbox>
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
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
                  </el-col>
                </el-row>
              </div>
            </div>
          </div>
        </el-col>
        <el-col :span="16" :offset="4">
          <div class="shop"></div>
          <div class="item-list">
            <div class="item-item">
              <div class="item-form">
                <el-row>
                  <el-col :span="1">
                    <el-checkbox></el-checkbox>
                  </el-col>
                  <el-col :span="2">
                    <a href="">
                      <img class="p-img" src="" alt="">
                    </a>
                  </el-col>
                  <el-col :span="6">
                    <div class="goods-item cart-body">
                      <a href="" class="move-in-a">OPPO充电器闪充原装r15 梦境版 r11s plus r9s a79 a9x手机头数据线快充</a>
                    </div>
                  </el-col>
                  <el-col :span="2" class="cart-body p-price" :offset="3">
                    ￥79.00000
                  </el-col>
                  <el-col :span="4">
                    <div style="padding-left: 20px">
                      <el-input-number size="mini" :max="200" :min="1" class="number" v-model="num"></el-input-number>
                    </div>
                  </el-col>
                  <el-col :span="3" class="font cart-body p-price">
                    ￥79.00000000
                  </el-col>
                  <el-col :span="2">
                    <a href="" class="move-in-a cart-body p-price">删除</a>
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
                  <el-checkbox><span style="font-size: 12px; color: #434343;" class="cart-body">全选</span></el-checkbox>
                </el-col>
                <el-col :span="2">
                  <a href="" class="move-in-a cart-body operation-a">删除选中的商品</a>
                </el-col>
                <el-col :span="2" :offset="1">
                  <a href="" class="move-in-a cart-body operation-a font">清理购物车</a>
                </el-col>
                <el-col :span="17">
                    <el-row>
                      <el-col :span="11" :offset="10">
                          <el-row>
                            <el-col :span="10">
                              <span class="amount-sum cart-body">已选择<span class="em">240000000</span>件商品</span>
                            </el-col>
                            <el-col :span="14">
                              <span class="amount-sum cart-body">总价：<span class="priceShow">￥127,113.30000</span></span>
                            </el-col>
                          </el-row>
                      </el-col>
                      <el-col :span="3">
                        <el-button class="common-submit-btn">去结算</el-button>
                      </el-col>
                    </el-row>
                </el-col>
              </el-row>
            </div>
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopCart",
  data() {
    return {
      nary: [],
      num: 1
    };
  },
  methods: {
    getData() {
      var _this = this;
      this.$axios.post("shopCart/page").then(function (result) {
        _this.nary = result.data.list;
      }).catch();
    }
  },
  // created() {
  //   this.getData();
  // }
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
}

a {
  text-decoration: none;
}

.p-price {
  color: #333;
  font-size: 12px;
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

div {
  display: block;
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

.operation-a{
  color: #666;
  font-size: 12px;
}

.amount-sum{
  color: #999;
  cursor: pointer;
}

.em {
  color: #e2231a;
  font-weight: 700;
  margin: 0 3px;
}

.priceShow{
  font-size: 16px;
  color: #e2231a;
  font-weight: 700;
}

.common-submit-btn{
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
</style>
