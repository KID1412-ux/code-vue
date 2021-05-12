<template>
  <div id="app">
    <div id="div-cx" style="margin-top: 15px; width: 700px">
      <el-input placeholder="请输入内容" v-model="zhi" class="input-with-select">
        <el-button slot="append" icon="el-icon-search" @click="sousuo(zhi)"></el-button>
      </el-input>
    </div>
    <div>
      {{ GoodsSearch }}
    </div>
  </div>
</template>

<script>
export default {
  name: "Search",
  data(){
    return{
      zhi:this.$route.params.ss,
      GoodsSearch:[]
    }
  },
  methods:{
    sousuo(zhi){
      var _this=this;
      var param= new URLSearchParams();
      param.append("search",zhi)
      this.$axios.post("/Goods/Search",param).then(function (items){
        _this.GoodsSearch=items.data;
      }).catch()
    }
  },
  created() {
    this.sousuo(this.$route.params.ss);
  }
}
</script>

<style scoped>

#div-cx{
  text-align:center;
  margin:20px auto;
}

</style>
