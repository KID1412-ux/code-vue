<!--商户资料-->
<template>
  <div>
    <div>
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item>商户</el-breadcrumb-item>
        <el-breadcrumb-item>统计营收</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="pie" style="margin-top: 100px">
      <div id="pie1">
        <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
        <div id="main1" style="float:left;width:100%;height: 300px"></div>
      </div>
    </div>
    <div style="margin-top: 50px">
      <el-col :span="8" style="margin-left: 33%" >
        <el-card :body-style="{ padding: '0px' }" style="height: 120px">
          <div class="bottom clearfix" >
            <span>当前日期：</span><time class="time">{{ currentDate }}</time>
          </div>
          <div style="padding: 14px;">
            <span>总订单数：<a style="color: black">{{order}}</a></span><br>
            <span>今日提货数：<a style="color: red">{{todayTake}}</a></span><br>
            <span>总提货数：<a style="color: black">{{take}}</a></span>
            <span>待提货数：<a style="color: black">{{deilvery}}</a></span>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>

//局部引用
let echarts = require('echarts/lib/echarts')
// 引入饼状图组件
require('echarts/lib/chart/pie')
// 引入提示框和title组件
require('echarts/lib/component/tooltip')
require('echarts/lib/component/title')

export default {
  name: "Revenue",
  data(){
    return {
      yx:[],
      deilvery:0,
      todayTake:0,
      order:0,
      take:0,
      currentDate:""
    }
  },
  methods:{
    //初始化数据
    initData() {
      var _this=this;
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('main1'));
      // 绘制图表
      myChart.setOption({
        title : {
          text: '营收统计',//主标题
          subtext: '商户',//副标题
          x:'center',//x轴方向对齐方式
        },
        tooltip : {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
          orient: 'vertical',
          bottom: 'bottom',
          data: ['今日营收','总营收']
        },
        series : [
          {
            name: '访问来源',
            type: 'pie',
            radius : '60%',
            center: ['50%', '60%'],
            data:_this.yx,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      });
    },
    revenueSelect() {
      var _this = this;
      var userId = sessionStorage.getItem("userId");
      var params = new URLSearchParams();
      params.append("userId", userId);
      this.$axios.post("/merchantOrder/revenueSelect", params).then(function (item) {
        _this.yx = item.data;
        _this.initData();
        _this.selectOrder();
      }).catch()
    },
    selectOrder(){
      var _this = this;
      var userId = sessionStorage.getItem("userId");
      var params = new URLSearchParams();
      params.append("userId", userId);
      this.$axios.post("/merchantOrder/MerchantCard", params).then(function (item) {
        var map = item.data;
        console.log(map)
        _this.deilvery=map.deilvery;
        _this.todayTake=map.todayTake;
        _this.order=map.order;
        _this.take=map.take;

        var aData = new Date();
        _this.currentDate=aData.getFullYear() + "-" + (aData.getMonth() + 1) + "-" + aData.getDate();

      }).catch()
    }
  },
  created(){
    this.revenueSelect();
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
