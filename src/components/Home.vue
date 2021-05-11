<template>
  <div>
    <div id="div-cx" style="margin-top: 15px; width: 700px">
      <el-input placeholder="请输入内容" v-model="input3" class="input-with-select">
        <el-button slot="append" icon="el-icon-search"></el-button>
      </el-input>
    </div>
    <div style="padding-left: 150px;padding-right: 150px">
      <slot>
        <!--Carousel 走马灯-卡片话-->
        <el-carousel :interval="4000" type="card" height="300px">
          <el-carousel-item v-for="item in advertisements" :key="item.index">
            <el-image :src="item.picture" fit="fill"></el-image>
          </el-carousel-item>
        </el-carousel>
      </slot>
    </div>
    <div style="padding-left: 150px;padding-right: 150px;padding-top: 20px">
      <span style="font-size: 30px;font-weight:900;padding-left: 525px">为您推荐</span>
    </div>
    <Hot></Hot>
  </div>
</template>

<script>
import Hot from "./Home/Hot";
export default {
  name: "Home",
  components: {Hot},
  data(){
    return{
      advertisements:[
        {index:0,picture:require('./../img/gg1.png')},
        {index:1,picture:require('./../img/gg2.png')},
        {index:2,picture:require('./../img/gg3.png')},
        {index:3,picture:require('./../img/gg4.png')},
        {index:4,picture:require('./../img/gg5.png')},
      ]
    }
  },
  methods:{

  }
}
</script>

<style scoped>
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
