<template>
  <div class="divcss5">
    <div style="padding-left: 150px;padding-right: 150px">
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content">

        </div></el-col>
        <el-col :span="6"><div class="grid-content">

        </div></el-col>
        <el-col :span="6"><div class="grid-content">

        </div></el-col>
        <el-col :span="6"><div class="grid-content">

        </div></el-col>
      </el-row>
      <el-row :gutter="20">
        <el-col :span="6"><div class="grid-content">

        </div></el-col>
        <el-col :span="6"><div class="grid-content">

        </div></el-col>
        <el-col :span="6"><div class="grid-content">
          <el-image style="width: 100%; height: 200px" :src="require('./../../img/gg1.png')" fit="contain"></el-image>
        </div></el-col>
        <el-col :span="6"><div class="grid-content">
          <el-image style="width: 100%; height: 200px" :src="require('./../../img/logo.png')" fit="contain"></el-image>
          <div><span>白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜白菜</span></div>
          <div><span style="color: red">￥15</span></div>
        </div></el-col>
      </el-row>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hot",
  data(){
    return{
      msg:"热门商品"
    }
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
</style>
