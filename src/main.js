import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Merchant from "./components/Merchant";

//引用router.js
import router from "./router/router";
Vue.config.productionTip = false

Vue.use(ElementUI)

//导入axios
import Axios from "axios";
//配置异步将要访问的路径
Axios.defaults.baseURL="http://127.0.0.1:8090/code"

//将baseURL绑定到全局
Vue.prototype.$axios = Axios


new Vue({
  el: '#app',
  router,
  render: h => h(Merchant)
})
