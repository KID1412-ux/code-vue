import Vue from 'vue';
import App5 from './App5.vue';
import router from './router';


import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import Axios from "axios";

Axios.defaults.baseURL="http://127.0.0.1:8090/code"

Vue.prototype.$axios = Axios

Vue.use(ElementUI)

new Vue({
  el: '#app',
  render: h => h(App5),
  router
})
