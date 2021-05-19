<template>
  <div id="main" style="height:100%;width:100%">

  </div>
</template>

<script>

  export default {
    name: "MyChart",
    data() {
      return {
        Goods:[],
        bdata:[],
      }
    },
    mounted(){
      this.initEchart();
      this.getdata();
    },
    methods:{
      initEchart(){
        var _this =this;
        //初始化echart实例，获取dom
        var echartDemo=this.$echarts.init(document.getElementById('main'));
        var option = {
          title: {
            text: '销售数量',
            subtext: '纯属虚构',
            left: 'center'
          },
          tooltip: {
            trigger: 'item'
          },
          legend: {
            type: 'scroll',
            orient: 'vertical',
            right: 10,
            top: 80,
            bottom: 20,
          },
          series: [
            {
              name: '销售总额',
              type: 'pie',
              radius: '55%',
              center: ['30%', '50%'],
              data:_this.bdata,
              emphasis: {
                itemStyle: {
                  shadowBlur: 10,
                  shadowOffsetX: 0,
                  shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
              }
            }
          ]
        };

        echartDemo.setOption(option);
        /* echartDemo.setOption({
           legend: {
             data: _this.bdata.name,
           },
           series:[{
             data: _this.bdata,
           }]
         });*/

      },
      getdata(){
        var _this =this;
        this.$axios.post("Goods/queryAll.action").then(function (response) {
          _this.Goods=response.data;
          for(var i=0;i<_this.Goods.length;i++){
            var obj = new Object();
            obj.value=_this.Goods[i].goodsSales;
            obj.name=_this.Goods[i].goodsName;
            _this.bdata.push(obj);
          }
          console.log(_this.bdata)
        }).catch();
      }
    },//数据自动刷新，必然需要一个监听机制告诉Echarts重新设置数据
    watch: {
      //观察option的变化
      bdata: {
        handler(newVal, oldVal) {
          console.log("ccc")
          this.initEchart();
        },
        deep: true //对象内部属性的监听，关键。
      }
    }


  }

</script>

<style scoped>

</style>
