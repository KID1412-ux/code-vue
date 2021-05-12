<template>
  <div id="app">
    <el-container class="footer">
      <el-header style="background: red">
        {{userId}}
      </el-header>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="4">
            <div class="grid-content"></div>
          </el-col>
          <el-col :span="16">
            <div class="grid-content" style="background-color: #ffffff">
              <el-input id="userName" class="input" style="margin-left: 55%;" v-model="orderNum" placeholder="请输入订单号">
              </el-input>
              <el-button slot="append" @click="cle" type="primary">查询</el-button>

              <el-tabs v-model="activeName" type="border-card" @tab-click="handleClick">
                <el-tab-pane label="全部订单" name="4" @click="selectUserOrder">

                  <el-table :data="tableData" border style="width: 100%;background-color: #eee" row-key="id" lazy :load="load" :tree-props="{children: 'children', hasChildren: 'hasChildren'}">
                    <el-table-column prop="orderNumber" label="订单编号" width="250">
                    </el-table-column>
                    <el-table-column  prop="orderPrice"  label="总金额"  width="120">
                    </el-table-column>
                    <el-table-column  prop="createTime"  label="创建时间"  width="150">
                    </el-table-column>
                    <el-table-column  prop="userNickname"  label="收货人"  width="150">
                    </el-table-column>
                    <el-table-column  prop="orderStats"  label="订单状态"  width="150">
                    </el-table-column>
                    <el-table-column   label="操作" >
                    </el-table-column>
                  </el-table>
                </el-tab-pane>
                <el-tab-pane label="待付款" name="3" @click="selectUserOrder">
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
                </el-tab-pane>
                <el-tab-pane label="待收货" name="1" @click="selectUserOrder">
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
                </el-tab-pane>
                <el-tab-pane label="已收货" name="2" @click="selectUserOrder">
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
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-col>
          <el-col :span="4"><div class="grid-content"><div style="height: 100%"></div></div></el-col>
        </el-row>
      </el-main>
      <el-footer style="background: yellow">Footer</el-footer>
    </el-container>
  </div>

</template>



<script>
export default {
  data() {
    return {
      activeName:"4",
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
      this.selectUserOrder();
    },
    selectUserOrder(){
      var _this=this;
      var params =new URLSearchParams();
      params.append("userId",this.userId);
      params.append("orderNumber",this.orderNum);
      var orderStats=this.activeName;
      params.append("orderStats",orderStats);
      console.log(orderStats)
      this.$axios.post("userOrder/selectUserOrderByDto",params).then(function(result) {
        _this.tableData = result.data;
        _this.tableData.forEach(item => {if(item.orderStats==="0"){item.orderStats="待付款"}else if (item.orderStats==="1"){item.orderStats="待提货"}else if (item.orderStats==="2"){item.orderStats="已收货"}})
        var table = [];
        _this.tableData.forEach((item=> {
          table.push(Object.assign({},item,{hasChildren:true}))
        }))
        _this.tableData = table;
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
        console.log(resolve)
      }, 1000)
    },
    cle(){
      var arry= [{a:11,b:22,c:33,d:44},{a:11,b:0,c:0,d:44},{a:11,b:22,c:99,d:99}];
      var arry2=[];
      arry.map(((item, index)=> {
        arry2.push(Object.assign({},item,{mess1:true}))
      }))
      console.log(arry)
      console.log(arry2);
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

li {
  display: inline-block;
  margin: 0 10px;
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
