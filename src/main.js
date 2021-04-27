import Vue from 'vue'
import App from './App.vue'


//导入elementui
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

//Vue使用Elementui
Vue.use(ElementUI)

//导入axios
import Axios from "axios";
//配置异步将要访问的路径
Axios.defaults.baseURL="http://127.0.0.1:8090/code"

//将baseURL绑定到全局
Vue.prototype.$axios = Axios


new Vue({
  el: '#app',
  render: h => h(App)
})
