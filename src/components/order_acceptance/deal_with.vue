<template>
  <div>
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <el-input v-model="search.purchaseNo" placeholder="请输入订单号" class="input-with-select input-with" clearable>
          <el-button slot="append" @click="searchData" icon="el-icon-search"></el-button>
        </el-input>
      </div>
      <div>
        <el-table
          :data="tableData"
          max-height="500"
          stripe
          ref="multipleTable"
          v-loading="loading"
          :default-sort="{prop: 'checkTime', order: 'descending'}"
          @selection-change="handleSelectionChange"
          :row-key="getRowKey"
          style="width: 100%">
          <el-table-column
            label="订单号"
            width="170">
            <template slot-scope="scope">
              {{ scope.row.purchaseNo }}
            </template>
          </el-table-column>
          <el-table-column
            prop="supplierName"
            label="供应商店铺名"
            width="240">
          </el-table-column>
          <el-table-column
            prop="amount"
            label="采购总数量"
            width="160">
          </el-table-column>
          <el-table-column
            prop="price"
            label="采购总价"
            width="160">
          </el-table-column>
          <el-table-column
            prop="checkTime"
            sortable
            label="接收日期"
            width="189">
          </el-table-column>
          <el-table-column
            label="订单状态"
            width="160">
            <template slot-scope="scope">
              {{ scope.row.stats | filter }}
            </template>
          </el-table-column>
          <el-table-column
            label="受理"
            width="160">
            <template slot-scope="scope">
              <el-button @click="handle(scope.row.id)" type="primary" icon="el-icon-edit" circle></el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-divider></el-divider>
      <div class="block">
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :page-sizes="[10, 20, 30, 40]"
          :page-size="pageSize"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
        </el-pagination>
      </div>
    </el-card>
    <el-dialog width="62%" title="订单受理" :visible.sync="dialogTableVisible" center>
      <el-divider
        content-position="left">
        订单信息
      </el-divider>
      <el-form :model="form">
        <el-form-item label="订单号" :label-width="formLabelWidth">
          <div class="form-input">
            <el-input v-model="form.purchaseNo" autocomplete="off" disabled></el-input>
          </div>
        </el-form-item>
        <el-form-item label="总数量" :label-width="formLabelWidth">
          <div class="form-input">
            <el-input v-model="form.amount" autocomplete="off" disabled></el-input>
          </div>
        </el-form-item>
        <el-form-item label="总金额" :label-width="formLabelWidth">
          <div class="form-input">
            <el-input v-model="form.price" autocomplete="off" disabled></el-input>
          </div>
        </el-form-item>
        <el-form-item label="接收日期" :label-width="formLabelWidth">
          <div class="form-input">
            <el-input v-model="form.roadTime" autocomplete="off" disabled></el-input>
          </div>
        </el-form-item>
        <el-form-item label="委托方" :label-width="formLabelWidth">
          <div class="form-input">
            <el-input v-model="client" autocomplete="off" disabled></el-input>
          </div>
        </el-form-item>
      </el-form>
      <el-divider
        content-position="left">
        订单详情
      </el-divider>
      <el-table
        :row-key="getRowKey"
        :data="detailsData"
        style="width: 100%"
        border
        stripe
        :default-sort="{prop: 'id', order: 'descending'}"
        max-height="270">
        <el-table-column
          prop="id"
          label="商品ID"
          sortable
          width="121">
        </el-table-column>
        <el-table-column
          prop="goodsName"
          label="商品名称"
          width="320">
        </el-table-column>
        <el-table-column
          prop="goodsPrice"
          label="商品售价"
          width="150">
        </el-table-column>
        <el-table-column
          label="出售数量"
          prop="amount"
          width="150">
        </el-table-column>
        <el-table-column
          prop="goodsUnit"
          label="计量单位"
          width="150">
        </el-table-column>
      </el-table>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogTableVisible = false">取消</el-button>
        <el-button type="primary" @click="solve">受理</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "deal_with",
  data() {
    return {
      tableData: [],
      pageNo: 1,
      pageSize: 10,
      total: 0,
      loading: false,
      multipleSelection: [],
      search: {purchaseEmployeeId: '', purchaseNo: ''},
      detailsData: [],
      logData: [],
      dialogTableVisible: false,
      formLabelWidth: '120px',
      form: {},
      client: '熙贝电商',
      supplierId: ''
    };
  },
  methods: {
    getData() {
      this.continuousLoad();
      var _this = this;
      var params = new URLSearchParams();
      params.append("supplierId", this.supplierId);
      params.append("purchaseNo", this.search.purchaseNo);
      params.append("stats", "1");
      params.append("pageSize", this.pageSize);
      params.append("pageNo", this.pageNo);
      this.$axios.post("purchase/queryByPage", params).then(function (result) {
        _this.tableData = result.data.list;
        _this.total = result.data.total;
      }).catch();
    },
    getSupplierId() {
      this.supplierId = sessionStorage.getItem("userId");
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    getRowKey(row) {
      return row.id;
    },
    continuousLoad() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    },
    handleSizeChange(val) {
      this.pageSize = val;
      this.getData();
    },
    handleCurrentChange(val) {
      this.pageNo = val;
      this.getData();
    },
    searchData() {
      this.getData();
    },
    recordDetails(id) {
      var _this = this;
      var params = new URLSearchParams();
      params.append("purchaseId", id);
      this.$axios.post("purchase/queryDetailByPurchaseId", params).then(function (result) {
        _this.detailsData = result.data;
      }).catch();
    },
    handle(id) {
      var _this = this;

      function queryDetailByPurchaseId() {
        var params = new URLSearchParams();
        params.append("purchaseId", id);
        return _this.$axios.post("purchase/queryDetailByPurchaseId", params);
      }

      function queryPurchaseById() {
        var params = new URLSearchParams();
        params.append("id", id);
        return _this.$axios.post("purchase/queryPurchaseById", params);
      }

      this.$axios.all([queryDetailByPurchaseId(), queryPurchaseById()]).then(this.$axios.spread(function (res1, res2) {
        _this.form = res2.data;
        _this.detailsData = res1.data;
        _this.dialogTableVisible = true;
      })).catch();
    },
    solve() {
      var _this = this;

      var total = 0;
      var totalPrice = 0;
      this.detailsData.forEach(item => {
        total += item.amount;
        totalPrice += item.amount * item.goodsPrice;
      });

      function updatePurchase() {
        var params = new URLSearchParams();
        params.append("id", _this.form.id);
        params.append("stats", '3');
        return _this.$axios.post("purchase/updatePurchase", params);
      }

      function saveStock() {
        var params = new URLSearchParams();
        params.append("amount", total);
        params.append("price", totalPrice);
        params.append("supplierId", _this.supplierId);
        params.append("registerStats", "0");
        return _this.$axios.post("stock/saveStock", params);
      }

      function saveDetail(nary) {
        return _this.$axios({
          method: 'post',
          url: 'stock/saveDetail',
          data: JSON.stringify(nary),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }

      function updateGoods(batch) {
        return _this.$axios({
          method: 'post',
          url: 'purchase/updateGoods',
          data: JSON.stringify(batch),
          headers: {
            'Content-Type': 'application/json;charset=UTF-8'
          }
        });
      }

      this.$axios.all([updatePurchase(), saveStock()]).then(this.$axios.spread(function (res1, res2) {
        var nary = [];
        _this.detailsData.forEach(item => {
          var json = {};
          json.stockId = res2.data;
          json.goodsId = item.goodsId;
          json.goodsAmount = item.amount;
          nary.push(json);
        })
        var batch = [];
        _this.detailsData.forEach(item => {
          var json = {};
          json.id = item.goodsId;
          json.goodsSales = item.amount;
          batch.push(json);
        })
        _this.$axios.all([saveDetail(nary), updateGoods(batch)]).then(_this.$axios.spread(function (res1, res2) {
          _this.$message({
            showClose: true,
            message: '受理成功',
            type: 'success'
          });
          _this.dialogTableVisible = false;
          _this.getData();
        })).catch();
      })).catch();
    }
  },
  created() {
    this.getSupplierId();
    this.getData();
  },
  filters: {
    filter(val) {
      return '待受理'
    }
  }
}
</script>

<style scoped>
.text {
  font-size: 14px;
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
  width: 100%;
}

.el-select .el-input {
  width: 130px;
}

.input-with-select .el-input-group__prepend {
  background-color: #fff;
}

.input-with {
  width: 500px;
}

.form-input {
  width: 300px;
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
