<!--商户资料-->
<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商户</el-breadcrumb-item>
        <el-breadcrumb-item>商户资料</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div style="margin-top: 150px">
      <el-col :span="4">
        <div class="grid-content"></div>
      </el-col>
      <el-col :span="5">
        <el-card style="height: 300px;">
          <div style="padding: 14px;text-align: center;margin-top: 10px">
            <el-image style="width: 100px; height: 100px" :src="merchant.merchantShopImage" ></el-image>
            <h3>{{merchant.merchantName}}</h3>
            <div class="bottom clearfix">
              <el-button size="mini" round @click="openDialogForm">编辑资料</el-button><br><br>
            </div>
            <div><el-button type="success" plain @click="BackHome">返回首页</el-button></div>
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
                  :src="merchant.merchantPermitImage"
                  :preview-src-list="merchant.merchantPermitImage">
                </el-image>
              </el-tooltip>
            </div>
          </div>
        </el-card>
      </el-col>
    </div>

<!-- 修改商户资料 -->
    <el-dialog title="商户资料" center :visible.sync="dialogFormVisible">
      <el-form :model="merchantForm" ref="merchantForm">
        <el-form-item label="商户店铺图片：" label-width="150px">
          <div>
           <div v-if="bool1" style="float: left; margin-right: 5px">
             <img width="150px" height="150px" :src="merchantForm.ShopImage" alt="" >
           </div>
           <div style="float: left">
             <el-upload
              action="#"
              list-type="picture-card"
              ref="upload"
              accept="image/jpeg,image/gif,image/png,image/jpg"
              :on-change="updateImg1"
              :on-remove="updateImgRemove1"
              :auto-upload="false"
              :file-list="updateImgList1"
              :limit="1"
              :on-exceed="imageExceed"
              style="width: 100%;">
               <i class="el-icon-plus"></i>
             </el-upload>
           </div>
          </div>
        </el-form-item>
        <el-form-item label="商户名：" label-width="160px">
          <el-input v-model="merchantForm.merchantName" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="联系电话：" label-width="160px">
          <el-input v-model="merchantForm.merchantPhone" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="提货地点：" label-width="160px">
          <el-input v-model="merchantForm.deliveryAddress" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="商户描述：" label-width="160px">
          <el-input v-model="merchantForm.merchantDescribe" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="营业执照：" label-width="150px">
          <div>
            <div v-if="bool2" style="float: left; margin-right: 5px">
              <img width="150px" height="150px" :src="merchantForm.PermitImage" alt="" >
            </div>
            <div style="float: left">
              <el-upload
                action="#"
                list-type="picture-card"
                ref="upload"
                accept="image/jpeg,image/gif,image/png,image/jpg"
                :on-change="updateImg2"
                :on-remove="updateImgRemove2"
                :auto-upload="false"
                :file-list="updateImgList2"
                :limit="1"
                :on-exceed="imageExceed"
                style="width: 100%;">
                <i class="el-icon-plus"></i>
              </el-upload>
            </div>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="MerchantUpdate(merchantForm.merchantId)">确 定</el-button>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "ProductData",
  data(){
    return{
      merchant: {},
      dialogFormVisible: false,
      updateImgList1:[],
      updateImgList2:[],
      bool1:true,
      bool2:true,
      merchantForm:{
        id:'',merchantName:'',merchantDescribe:'',PermitImage:'',ShopImage:'',merchantPhone:'',deliveryAddress:''
      },
    }
  },
  methods:{
    getMerchant(){
      var userID=sessionStorage.getItem("userId");
      var params=new URLSearchParams();
      params.append("userID","1")
      var _this=this;
      this.$axios.post("/user/selectUserByID",params).then(function (item){
        _this.merchant=item.data;
        _this.merchant.merchantShopImage="http://127.0.0.1:8090/code/" + item.data.merchantShopImage;
        _this.merchant.merchantPermitImage="http://127.0.0.1:8090/code/" + item.data.merchantPermitImage;
      }).catch()
    },
    openDialogForm(){
      this.merchantForm.id=this.merchant.id;
      this.merchantForm.merchantName = this.merchant.merchantName;
      this.merchantForm.merchantPhone=this.merchant.merchantPhone;
      this.merchantForm.merchantDescribe = this.merchant.merchantDescribe;
      this.merchantForm.PermitImage = this.merchant.merchantPermitImage;
      this.merchantForm.ShopImage = this.merchant.merchantShopImage;
      this.merchantForm.deliveryAddress = this.merchant.deliveryAddress;
      console.log(this.merchant)
      this.dialogFormVisible=true;
    },
    // getFile1(e){
    //   console.log(e.target.files[0])
    //   this.merchantForm.merchantShopImage= e.target.files[0];  //获取选中的文件二进制流
    // },
    // getFile2(e){
    //   console.log(e.target.files[0])
    //   this.merchantForm.merchantPermitImage= e.target.files[0];  //获取选中的文件二进制流
    // },
    MerchantUpdate(id){
      var _this =this;
      //h5提供的类型  FormData
      var formData = new FormData();
      Object.keys(this.merchantForm).forEach( (key) =>{
        formData.append(key,_this.merchantForm[key]);
      })
      this.$axios({
        method: 'post',
        url: '/user/UpdateMerchant',
        data:formData,
        headers: {
          'Content-Type':'multipart/form-data'
        }
      }).then(function (response) {
        _this.getMerchant();
        _this.dialogFormVisible=false;

      }).catch();
    },
    updateImg1(file) {
      this.bool1 = false;
      this.merchantForm.ShopImage = file.raw;
      console.log(this.merchantForm.ShopImage);
    },
    updateImgRemove1() {
      setTimeout(() => {
        this.bool1 = true;
      }, 1000);
    },
    updateImg2(file) {
      this.bool2 = false;
      this.merchantForm.PermitImage = file.raw;
      console.log(this.merchantForm.PermitImage);
    },
    updateImgRemove2() {
      setTimeout(() => {
        this.bool2 = true;
      }, 1000);
    },
    imageExceed(file, fileList) {
      this.$message({
        showClose: true,
        message: '图片只需上传一张',
        type: 'warning',
      });
    },
    BackHome(){
      this.$router.push("/")
    }
  },
  created() {
    this.getMerchant();
    console.log(this.merchant)
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
