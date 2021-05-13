<template>
  <div style="padding-left: 150px;padding-right: 150px">

      <div id="div-cx" style="margin-top: 15px; width: 700px">
        <el-input placeholder="请输入内容" v-model="input3" style="width: 550px" class="input-with-select">
          <el-button slot="append" icon="el-icon-search" @click="search(input3)"></el-button>
        </el-input>
      </div>

      <div v-if="GoodsSearch.length>0" style="margin-top: 50px">
        <div>
          <a>搜索结果：</a>
        </div>
        <el-row :gutter="20" style="margin-top: 30px">
          <el-col :span="6" v-for="good in GoodsSearch" style="margin-top: 10px">
            <div @click="selectGoodById(good.id)" >
              <el-card :body-style="{ padding: '0px' }">
                <img style="width: 326px" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png" class="image">
                <div style="padding: 14px;text-align: left">
                  <span class="span">{{good.goodsName}}</span>
                  <div class="bottom clearfix">
                    <a style="font-size: 25px;color: orangered"><span style="font-size: 15px">￥</span>{{good.goodsPrice}}</a><span style="color: #99a9bf">{{good.goodsSales}}人已购买</span>
                  </div>
                </div>
              </el-card>
            </div>
          </el-col>
        </el-row>
      </div>

      <div style="text-align: center;margin-top: 255px;" v-if="GoodsSearch.length<1">
        <h1>未查找到相关商品</h1>
      </div>

    <el-dialog
      title="商品详情"
      :visible.sync="dialogVisible"
      :fullscreen="true"
      :before-close="handleClose">
      <div style="margin-top: 20px">
        <div style="float: left;margin-left: 200px;width: 500px;height: 500px">
          <img height="100%" width="100%" src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png">
        </div>
        <div style="width: 500px;height: 500px;margin-left: 750px">
          <h1 style="color: #333333">{{ goods.goodsName }}</h1>
          <a style="font-size: 15px">价格：</a>
          <a style="color: red;font-size: 25px">￥{{goods.goodsPrice}}</a>
          <div style="margin-top: 20px;padding-bottom: 20px;height: 200px">
            <label>商品描述：{{goods.goodsDescribe}}</label>
          </div>
          <a>销量：{{goods.goodsSales}}</a>
          <br>
          <a>库存：{{warehouse.goodsAmount}}</a>
          <el-divider></el-divider>
          <div v-if="warehouse.goodsAmount>0">
            <label>数量：<el-input-number v-model="num" @change="handleChange" :min="1" :max=warehouse.goodsAmount label="描述文字"></el-input-number></label>
            <el-button type="danger">立即购买</el-button>
            <el-button type="warning" @click="addCart">加入购物车</el-button>
          </div>
          <div v-if="warehouse.goodsAmount<1">
            <label>数量：<el-input-number v-model="num" @change="handleChange" :min="1" :max="1" label="描述文字"></el-input-number></label>
            <el-button type="danger" :plain="true" @click="kcbz()">立即购买</el-button>
            <el-button type="warning" @click="kcbz()">加入购物车</el-button>
          </div>
        </div>
      </div>
    </el-dialog>

  </div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return{
      num:1,
      input3:"",
      zhi:this.$route.params.ss,
      GoodsSearch:[],
      goods:[],
      warehouse:[],
      dialogVisible: false,
    }
  },
  methods:{
    search(zhi){
      var _this=this;
      var param= new URLSearchParams();
      param.append("search",zhi)
      this.$axios.post("/Goods/Search",param).then(function (items){
        _this.GoodsSearch=items.data;
      }).catch()
    },
    selectGoodById(id){
      var _this=this;
      var param= new URLSearchParams();
      param.append("id",id)
      this.$axios.post("/Goods/selectGoodById",param).then(function (item){
        var map=item.data;
        _this.goods=map.good;
        _this.warehouse=map.warehouse;
        _this.dialogVisible=true;
      }).catch()
    },
    handleClose(done) {
      var _this=this;
      this.$confirm('确认关闭？')
        .then(_ => {
          done();
          _this.num=1;
        })
        .catch(_ => {});
    },
    addCart() {
      var userId = sessionStorage.getItem("userId");
      if (userId == null) {
        alert('请先完成登录！');
        this.$router.push('/login');
        return;
      }
      var _this = this;
      var param = new URLSearchParams();
      param.append("goodsId", this.goods.id);
      param.append("userId", userId);
      param.append("amount", this.num);
      param.append("goodsPrice", this.goods.goodsPrice);
      this.$axios.post("shopCart/saveOrUpdate", param).then(function (result) {
        _this.$message({
          showClose: true,
          type: 'success',
          message: '成功加入购物车!'
        });
      }).catch()
    }
  },
  created() {
    this.search(this.$route.params.ss);
  }
}
</script>

<style scoped>

#div-cx{
  text-align:center;
  margin:20px auto;
}

.el-card:hover {
  border: 1px solid red;
}

.span{
  max-width: 10em;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis; /*超出部分用...代替*/
}

</style>
