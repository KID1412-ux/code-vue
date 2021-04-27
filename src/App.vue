<template>
  <div id="app">
    <el-container class="height">
      <el-header id="header">
        <el-row>
          <el-col :span="12">
            <img style="height: 55px" src="./img/logo.png">
          </el-col>
          <el-col :span="12" id="div1">
            <a href="#">你好,请登录</a>
            <a href="#">注册</a>
            <a href="#"><i class="el-icon-shopping-bag-2"></i>我的订单</a>
            <a href="#"><i class="el-icon-shopping-cart-2"></i>购物车</a>
            <a href="/Classification"><i class="el-icon-guide"></i>商品分类</a>
          </el-col>
        </el-row>
        <hr/>
      </el-header>
      <el-main>
        <div id="div-cx" style="margin-top: 15px; width: 700px">
          <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </div>
        <div>
          <slot>
            <!--Carousel 走马灯-卡片话-->
            <el-carousel :interval="4000" type="card" height="300px">
              <el-carousel-item v-for="item in 5" :key="item">
                <h3 class="medium">{{ item }}</h3>
              </el-carousel-item>
            </el-carousel>
          </slot>
        </div>
        <div style="padding-left: 150px;padding-right: 150px;padding-top: 20px">
          <span style="font-size: 30px;color: red;padding-left: 525px">今日特价<i class="el-icon-magic-stick" style="color: red"></i></span>
        </div>
        <Hot></Hot>
        <div style="height: 600px">

        </div>
      </el-main>
    </el-container>
  </div>
</template>

import Classification from './Classification.vue'

<script>
import Hot from "./router/Hot";
export default {
  name: 'app',
  components: {Hot},
}
</script>

<style>

html,body,#app{
  margin: 0px;
  height: 100%;
}
.height{
  height: 100%;
}
#header{

}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}

.bg-purple {
  background: #d3dce6;
}

.bg-purple-light {
  background: #e5e9f2;
}

el-header span,a{
  padding-right: 20px;
  color: #99a9bf;
  font-size: 20px;
  text-decoration: none;
}

#div1{
  text-align:center;
  margin:20px auto;
}

#div1 a:hover {  color : red ; }

#div-cx{
  text-align:center;
  margin:20px auto;
}


</style>
