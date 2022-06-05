import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import HomeView from 'views/HomeView.vue'
import LoginView from 'views/LoginView.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: 'login'
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView,
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/fwxy',
    name: 'fwxy',
    component: () => import(/* webpackChunkName: "about" */ 'components/login/FwXy.vue')
  },
  {
    path: '/ysbh',
    name: 'ysbh',
    component: () => import(/* webpackChunkName: "about" */ 'components/login/YsBh.vue')
  },
  {
    path: '/warmprompt',
    name: 'warmprompt',
    component: () => import(/* webpackChunkName: "about" */ 'components/login/WarmPrompt.vue')
  },
  {
    path: '/SexSelect',
    name: 'SexSelect',
    component: () => import(/* webpackChunkName: "about" */ 'components/login/SexSelect.vue')
  },
  {
    path: '/educationSelect',
    name: 'educationSelect',
    component: () => import(/* webpackChunkName: "about" */ 'components/login/educationSelect.vue')
  },
  {
    path: '/locationSelect',
    name: 'locationSelect',
    component: () => import(/* webpackChunkName: "about" */ 'components/login/locationSelect.vue')
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ 'views/AboutView.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const toPath = to.path;
  const fromPath = from.path;
  console.log(fromPath)
  console.log(toPath)
  next()
});

router.onError((err) => {
  console.log(err)
})

export default router
