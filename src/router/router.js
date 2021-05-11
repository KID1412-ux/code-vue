//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
import Hot from "../components/Home/Hot";
import Login from "../components/users/login";
import Register from "../components/users/register";
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
    meta: {
      requireAuth: true
    }
  },
]

//实例化VueRouter并将routes添加进去
const router = new VueRouter({

//ES6简写，等于routes：routes
  routes
});

router.beforeEach(((to, from, next) => {
  if (to.matched.some(record => record.meta.requireAuth)) {
    if (sessionStorage.getItem("user") != null) {
      next();
    } else {
      alert('请先完成登录！');
      next({
        path: "/login",
        query: {redirect: to.fullPath}
      });
    }
  } else {
    next();
  }
}))

//抛出这个这个实例对象方便外部读取以及访问
export default router
