<template>
  <div class="divcss5">
    <div style="padding-left: 150px;padding-right: 150px">

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
      </el-tabs>

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
      </el-tabs>

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
      </el-tabs>

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
      </el-tabs>


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
  data(){
    return{
      msg:"热门商品",
      goods:[],
      dianqis:[],
      bangongs:[],
      meizhuangs:[],
      shipins:[],
      soso:[],
      dialogVisible: false,
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
        _this.goods=items.data;
        _this.dianqis=_this.goods.dianqi;
        _this.bangongs=_this.goods.bangong;
        _this.meizhuangs=_this.goods.meizhuanag;
        _this.shipins=_this.goods.shipin;
      }).catch()
    },
    selectGoodById(id){
      var _this=this;
      var param= new URLSearchParams();
      param.append("id",id)
      this.$axios.post("/Goods/selectGoodById",param).then(function (item){
        _this.soso=item.data;
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
    }
  },
  created() {
    this.getGoods()
  }
}
</script>

<style scoped>

.span{
  max-width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /*超出部分用...代替*/
}

.el-tabs{
  margin-top: 20px;
}

.divcss5{
  width:100%;
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

.el-col{
  padding-top: 12px;
}

.grid-content:hover {
  border: 1px solid red;
}

.el-card:hover{
  border: 1px solid red;
}

</style>
