<template>
  <div class="divcss5">
    <div style="padding-left: 150px;padding-right: 150px">
      <el-row id="elrow">
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
            <div><h3>白菜</h3></div>
            <div>价格：<span style="color: red">￥15</span>/500g</div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
      </el-row>
      <el-row style="padding-top: 7px">
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
            <div></div>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
        <el-col :span="4">
          <div class="grid-content">
            <el-image style="width: 100%; height: 200px" :src="require('../img/logo.png')" fit="contain"></el-image>
          </div>
        </el-col>
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


.grid-content {
  border-radius: 4px;
  min-height: 300px;
  border: 1px solid gray;
}

.divcss5{
  width:100%;
  height: 100%;
  padding-top: 20px;
}

.el-col{
  padding-right: 7px
}
.grid-content div{
  text-align:center;
  margin:0px auto;
}
.grid-content:hover {
  border: 1px solid red;
}
</style>
