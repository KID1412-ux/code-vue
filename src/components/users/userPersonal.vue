<template>
  <div>
        <el-row>
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="5" style="">
            <el-card class="box-card" style="width: 100%">
              <div>
                <el-avatar :size="80" :src="userImageUrl" style="margin-top: 50px"></el-avatar>
                <br>
                <h3>{{user.userNickname}}</h3>
                <el-button size="mini" round @click="openDialogForm">编辑个人资料</el-button><br><br>
                <el-link type="danger" @click="outUser">退出</el-link>
              </div>
            </el-card>
          </el-col>
          <el-col :span="10" style="">
            <el-card shadow="never" style="height: 200px;margin-top: 16%">
              <div style="margin-top: 5%;margin-left: -10%">
                <label>默认提货商户：</label>
                <el-select placeholder="请选择自提店" v-model="merchant" @change="changeAddress">
                  <el-option v-for="(item, index) in merchants" :key="item.id" :label="item.merchantName" :value="item.id"></el-option>
                </el-select>
                <el-popover
                  placement="bottom-end"
                  width="600"
                  trigger="click">
                  <el-table :data="merchants">
                    <el-table-column width="150" property="userNickname" label="商户姓名"></el-table-column>
                    <el-table-column width="150" property="merchantName" label="店铺名"></el-table-column>
                    <el-table-column width="150" property="deliveryAddress" label="店铺地址"></el-table-column>
                    <el-table-column width="150" property="merchantPhone" label="店铺电话"></el-table-column>
                  </el-table>
                  <el-button slot="reference">所有商户</el-button>
                </el-popover>
              </div>
              <div style="margin-top: 5%;margin-left: -10%">
                  <el-row>
                    <label>当前界面：</label>
                    <el-tag type="primary" >用户个人</el-tag>
                    <el-button type="success" plain v-if="user.type =='0'||user.type =='2'" @click="openMerchantFrom">申请成为商户</el-button>
                    <el-button type="success" plain v-if="user.type =='1'||user.type =='3'" @click="goMerchantPersonal">前往商户主页</el-button>
                    <el-button type="info" plain v-if="user.type =='0'||user.type =='1'" @click="openSupplierFrom">申请成为供应商</el-button>
                    <el-button type="info" plain v-if="user.type =='2'||user.type =='3'" @click="goSupplierPersonal">前往供应商主页</el-button>
                  </el-row>
              </div>
            </el-card>
          </el-col>
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="15" style="margin-left: 17%">
            <div class="grid-content"></div>
<!--    订单区域-->
            <div class="grid-content" style="background-color: #ffffff">
              <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="4" @click="selectUserOrder">

                  <el-table max-height="300px" v-loading="loading" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
                    <el-table-column label="订单编号" width="250">
                      <template slot-scope="scope">
                        <el-popover placement="right" width="400" trigger="click">
                          <el-table :data="tableData2">
                            <el-table-column align="center" label="订单详情">
                              <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                              <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                              <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                            </el-table-column>
                          </el-table>
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态" >
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待付款" name="3" @click="selectUserOrder">
                  <el-table max-height="200px" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
                    <el-table-column prop="orderNumber" label="订单编号" width="250">
                      <template slot-scope="scope">
                        <el-popover placement="right" width="400" trigger="click">
                          <el-table :data="tableData2">
                            <el-table-column align="center" label="订单详情">
                              <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                              <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                              <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                            </el-table-column>
                          </el-table>
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态" >
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待收货" name="1" @click="selectUserOrder">
                  <el-table max-height="200px" :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" >
                    <el-table-column prop="orderNumber" label="订单编号" width="250">
                      <template slot-scope="scope">
                        <el-popover placement="right" width="400" trigger="click">
                          <el-table :data="tableData2">
                            <el-table-column align="center" label="订单详情">
                              <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                              <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                              <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                            </el-table-column>
                          </el-table>
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态" >
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="已收货" name="2" @click="selectUserOrder">
                  <el-table max-height="200px" :data="tableData" border style="width: 100%;background-color: #eee" >
                    <el-table-column prop="orderNumber" label="订单编号" width="250">
                      <template slot-scope="scope">
                        <el-popover placement="right" width="400" trigger="click">
                          <el-table :data="tableData2">
                            <el-table-column align="center" label="订单详情">
                              <el-table-column width="100" property="id" label="详情编号"></el-table-column>
                              <el-table-column width="150" property="goodsName" label="商品名"></el-table-column>
                              <el-table-column width="150" property="orderPrice" label="价格"></el-table-column>
                            </el-table-column>
                          </el-table>
                          <el-link :underline="false" @click="selectUserOrderDetail(scope.row.id)" type="primary" slot="reference">{{ scope.row.orderNumber }}</el-link>
                        </el-popover>
                      </template>
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态">
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane  name="5" label="前往订单>">
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="4">
            <div class="grid-content">
              <div style="height: 100%"></div>
            </div>
          </el-col>
        </el-row>
<!--个人信息修改    -->
    <el-dialog title="个人信息" :visible.sync="dialogForm" width="600px" @close="resetUpdateForm('userForm')">
      <el-form :model=userForm ref="userForm">
        <el-form-item label="用户头像:" label-width="150px">
          <div>
            <div v-if="bool" style="float: left; margin-right: 5px">
              <img width="150px" height="150px" :src="userForm.userImage" alt="" >
            </div>
            <div style="float: left">
              <el-upload
                action="#"
                list-type="picture-card"
                ref="upload"
                accept="image/jpeg,image/gif,image/png,image/jpg"
                :on-change="updateImgChange"
                :on-remove="updateImgRemove"
                :auto-upload="false"
                :file-list="updateImgList"
                :limit="1"
                :on-exceed="imageExceed"
                style="width: 100%;">
                <i class="el-icon-plus"></i>
              </el-upload>
<!--              <div>-->
<!--                <el-dialog :visible.sync="updateImg">-->
<!--                  <img width="100%" :src="updateImageUrl" alt="">-->
<!--                </el-dialog>-->
<!--              </div>-->
            </div>
          </div>
        </el-form-item>
        <el-form-item label="用户账号：" label-width="160px">
          <el-input v-model="userForm.userName" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="用户昵称：" label-width="160px">
          <el-input v-model="userForm.userNickname" style="width: 250px"></el-input>
        </el-form-item>
        <el-form-item label="用户电话：" label-width="160px">
          <el-input v-model="userForm.phone" style="width: 250px"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogForm = false;">取 消</el-button>
        <el-button type="primary" @click="changeUser('userForm')">确 定</el-button>
      </div>
    </el-dialog>
<!--商户申请单    -->
    <el-dialog title="商户申请单" :visible.sync="merchantFromVisible" center @close="resetMerchantAddForm('merchantAddFrom')" >
      <el-form :model="merchantAddFrom" :rules="rules" ref="merchantAddFrom" >
        <el-form-item label="商户店铺名:" label-width="200px" prop="goodsName">
          <div class="form-input">
            <el-input v-model="merchantAddFrom.merchantName" autocomplete="off" style="width: 350px"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="商户店铺图片:" label-width="200px">
          <el-upload
            action="#"
            list-type="picture-card"
            ref="upload"
            accept="image/jpeg,image/gif,image/png,image/jpg"
            :on-change="imageChange1"
            :auto-upload="false"
            :file-list="imageList1"
            :limit="1"
            :on-exceed="imageExceed"
            style="width: 100%;">
            <i class="el-icon-plus" ></i>
          </el-upload>
<!--          <div>-->
<!--            <el-dialog :visible.sync="dialogVisibleImg">-->
<!--              <img width="100%" :src="dialogImageUrl" alt="">-->
<!--            </el-dialog>-->
<!--          </div>-->
        </el-form-item>
        <el-form-item label="商户营业执照图片:" label-width="200px">
        <el-upload
          action="#"
          list-type="picture-card"
          ref="upload"
          accept="image/jpeg,image/gif,image/png,image/jpg"
          :on-change="imageChange2"
          :auto-upload="false"
          :file-list="imageList2"
          :limit="1"
          :on-exceed="imageExceed"
          style="width: 100%;">
          <i class="el-icon-plus"></i>
        </el-upload>
<!--        <div>-->
<!--          <el-dialog :visible.sync="dialogVisibleImg">-->
<!--            <img width="100%" :src="dialogImageUrl" alt="">-->
<!--          </el-dialog>-->
<!--        </div>-->
      </el-form-item>
        <el-form-item label="店铺电话:" label-width="200px" prop="goodsPrice">
          <div class="form-input">
            <el-input autocomplete="off" v-model="merchantAddFrom.merchantPhone" style="width: 350px"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="店铺地址:" label-width="200px" prop="goodsUnit">
          <div class="form-input">
            <el-input autocomplete="off" v-model="merchantAddFrom.deliveryAddress" style="width: 350px"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="店铺介绍:" label-width="200px" prop="goodsDescribe">
          <div class="form-input">
            <el-input type="textarea" v-model="merchantAddFrom.merchantDescribe" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" style="width: 350px">
            </el-input>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="merchantFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="merchantFormSubmit('merchantAddFrom')">确 定</el-button>
      </div>
    </el-dialog>


<!--供应商申请单    -->
    <el-dialog title="供应商申请单" :visible.sync="supplierFromVisible" center @close="resetSupplierAddForm('supplierAddFrom')" >
      <el-form :model="supplierAddFrom" :rules="rules" ref="supplierAddFrom" >
        <el-form-item label="供应商店铺名:" label-width="200px" prop="goodsName">
          <div class="form-input">
            <el-input v-model="supplierAddFrom.supplierName" autocomplete="off" style="width: 350px"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="供应商店铺图片:" label-width="200px">
          <el-upload
            action="#"
            list-type="picture-card"
            ref="upload"
            accept="image/jpeg,image/gif,image/png,image/jpg"
            :on-change="imageChange3"
            :auto-upload="false"
            :file-list="imageList3"
            :limit="1"
            :on-exceed="imageExceed"
            style="width: 100%;">
            <i class="el-icon-plus" ></i>
          </el-upload>
          <!--          <div>-->
          <!--            <el-dialog :visible.sync="dialogVisibleImg">-->
          <!--              <img width="100%" :src="dialogImageUrl" alt="">-->
          <!--            </el-dialog>-->
          <!--          </div>-->
        </el-form-item>
        <el-form-item label="供应商营业执照图片:" label-width="200px">
          <el-upload
            action="#"
            list-type="picture-card"
            ref="upload"
            accept="image/jpeg,image/gif,image/png,image/jpg"
            :on-change="imageChange4"
            :auto-upload="false"
            :file-list="imageList4"
            :limit="1"
            :on-exceed="imageExceed"
            style="width: 100%;">
            <i class="el-icon-plus"></i>
          </el-upload>
          <!--        <div>-->
          <!--          <el-dialog :visible.sync="dialogVisibleImg">-->
          <!--            <img width="100%" :src="dialogImageUrl" alt="">-->
          <!--          </el-dialog>-->
          <!--        </div>-->
        </el-form-item>
        <el-form-item label="供应商电话:" label-width="200px" prop="goodsPrice">
          <div class="form-input">
            <el-input autocomplete="off" v-model="merchantAddFrom.merchantPhone" style="width: 350px"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="供应商地址:" label-width="200px" prop="goodsUnit">
          <div class="form-input">
            <el-input autocomplete="off" v-model="merchantAddFrom.deliveryAddress" style="width: 350px"></el-input>
          </div>
        </el-form-item>
        <el-form-item label="供应商介绍:" label-width="200px" prop="goodsDescribe">
          <div class="form-input">
            <el-input type="textarea" v-model="merchantAddFrom.merchantDescribe" :autosize="{ minRows: 2, maxRows: 4}" placeholder="请输入内容" style="width: 350px">
            </el-input>
          </div>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="supplierFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="supplierFormSubmit('supplierAddFrom')">确 定</el-button>
      </div>
    </el-dialog>
  </div>

</template>

<script>
export default {
  name: "userOrder",
  data() {
    return {
      activeName:"3",
      userId:"",
      user:{},
      userForm:{
        id:'',userImageUrl:'',userName:'',userNickname:'',phone:''
      },
      loading:true,
      orderNum:"",
      userMsg:"",
      password:"",
      sex:"0",
      phone:"",
      birthday:"",
      tableData: [],
      tableData2: [],
      merchants:[],
      merchant:"",
      userImageUrl: "",
      bool:true,
      dialogForm:false,
      updateImgList:[],
      // updateImg:false,
      updateImageUrl:'',
      merchantFromVisible:false,
      rules: {
        merchantName: [{required: true, message: '请输入商户店铺名', trigger: 'blur'}],
        merchantPhone: [{required: true, message: '请输入商户店铺电话', trigger: 'blur'}],
        deliveryAddress: [{required: true, message: '请输入商户店铺地址', trigger: 'blur'}],
        merchantDescribe: [{required: true, message: '请输入商户店铺介绍', trigger: 'blur'}]
      },
      merchantAddFrom: {
        id:'',merchantName: '', merchantPhone: '', fileObj1: '',
        fileObj2: '',deliveryAddress: '', merchantDescribe: ''
      },
      imageList1: [],
      imageList2: [],
      // dialogVisibleImg: false,

      supplierFromVisible:false,
      supplierAddFrom: {
        id:'',supplierName: '', supplierPhone: '', fileObj3: '',
        fileObj4: '',supplierAddress: ''
      },
      imageList3: [],
      imageList4: [],
    }
  },
  methods: {
    //查询用户
    selectUser(){
      var _this=this;
      this.userId=sessionStorage.getItem("userId")
      var params = new URLSearchParams();
      params.append("id",this.userId);
      this.$axios.post("shopCart/queryUser", params).then(function (result) {
        _this.user=result.data;
        _this.merchant=_this.user.merchantId;
        if(_this.user.userImage==null||_this.user.userImage==''){
          _this.userImageUrl="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png";
        }else {
          _this.userImageUrl=_this.user.userImage;
        }
      }).catch();
    },
    handleClick(tab) {
      if (tab.name === "5"){this.$router.push('/UserOrder');}
      else {this.selectUserOrder();}

    },
    //查询订单
    selectUserOrder(){
      var _this=this;
      var params =new URLSearchParams();
      params.append("userId",this.userId);
      params.append("orderNumber",this.orderNum);
      var orderStats=this.activeName;
      params.append("orderStats",orderStats);
      console.log(orderStats)
      this.$axios.post("userOrder/selectUserOrderByDto",params).then(function(result) {
        _this.loading=false;
        _this.tableData = result.data;
        // console.log(_this.tableData)
        _this.tableData.forEach(item => {if(item.orderStats==="0"){item.orderStats="待付款"}else if (item.orderStats==="1"){item.orderStats="待收货"}else if (item.orderStats==="2"){item.orderStats="已收货"}})
        // var table = [];
        // _this.tableData.forEach((item=> {
        //   table.push(Object.assign({},item,{hasChildren:true}))
        // }))
        // _this.tableData = table;
      }).catch();
    },
    //查看订单详情
    selectUserOrderDetail(id) {
      // console.log(id)
      var _this=this;
      this.tableData2=[];
      var params =new URLSearchParams();
      params.append("orderId",id);
      this.$axios.post("userOrder/selectUserOrderDetail",params).then(function(result) {
        _this.tableData2 = result.data;
        _this.tableData2.forEach(item => {item.orderPrice=item.goodsPrice+' x '+item.goodsAmount;

        })
      }).catch();
    },
    //查询提货商户
    selectMerchants() {
      var _this = this;
      function queryMerchant() {
        return _this.$axios.post("shopCart/queryMerchant");
      }
      function queryUser() {
        var params = new URLSearchParams();
        params.append("id", _this.userId);
        return _this.$axios.post("shopCart/queryUser", params);
      }
      this.$axios.all([queryMerchant(), queryUser()]).then(this.$axios.spread(function (res1, res2) {
        _this.merchants = res1.data;
        console.log(_this.merchants)
        if (res2.data.merchantId != "" && res2.data.merchantId != null) {
          _this.merchant = res2.data.merchantId;
        }
      })).catch();
    },
    //更改默认提货商户
    changeAddress(){
      var _this = this;
      // console.log(this.merchant)
      var params = new URLSearchParams();
      params.append("id", this.userId);
      params.append("merchantId", this.merchant);
      this.$axios.post("shopCart/updateUser", params).then().catch()
    },
    //打开修改个人信息模态框
    openDialogForm(){
      this.userForm.id = this.user.id;
      this.userForm.userImageUrl = this.user.userImage;
      this.userForm.userName = this.user.userName;
      this.userForm.userNickname = this.user.userNickname;
      this.userForm.phone = this.user.phone;
      console.log(this.userForm)
      this.dialogForm=true
    },
    resetUpdateForm(formName){
      this.dialogForm = false;
      this.$refs[formName].resetFields();
      this.updateImgList = [];
      this.bool = true;
    },
    updateImgChange(file) {
      this.bool = false;
      this.userForm.userImageUrl = file.raw;
      console.log(this.userForm.userImageUrl)
    },
    updateImgRemove() {
      setTimeout(() => {
        this.bool = true;
      }, 1000);
    },
    //提交个人信息的修改
    changeUser(formName){
      this.$refs[formName].validate((valid) => {
        if (valid) {
          var _this = this;
          this.userForm.id=this.userId;
          var formData = new FormData();
          Object.keys(this.userForm).forEach((key) => {
            formData.append(key, _this.userForm[key]);
          })
          console.log(this.userForm)
          this.$axios({
            method: 'post',
              url: 'user/updateUser',
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (result) {
            // console.log(result);
            _this.resetUpdateForm(formName);
            _this.$message({
              showClose: true,
              message: '信息已更改',
              type: 'success'
            });
            _this.selectUser();
          }).catch();
        } else {
          return false;
        }
      });
    },


    //打开商户申请模态框
    openMerchantFrom(){
        this.selectUser();
        console.log(this.user)
        if (this.user.merchantAuditStatus=='0'){
          this.$message({
            showClose: true,
            message: '您的申请已提交，请勿重复申请',
            type: 'warning',
          });
          return
        }
        this.merchantFromVisible=true
    },
    resetMerchantAddForm(formName) {
        this.merchantFromVisible = false;
        this.$refs[formName].resetFields();
        this.imageList1 = [];
        this.imageList2 = [];
      },
      imageChange1(file) {
        this.merchantAddFrom.fileObj1 = file.raw;
        console.log(this.merchantAddFrom.fileObj1);
      },
      imageChange2(file) {
        this.merchantAddFrom.fileObj2 = file.raw;
        console.log(this.merchantAddFrom.fileObj2);
      },
      imageExceed(file, fileList) {
        this.$message({
          showClose: true,
          message: '图片只需上传一张',
          type: 'warning',
        });
      },
    merchantFormSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.merchantAddFrom.fileObj1||!this.merchantAddFrom.fileObj2) {
            this.$message({
              showClose: true,
              message: '请选择图片 ',
              type: 'warning'
            });
            return false;
          }
          var _this = this;
          this.merchantAddFrom.id=this.userId;
          var formData = new FormData();
          Object.keys(this.merchantAddFrom).forEach((key) => {
            formData.append(key, _this.merchantAddFrom[key]);
          })
          this.$axios({
            method: 'post',
            url: 'user/merchantApply',
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (result) {
            _this.resetMerchantAddForm(formName);
            _this.$message({
              showClose: true,
              message: '申请已提交',
              type: 'success'
            });
            _this.selectUser();
          }).catch();
        } else {
          return false;
        }
      });
    },



    //打开供应商申请模态框
    openSupplierFrom(){
      this.selectUser();
      console.log(this.user)
      if (this.user.supplierAuditStatus=='0'){
        this.$message({
          showClose: true,
          message: '您的申请已提交，请勿重复申请',
          type: 'warning',
        });
        return
      }
      this.supplierFromVisible=true
    },
    resetSupplierAddForm(formName) {
      this.supplierFromVisible = false;
      this.$refs[formName].resetFields();
      this.imageList3 = [];
      this.imageList4 = [];
    },
    imageChange3(file) {
      this.supplierAddFrom.fileObj3 = file.raw;
      console.log(this.supplierAddFrom.fileObj3);
    },
    imageChange4(file) {
      this.supplierAddFrom.fileObj4 = file.raw;
      console.log(this.supplierAddFrom.fileObj4);
    },
    supplierImageExceed(file, fileList) {
      this.$message({
        showClose: true,
        message: '图片只需上传一张',
        type: 'warning'
      });
    },
    supplierFormSubmit(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          if (!this.supplierAddFrom.fileObj3||!this.supplierAddFrom.fileObj4) {
            this.$message({
              showClose: true,
              message: '请选择图片 ',
              type: 'warning'
            });
            return false;
          }
          var _this = this;
          this.supplierAddFrom.id=this.userId;
          var formData = new FormData();
          Object.keys(this.supplierAddFrom).forEach((key) => {
            formData.append(key, _this.supplierAddFrom[key]);
          })
          this.$axios({
            method: 'post',
            url: 'user/supplierApply',
            data: formData,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }).then(function (result) {
            _this.resetSupplierAddForm(formName);
            _this.$message({
              showClose: true,
              message: '申请已提交',
              type: 'success'
            });
            _this.selectUser();
          }).catch();
        } else {
          return false;
        }
      });
    },

    //前往商户主页
    goMerchantPersonal(){
      this.selectUser();
      if (this.user.merchantStats=='1'){
        alert("您的商户资格已被商城加入黑名单，无法前往商户主页");
        return
      }
      this.$router.push('/Merchant')
    },
    //前往供应商主页
    goSupplierPersonal(){
      this.selectUser();
      if (this.user.supplierStats=='1'){
        alert("您的供应商资格已被商城加入黑名单，无法前往供应商主页");
        return
      }
      this.$router.push('/Merchant')
    },
    //用户退出
    outUser(){
      sessionStorage.clear();
      this.$router.push('/')
    }
  },
  created() {
    this.userId=sessionStorage.getItem("userId");
    this.selectUser();
    this.selectUserOrder();
    this.selectMerchants();
  }
}
</script>

<style>
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.input {
  width: 350px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}


a {
  color: #42b983;
}

.grid-content {
  margin-top: 30px;
}

.footer {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both
}

.box-card {
  width: 300px;
  height: 300px;
}
</style>
