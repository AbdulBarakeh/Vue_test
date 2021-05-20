import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Jobs from '../views/Jobs.vue'
import Management from '../views/Management.vue'
import Model from '../views/Model.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/jobs',
    name: 'Jobs',
    component: Jobs
  },
  {
    path: '/management',
    name: 'Management',
    component: Management
  },
  {
    path: '/model',
    name: 'Model',
    component: Model
  }
  
  // {
  //   path: '/about',
  //   name: 'About',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  // }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
