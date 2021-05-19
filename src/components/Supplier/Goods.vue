<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="4">
    <el-input
      placeholder="请输入商品名称"
      v-model="gname"
      clearable>
    </el-input>
      </el-col>
      <el-col :span="3" >
        <el-input
          placeholder="商品最高价"
          v-model="gmax"
          clearable>
        </el-input>
      </el-col>
      <el-col :span="1">
        <el-button icon="el-icon-search" circle @click="searchgoods"></el-button>
      </el-col>
      <el-col :span="12" >
        <el-button type="info" icon="el-icon-plus" circle @click="addwinshow=true"></el-button>
      </el-col>
    </el-row>
    <br>
    <el-table
      :data="tableData"
      height="400"
      border>
      <el-table-column
        prop="id"
        label="商品编号"
        width="90">
      </el-table-column>
      <el-table-column
        prop="goodsName"
        label="商品名称"
        width="180">
      </el-table-column>
      <el-table-column
        label="商品图片">
        <template slot-scope="scope">
          <img style="width: 80px;height: 60px" :src="scope.row.imageUrl">
        </template>
      </el-table-column>
      <el-table-column
        prop="goodsDescribe"
        label="商品详情"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodsSales"
        label="商品销量"
        width="180">
      </el-table-column>
      <el-table-column
        prop="goodsPrice"
        label="商品价格"
        width="90">
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="primary" icon="el-icon-edit" circle @click="openeditwin(scope.row.id)"></el-button>
          <el-button type="danger" icon="el-icon-delete" circle @click="opendeletewin(scope.row.id)"></el-button>
        </template>
      </el-table-column>
    </el-table>

    <el-pagination
      @size-change="sizechange"
      @current-change="currentchange"
      :current-page="pageno"
      :page-sizes="[10, 20, 30, 40]"
      :page-size="pagsize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total">
    </el-pagination>

    <el-dialog :visible.sync="addwinshow">

      <el-form :model="addform">
        <el-form-item label="商品名称">
          <el-input v-model="addform.goodsName"></el-input>
        </el-form-item>

        <el-form-item label="商品简介">
          <el-input v-model="addform.goodsDescribe"></el-input>
        </el-form-item>

        <el-form-item label="商品图片">
          <input type="file" @change="getFile($event)">
        </el-form-item>

        <el-form-item label="商品价格">
          <el-input v-model="addform.goodsPrice"></el-input>
        </el-form-item>

        <el-button type="info" @click="addgoods">新增</el-button>
        <el-button type="warming" @click="addwinshow=false">关闭</el-button>


      </el-form>

    </el-dialog>

    <!-- 编辑模态框-->
    <el-dialog :visible.sync="isshow">

      <el-form :model="editform">

        <el-form-item label="商品编号">
          <el-input v-model="editform.id" disabled></el-input>
        </el-form-item>
        <el-form-item label="商品名称">
          <el-input v-model="editform.goodsName" ></el-input>
        </el-form-item>
        <el-form-item label="商品图片">
            <img style="width: 80px;height: 60px" :src="'http://localhost:8090/code/'+editform.imageUrl">
          <input type="file" @change="getupdateFile($event)">
        </el-form-item>
        <el-form-item label="商品价格">
          <el-input v-model="editform.goodsPrice" ></el-input>
        </el-form-item>
        <el-form-item label="商品销量">
          <el-input v-model="editform.goodsSales" ></el-input>
        </el-form-item>
      </el-form>

      <el-button type="info" @click="updategoods">保存</el-button>
      <el-button type="warming" @click="isshow=false">关闭</el-button>
    </el-dialog>

    <el-dialog
      title="提示"
      width="30%"
      :visible.sync="scisshow">
      <span>是否删除该商品</span>
      <span slot="footer" class="dialog-footer">
        <el-button type="info" @click="deleteGood">确 定</el-button>
       <el-button type="warming" @click="scisshow = false">取 消</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        gname:"",
        gmax:"",
        tableData: [],
        total:0,
        pageno:1,
        pagsize:10,
        isshow:false,
        scisshow:false,
        addwinshow:false,
        editform:{},
        editimg2:"",
        addform:{
          goodsName:"",
          goodsDescribe:"",
          img2:""   //二进制文件流
        },
        scid:""
      }
    },
        methods:{
        getdata(){
          var _this =this;
          var userId=sessionStorage.getItem("userId");
          //加参数
          var params = new URLSearchParams();

          params.append("pageNo",this.pageno); //分页
          params.append("pageSize",this.pagsize);

          params.append("goodsName",this.gname);
          params.append("goodsPrice",this.gmax);
          params.append("id",userId);

          this.$axios.post("Goods/queryAllGoods.action",params).then(function (response) {
            console.log(response.data)
            _this.tableData=response.data.records.map(function(item){
              item.imageUrl = "http://localhost:8090/code/"+item.imageUrl;
              return item;
            })
            _this.total = response.data.total;
          }).catch();
      },
          openeditwin(id){

            var _this =this;
            //根据id查询数据 ，绑定在编辑页面
            var params = new URLSearchParams();
            params.append("id",id);

            this.$axios.post("Goods/queryById.action",params).then(function (response) {
              _this.editform = response.data;
              _this.isshow=true;
            }).catch( function (error) {
              _this.$message({
              message: '服务端异常',
              type: 'error'
            });
          })
          },
          opendeletewin(id){
            this.scid=id;
            this.scisshow=true;
          },
          deleteGood(){
            var _this =this;
            this.scisshow=false;
            //根据id查询数据 ，绑定在编辑页面
            var params = new URLSearchParams();
            params.append("id",this.scid);
            this.scid="";
            this.$axios.post("Goods/deleteById.action",params).then(function (response) {
              if(response.data){
                _this.getdata();
                _this.$message({
                  message: '删除成功！',
                  type: 'success'
                });
              }
            }).catch( function (error) {
              _this.$message({
                message: '服务端异常',
                type: 'error'
              });
          })
      },
          searchgoods(){
            //执行geetdata方法
            this.getdata();
          },
          currentchange(val){
            console.log(val)
            //调用getdata
            this.pageno =val;
            this.getdata();
          },
          sizechange(val){
            console.log(val)
          this.pagsize=val;
            this.getdata();
          },
          //选择文件时，获取文件数据
          getFile(e){
            console.log(e.target.files[0])
            this.addform.img2= e.target.files[0];  //获取选中的文件二进制流
          },
          getupdateFile(e){
            console.log(e.target.files[0])
            this.editimg2= e.target.files[0];  //获取选中的文件二进制流
          },
          //添加数据
          addgoods(){

            //文件上传   post提交  enctype=“mu....”
            var _this =this;
            //h5提供的类型  FormData
            var formData = new FormData();
            //formData.append("name",this.addform.name);
            //Object.keys(this.addform)  得到一个数组 元素： 对象中的属性名
            Object.keys(this.addform).forEach( (key) =>{
              formData.append(key,_this.addform[key]);
            })

            this.$axios({
              method: 'post',
              url: 'Goods/addgoods.action',
              data:formData,
              headers: {
                'Content-Type':'multipart/form-data'
              }
            }).then(function (response) {
              if(response.data){
                _this.getdata();

                _this.addwinshow=false;

                _this.$message({
                  message: '新增成功！',
                  type: 'success'
                });
              }

            }).catch();
          },
          updategoods(){
            var _this =this;
            //h5提供的类型  FormData
            var formData = new FormData();
            //formData.append("name",this.addform.name);
            //Object.keys(this.addform)  得到一个数组 元素： 对象中的属性名
            Object.keys(this.editform).forEach( (key) =>{
              formData.append(key,_this.editform[key]);
            })
            formData.append("img2",_this.editimg2);
            this.$axios({
              method: 'post',
              url: 'Goods/updategoods.action',
              data:formData,
              headers: {
                'Content-Type':'multipart/form-data'
              }
            }).then(function (response) {
              if(response.data){
                _this.getdata();

                _this.isshow=false;

                _this.$message({
                  message: '修改成功！',
                  type: 'success'
                });
              }

            }).catch();
          }
      },
    created() {
      this.getdata();
    }
  }
</script>

<style>
  .el-table{
    width: 100%;
  }
  .el-table td, .el-table th{
    text-align: center;
  }
</style>

