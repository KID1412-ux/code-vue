<!--商户资料-->
<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商户</el-breadcrumb-item>
        <el-breadcrumb-item>商户资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
<!--    <div id="proDiv">-->
<!--      <el-avatar style="margin-top: 40px" :size="90" :src="require('./../../img/gg1.png')"></el-avatar><br>-->
<!--      -->
<!--    </div>-->
    <div>
<!--      <div>-->
<!--        <el-avatar style="margin-top: 50px" :size="60" src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar><br>-->
<!--        <a>{{user.merchantName}}</a>-->
<!--        <div class="demo-image__preview">-->
<!--          <el-image-->
<!--            style="width: 100px; height: 100px"-->
<!--            :src="url"-->
<!--            :preview-src-list="srcList">-->
<!--          </el-image>-->
<!--          <el-image-->
<!--            style="width: 100px; height: 100px"-->
<!--            :src="url"-->
<!--            :preview-src-list="srcList">-->
<!--          </el-image>-->
<!--        </div>-->
<!--      </div>-->
      <el-row>
        <el-col :span="8">
          <el-card :body-style="{ padding: '0px' }">
            <img src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
            <div style="padding: 14px;">
              <span>好吃的汉堡</span>
              <div class="bottom clearfix">
                <time class="time">{{ currentDate }}</time>
                <el-button type="text" class="button">操作按钮</el-button>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>


<!--    <el-dialog title="个人信息" :visible.sync="dialogForm" width="600px">-->
<!--      <el-form :model="user">-->
<!--        <el-form-item label="用户头像:" label-width="150px">-->
<!--          <div @click="changeImage">-->
<!--            <el-avatar :size="60" :src="circleUrl"></el-avatar>-->
<!--          </div>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="用户账号：" label-width="150px">-->
<!--          <el-input v-model="user.userName" style="width: 250px"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="用户昵称：" label-width="150px">-->
<!--          <el-input v-model="user.merchantName" style="width: 250px"></el-input>-->
<!--        </el-form-item>-->
<!--        <el-form-item label="用户：" label-width="150px">-->
<!--          <el-select v-model="user.region" placeholder="请选择活动区域" style="width: 250px">-->
<!--            <el-option label="区域一" value="shanghai"></el-option>-->
<!--            <el-option label="区域二" value="beijing"></el-option>-->
<!--          </el-select>-->
<!--        </el-form-item>-->
<!--      </el-form>-->
<!--      <div slot="footer" class="dialog-footer">-->
<!--        <el-button @click="dialogFormVisible = false">取 消</el-button>-->
<!--        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>-->
<!--      </div>-->
<!--    </el-dialog>-->
  </div>
</template>

<script>
export default {
  name: "ProductData",
  data(){
    return{
      user: {},
      dialogForm:false,
      url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
      srcList: [
        'https://fuss10.elemecdn.com/8/27/f01c15bb73e1ef3793e64e6b7bbccjpeg.jpeg',
        'https://fuss10.elemecdn.com/1/8e/aeffeb4de74e2fde4bd74fc7b4486jpeg.jpeg'
      ],
    }
  },
  methods:{
    getUser(){
      var userID=sessionStorage.getItem("userId");
      var params=new URLSearchParams();
      params.append("userID","1")
      var _this=this;
      this.$axios.post("/user/selectUserByID",params).then(function (item){
        _this.user=item.data;
      }).catch()
    }
  },
  created() {
    this.getUser();
  }
}
</script>

<style scoped>

.time {
  font-size: 13px;
  color: #999;
}

.bottom {
  margin-top: 13px;
  line-height: 12px;
}

.button {
  padding: 0;
  float: right;
}

.image {
  width: 100%;
  display: block;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

</style>
