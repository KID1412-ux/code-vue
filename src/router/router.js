//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';

import Hot from "../components/Home/Hot";
import Login from "../components/users/login";
import Register from "../components/users/register";
import UserOrder from "../components/users/userOrder";
import UserPersonal from "../components/users/userPersonal";
import Home from "../components/Home";
import ProductData from "../components/Product/ProductData";
import ShopCart from "../components/shop_cart/shop_cart";
import Search from "../components/Home/Search";
import Classification from "../components/Home/Classification";
import Merchant from "../components/Merchant";
import test from "../components/users/test";
import merchantOrder0 from "../components/Product/merchantOrder0";
import merchantOrder1 from "../components/Product/merchantOrder1";
import merchantOrder2 from "../components/Product/merchantOrder2";
import merchantOrder3 from "../components/Product/merchantOrder3";
import Revenue from "../components/Product/Revenue";
import Supplier from "../components/Supplier/Supplier";
import Goods from "../components/Supplier/Goods";
import MyChart_huowu from "../components/Supplier/MyChart_huowu";
import MyChart from "../components/Supplier/MyChart_goodsSales";
import DealWith from "../components/order_acceptance/deal_with";
import ApplicationQuery from "../components/warehousing_application/application_query";
import SubmitApplication from "../components/warehousing_application/submit_application";

//第三方库需要use一下才能用
Vue.use(VueRouter)

//定义routes路由的集合，数组类型
const routes = [
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {path: '/Hot', component: Hot},
  {path: "/Register", component: Register},
  {path: "/login", component: Login},
  {path: "/", component: Home, name: "Home"},
  {
    path: "/UserOrder", component: UserOrder,
    meta: {  // 在路由配置元信息
      requireAuth: true
    }
  },
  {
    path: "/UserPersonal", component: UserPersonal,
    meta: {  // 在路由配置元信息
      requireAuth: true
    }
  },
  {path: "/", component: Home},
  {path: "/Search", component: Search, name: "Search"},

  {path: "/Classification", component: Classification, name:"Classification"},
  {
    path: "/ShopCart", component: ShopCart,
    meta: {  // 在路由配置元信息
      requireAuth: true
    }
  },
  {path: "/Merchant", component: Merchant,
    children:[
      {path: "/ProductData", component: ProductData,name:"ProductData"},
      {path: "/Revenue", component: Revenue,name:"Revenue"},
      {path: "/MerchantOrder0", component: merchantOrder0, name: "MerchantOrder0"},
      {path: "/MerchantOrder1", component: merchantOrder1, name: "MerchantOrder1"},
      {path: "/MerchantOrder2", component: merchantOrder2, name: "MerchantOrder2"},
      {path: "/MerchantOrder3", component: merchantOrder3, name: "MerchantOrder3"},
    ]
  },
  {path: "/Supplier", component: Supplier, name: "Supplier",
    children: [
      {
        path: '/Goods',
        name : 'Goods',
        component:Goods
      },
      {
        path : '/MyChart',
        name : 'MyChart',
        component :  MyChart
      },
      {
        path : '/MyChart_huowu',
        name : 'MyChart_huowu',
        component :  MyChart_huowu
      },
      {
        path : '/DealWith',
        name : 'DealWith',
        component :  DealWith
      },
      {
        path : '/ApplicationQuery',
        name : 'ApplicationQuery',
        component :  ApplicationQuery
      },
      {
        path : '/SubmitApplication',
        name : 'SubmitApplication',
        component :  SubmitApplication
      }
    ]
  },


]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({

//ES6简写，等于routes：routes
  routes
});

router.beforeEach(((to, from, next) => {        // 使用全局导航守卫beforeEach进行路由跳转时的拦截
  if (to.matched.some(record => record.meta.requireAuth)) {                         // 判断将要进入的路由是否需要登录
    if (sessionStorage.getItem("userId") != null) {                             // 判断sessionStorage是否有user
      next();                                                                       // 如果有保存就继续
    } else {
      alert('请先完成登录！');
      next({
        path: "/login",                                                             // 如果没有user就跳转到登录页面
        query: {
          redirect: to.fullPath                                                     // 需要重定向的路由，在/login这个组件中跳转页面
        }
      });
    }
  } else {
    next();                                                                         // 如果不需要登录则直接进入页面
  }
}))

//抛出这个这个实例对象方便外部读取以及访问
export default router
