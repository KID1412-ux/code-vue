<template>
  <div class="homeWrap">
    <el-container style="height:100%">
      <el-header>
        <el-row :gutter="40">
              <el-col :span="12">
                <img style="height: 60px;margin-right: 400px;" src="../../img/logo.png">
              </el-col>
            <el-col :span="12">
              <a><b>供应商</b></a>
            </el-col>
        </el-row>

      </el-header>



      <el-container>
        <el-aside width="200px">
          <el-menu
            :default-active="this.$route.path"
            active-text-color="#67C23A"
            class="el-menu-vertical-demo">

            <router-link to="/Goods" class="cpdd">
              <el-menu-item index="1" class="bk">
                <i class="el-icon-notebook-1"></i>
                <span slot="title">商品信息维护</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="2" class="bk">
              <template slot="title">
                <i class="el-icon-office-building"></i>
                <span>商品入库管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/Delivery" class="cpdd">
                <el-menu-item index="2-1">入库申请</el-menu-item>
                </router-link>
                <el-menu-item index="2-2">入库记录</el-menu-item>
              </el-menu-item-group>
            </el-submenu>

            <router-link  to="/DealWith" class="cpdd">
              <el-menu-item index="3"  class="bk">
                <i class="el-icon-document"></i>
                <span slot="title">采购订单管理</span>
              </el-menu-item>
            </router-link>
            <el-submenu index="4" class="bk">
              <template slot="title">
                <i class="el-icon-s-data"></i>
                <span slot="title">统计管理</span>
              </template>
              <el-menu-item-group>
                <router-link to="/MyChart" class="cpdd">
                <el-menu-item index="4-1">货物统计</el-menu-item>
                </router-link>
                <router-link to="/MyChart_huowu" class="cpdd">
                <el-menu-item index="4-2">财务统计</el-menu-item>
                </router-link>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main>

            <router-view></router-view>

          </el-main>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
    export default {
        name: "Supplier",
      data () {
        return {
        }
      }
    }
</script>

<style scoped>
  .el-header {
    box-shadow:1px 1px 1px gainsboro;
    color: #303133;
    text-align: center;
  }

  .bk{
    box-shadow:1px 1px 1px gainsboro;
  }

  .el-aside {
    color: #303133;
    text-align: center;
    line-height: 200px;
    margin-top: 5px;
  }

  .el-main {
    color: #303133;
    text-align: center;
  }

  .homeWrap {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .el-menu{
    height:100%;
    text-align: left;
  }

  .cpdd{
    text-decoration: none;
  }

</style>
