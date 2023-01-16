import { createRouter, createWebHashHistory } from 'vue-router'

import vHome from '@/components/home-component/v-home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome
  },
  {
    path: '/mm-to-dpi',
    name: 'mm-to-dpi',
    component: () => import(/* webpackChunkName: "mmtodpi" */'@/views/converter/v-mm-to-dpi.vue')
  },
  {
    path: '/dpi-to-mm',
    name: 'dpi-to-mm',
    component: () => import(/* webpackChunkName: "dpitomm" */'@/views/converter/v-dpi-to-mm.vue')
  },
  {
    path: '/px-to-dpi',
    name: 'px-to-dpi',
    component: () => import(/* webpackChunkName: "pxtodpi" */'@/views/converter/v-px-to-dpi.vue')
  },
  {
    path: '/template',
    name: 'template',
    component: () => import(/* webpackChunkName: "template" */'@/views/template-builder/v-template.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
