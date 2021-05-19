<template>
  <div id="app">
    <el-container class="footer">
      <el-main>
        <el-row :gutter="20">
            <div class="grid-content"  style="background-color: #ffffff">
              <el-input id="userName" class="input" style="margin-left: 55%;margin-top: -50px" v-model="orderNum" placeholder="请输入订单号">
              </el-input>
              <el-button slot="append" @click="cle" type="primary">查询</el-button>

                  <el-table :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                    <el-table-column prop="orderNumber" label="订单编号" width="250">
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userName"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态"  width="150">
                    </el-table-column>
                    <el-table-column   label="操作" >
                    </el-table-column>
                  </el-table>
            </div>
        </el-row>
      </el-main>
    </el-container>
  </div>

</template>



<script>
export default {
  data() {
    return {
        activeName:"",
        userId:"1",
        orderNum:"",
        userMsg:"",
        password:"",
        sex:"0",
        phone:"",
        birthday:"",
      tableData: []
    }
  },
  methods:{
    handleClick(tab, event) {
      console.log(tab, event);
    },
    selectUserOrder(){
      var _this=this;
      var params =new URLSearchParams();
      params.append("userId",this.userId);
      params.append("orderNumber",this.orderNum);
      // params.append("orderStats",this.activeName);
      this.$axios.post("userOrder/selectUserOrderByDto",params).then(function(result) {
        var table = result.data;
        table.forEach(item => {if(item.orderStats=="0"){item.orderStats="待付款"}else if (item.orderStats=="1"){item.orderStats="待提货"}else if (item.orderStats=="2"){item.orderStats="已收货"}
        })
        table.map(item=> {
          _this.tableData.push(Object.assign({},item,{hasChildren:true}))
        })
        console.log(_this.tableData)
      }).catch();
    },
    load(tree, treeNode, resolve) {
      setTimeout(() => {
        console.log(tree.id)
        var _this=this;
        var table=[];
        var params =new URLSearchParams();
        params.append("orderId",tree.id);
        this.$axios.post("userOrder/selectUserOrderDetail",params).then(function(result) {
          table = result.data;
          table.forEach(item => {item.orderPrice=item.goodsPrice+' x '+item.goodsAmount
          })
          resolve(table)
        }).catch();
        console.log(this.table)
        // resolve(table,resolve)
        // resolve([
        //   {
        //     id: 31,
        //     orderNumber: 'edfarga',
        //     orderPrice: '4564867'
        //   }, {
        //     id: 32,
        //     orderNumber: 'FE FEDFEDEEwfwf',
        //     orderPrice: '4545'
        //   }
        // ])
        console.log(resolve)
      }, 1000)
    },
    cle(){

    }
  },
  created() {
    this.selectUserOrder();

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

.input{
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

/*.grid-content {*/
/*  margin-top: 30px;*/
/*}*/

.footer{
  /*position: absolute;*/
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}


.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  color: #99a9bf;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 50%;
}
</style>
