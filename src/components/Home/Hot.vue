<template>
  <div class="divcss5">
    <div style="padding-left: 150px;padding-right: 150px">
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
          <el-card :body-style="{ padding: '0px' }" >
            <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>{{good.goodsName}}</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
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
      goods:[]
    }
  },
  methods:{
    getGoods(){
      var _this=this;
      this.$axios.post("/Goods/shouye").then(function (items){
        _this.goods=items.data;
      }).catch()
    },
    selectGoodById(id){
      alert(id)
    }
  },
  created() {
    this.getGoods()
  }
}
</script>

<style scoped>

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
  padding-top: 12px
}

.grid-content:hover {
  border: 1px solid red;
}

.el-card:hover{
  border: 1px solid red;
}

</style>
