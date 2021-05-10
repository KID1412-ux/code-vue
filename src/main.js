import Vue from 'vue'
import App from './App.vue'
// import First from "./First";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

//引用router.js
import router from './router/router.js'
//导入axios
import Axios from "axios";

Vue.config.productionTip = false

Vue.use(ElementUI)

//配置异步将要访问的路径
Axios.defaults.baseURL = "http://127.0.0.1:8090/code"

//将baseURL绑定到全局
Vue.prototype.$axios = Axios


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
