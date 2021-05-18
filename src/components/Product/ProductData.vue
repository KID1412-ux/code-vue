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
    <div style="margin-top: 150px">
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

      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="5" >
        <el-card class="box-card" style="width: 100%">
          <div style="text-align: center;margin-top: 40px">
            <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            <br>
            <h3>{{merchant.merchantName}}</h3>
            <el-button size="mini" round @click="openDialogForm">编辑资料</el-button><br><br>

          </div>
        </el-card>
      </el-col>
      <el-col :span="9" >
        <el-card class="box-card" style="width: 100%">
          <div style="text-align: left;margin-top: 10px">
            <label>商户电话：{{merchant.merchantPhone}}</label><br><br>
            <label>商户地址：{{merchant.deliveryAddress}}</label><br><br>
            <label>商户描述：{{merchant.merchantDescribe}}</label><br><br>
            <div>
              <label style="">营业执照：</label>
              <el-tooltip class="item" effect="dark" content="点击可放大查看" placement="top-start">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :preview-src-list="srcList">
                </el-image>
              </el-tooltip>
            </div>
          </div>
        </el-card>
      </el-col>
<!--      <el-col :span="10" style="">-->
<!--        <el-card shadow="never" style="height: 200px;margin-top: 18%">-->
<!--          <div style="margin-top: 5%;margin-left: -10%">-->
<!--            <label>默认提货商户：</label>-->
<!--            <el-select placeholder="请选择自提店" v-model="merchant" @change="changeAddress">-->
<!--              <el-option v-for="(item, index) in merchants" :key="item.id" :label="item.merchantName" :value="item.id"></el-option>-->
<!--            </el-select>-->
<!--            <el-popover-->
<!--              placement="bottom-end"-->
<!--              width="600"-->
<!--              trigger="click">-->
<!--              <el-table :data="merchants">-->
<!--                <el-table-column width="150" property="userNickname" label="商户姓名"></el-table-column>-->
<!--                <el-table-column width="150" property="merchantName" label="店铺名"></el-table-column>-->
<!--                <el-table-column width="150" property="deliveryAddress" label="店铺地址"></el-table-column>-->
<!--                <el-table-column width="150" property="merchantPhone" label="店铺电话"></el-table-column>-->
<!--              </el-table>-->
<!--              <el-button slot="reference">所有商户</el-button>-->
<!--            </el-popover>-->
<!--          </div>-->
<!--          <div style="margin-top: 5%;margin-left: -10%">-->
<!--            <el-row>-->
<!--              <label>当前界面：</label>-->
<!--              <el-tag type="primary" >用户个人</el-tag>-->
<!--              <el-button type="success" plain v-if="user.type =='0'||user.type =='2'" @click="openMerchantFrom">申请成为商户</el-button>-->
<!--              <el-button type="success" plain v-if="user.type =='1'||user.type =='3'" @click="goMerchantPersonal">前往商户主页</el-button>-->
<!--              <el-button type="info" plain v-if="user.type =='2'||user.type =='3'">前往供应商主页</el-button>-->
<!--              <el-button type="info" plain v-if="user.type =='0'||user.type =='1'">申请成为供应商</el-button>-->
<!--            </el-row>-->
<!--          </div>-->
<!--        </el-card>-->
<!--      </el-col>-->

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
      merchant: {},
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
        _this.merchant=item.data;
      }).catch()
    },
    goMerchantPersonal(){

    }
  },
  created() {
    this.getUser();
  }
}
</script>

<style scoped>

#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.grid-content {
  margin-top: 30px;
}

.box-card {
  width: 300px;
  height: 300px;
}

</style>
