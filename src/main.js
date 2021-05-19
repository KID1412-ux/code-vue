import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// import ECharts from 'vue-echarts'  // 在 webpack 环境下指向 components/ECharts.vue
// /* 引入echarts工具 */
// import 'echarts/lib/component/tooltip'
// import 'echarts/lib/component/title'
// import 'echarts/lib/component/legend'
// Vue.use(ECharts)
//引用router.js
import router from './router/router.js'
//导入axios
import Axios from "axios";
import * as Echarts from 'echarts';

Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.prototype.$echarts=Echarts;

//配置异步将要访问的路径
Axios.defaults.baseURL = "http://127.0.0.1:8090/code"

//将baseURL绑定到全局
Vue.prototype.$axios = Axios


new Vue({
  el: '#app',
  render: h => h(App),
  router
})
