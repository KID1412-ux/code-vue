//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';

import Hot from "../components/Home/Hot";
import Login from "../components/users/login";
import Home from "../components/Home";
import ProductData from "../components/Product/ProductData";
import ShopCart from "../components/shop_cart/shop_cart";

//第三方库需要use一下才能用
Vue.use(VueRouter)

//定义routes路由的集合，数组类型
const routes = [
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {path: '/Hot', component: Hot},
  {path: "/Register", component: Register},
  {path: "/login", component: Login},
  {path: "/", component: Home},
  {path: "/ProductData", component: ProductData},
  {
    path: "/ShopCart",
    component: ShopCart,
    meta: {                           // 在路由配置元信息
      requireAuth: true
    }
  },
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({
//ES6简写，等于routes：routes
  routes
});

router.beforeEach(((to, from, next) => {        // 使用全局导航守卫beforeEach进行路由跳转时的拦截
  if (to.matched.some(record => record.meta.requireAuth)) {                         // 判断将要进入的路由是否需要登录
    if (sessionStorage.getItem("user") != null) {                               // 判断sessionStorage是否有user
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
