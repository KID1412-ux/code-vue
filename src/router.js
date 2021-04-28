//引入vue
import Vue from 'vue';
//引入vue-router
import VueRouter from 'vue-router';
//第三方库需要use一下才能用
Vue.use(VueRouter)

import Hot from './router/Hot.vue';
import Other from './router/Other.vue'

//定义routes路由的集合，数组类型
const routes=[
  //单个路由均为对象类型，path代表的是路径，component代表组件
  {path:'/Hot',component:Hot},
  {path:"/Other",component:Other}
]

//实例化VueRouter并将routes添加进去
const router=new VueRouter({
//ES6简写，等于routes：routes
  routes
});

//抛出这个这个实例对象方便外部读取以及访问
export default router
