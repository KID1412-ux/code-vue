<template>
  <div class="divcss5">
    <div style="padding-left: 150px;padding-right: 150px">
      {{dianqis}}
      <hr>
      {{bangongs}}
      <hr>
      {{meizhuangs}}
      <hr>
      {{shipins}}
      <hr>
      {{gongyepins}}
      <span>电器</span>
      <el-row :gutter="20">
        <el-col :span="6" v-for="dq in dianqis">
          <div @click="selectGoodById(dq.id)" >
            <el-card :body-style="{ padding: '0px' }">
              <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>{{dq.goodsName}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button  type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

      <span>办公</span>
      <el-row :gutter="20">
        <el-col :span="6" v-for="bg in bangongs">
          <div @click="selectGoodById(bg.id)" >
            <el-card :body-style="{ padding: '0px' }">
              <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>{{bg.goodsName}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button  type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

      <span>美妆</span>
      <el-row :gutter="20">
        <el-col :span="6" v-for="mz in meizhuangs">
          <div @click="selectGoodById(mz.id)" >
            <el-card :body-style="{ padding: '0px' }">
              <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>{{mz.goodsName}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button  type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

      <span>食品</span>
      <el-row :gutter="20">
        <el-col :span="6" v-for="sp in shipins">
          <div @click="selectGoodById(sp.id)" >
            <el-card :body-style="{ padding: '0px' }">
              <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>{{sp.goodsName}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button  type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>

      <span>工业品</span>
      <el-row :gutter="20">
        <el-col :span="6" v-for="good in goods">
          <!--          <div class="grid-content" @click="selectGoodById(good.id)">-->
          <!--            <el-image style="width: 100%; height: 200px" :src="require('./../../img/logo.png')" fit="contain"></el-image>-->
          <!--            <div style="text-align: center">-->
          <!--              <div>-->
          <!--                <a style="font-size: 20px">{{good.goodsName}}</a>-->
          <!--              </div>-->
          <!--              <div>-->
          <!--                <span>{{good.goodsPrice}}元/500g</span>-->
          <!--              </div>-->
          <!--              <div>-->
          <!--                <div style="float:right">-->
          <!--                  销量:{{good.goodsSales}}-->
          <!--                </div>-->
          <!--              </div>-->
          <!--            </div>-->
          <!--          </div>-->
          <el-card :body-style="{ padding: '0px' }">
            <img style="width: 326px"
                 src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
                 class="image">
            <div style="padding: 14px;">
              <span>{{ good.goodsName }}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        <el-col :span="6" v-for="gyp in gongyepins">
          <div @click="selectGoodById(gyp.id)" >
            <el-card :body-style="{ padding: '0px' }">
              <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
              <div style="padding: 14px;">
                <span>{{gyp.goodsName}}</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                  <el-button  type="text" class="button">操作按钮</el-button>
                </div>
              </div>
            </el-card>
          </div>
        </el-col>
      </el-row>
      <!--      <el-row :gutter="20">-->
      <!--        <el-col :span="6"><div class="grid-content">-->

      <!--        </div></el-col>-->
      <!--        <el-col :span="6"><div class="grid-content">-->

      <!--        </div></el-col>-->
      <!--        <el-col :span="6"><div class="grid-content">-->
      <!--          <el-image style="width: 100%; height: 200px" :src="require('./../../img/gg1.png')" fit="contain"></el-image>-->
      <!--        </div></el-col>-->
      <!--        <el-col :span="6"><div class="grid-content">-->
      <!--          <el-image style="width: 100%; height: 200px" :src="require('./../../img/logo.png')" fit="contain"></el-image>-->
      <!--          <div><span>白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜</span></div>-->
      <!--          <div><span style="color: red">￥15</span></div>-->
      <!--        </div></el-col>-->
      <!--      </el-row>-->
    </div>
    <el-dialog
      title="商品详情"
      :visible.sync="dialogVisible"
      fullscreen="true"
      :before-close="handleClose">
      <div style="margin-top: 20px">
        <div style="float: left;margin-left: 200px;width: 500px;height: 500px">
          <img height="100%" width="100%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
        </div>
        <div style="width: 500px;height: 500px;margin-left: 750px">
          <h1 style="color: #333333">{{ soso.goodsName }}</h1>
          <a style="font-size: 15px">价格：</a>
          <a style="color: red;font-size: 25px">￥{{soso.goodsPrice}}</a>
          <div style="margin-top: 20px;padding-bottom: 20px;height: 200px">
            <label>商品描述：{{soso.goodsDescribe}}</label>
          </div>
          <a>销量：{{soso.goodsSales}}</a>
          <el-divider></el-divider>
          <div>
            <label>数量：<el-input-number v-model="num" @change="handleChange" :min="1" :max="10" label="描述文字"></el-input-number></label>
            <el-button type="danger">立即购买</el-button>
            <el-button type="warning">加入购物车</el-button>
          </div>
        </div>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import Test from "../../AppUserLogin";

export default {
  name: "Hot",
  components: {Test},
  data() {
    return {
      msg: "热门商品",
      goods: []
  data(){
    return{
      msg:"热门商品",
      dianqis:[],
      bangongs:[],
      meizhuangs:[],
      shipins:[],
      gongyepins:[],
      soso:[],
      dialogVisible: false,
      num: 1
    }
  },
  methods: {
    getGoods() {
      var _this = this;
      this.$axios.post("/Goods/shouye").then(function (items) {
        _this.goods = items.data;
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
        _this.gongyepins=goods.gongyepin;
      }).catch()
    },
    selectGoodById(id) {
      alert(id)
      var _this=this;
      var param= new URLSearchParams();
      param.append("id",id)
      this.$axios.post("/Goods/selectGoodById",param).then(function (item){
        _this.soso=item.data;
        _this.dialogVisible=true;
      }).catch()
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    handleChange(value) {
      console.log(value);
    }
  },
  created() {
    this.getGoods()
  }
}
</script>

<style scoped>

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
