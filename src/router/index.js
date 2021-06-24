import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '*',
    redirect: '/meals'
  },
  {
    path: '/meals',
    component: () => import('../views/active-meals.vue'),
  },
  {
    path: '/deleted-meals',
    component: () => import('../views/in-active-meals.vue'),
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes,
  scrollBehavior(to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
})

export default router