import Vue from "vue"
import Router from "vue-router"

import Home from "../components/home"
import Denglu from "../components/denglu"

Vue.use(Router)

export default new Router({
  routes:[
      {
      path:"/Home",
      name:"Home",
      component:Home,
    },
      {
        path:"/",
        name:"Denglu",
        component:Denglu,
      }
    ],
    mode:"history"
  }
)
