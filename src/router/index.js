import { createRouter, createWebHashHistory } from 'vue-router'

import vHome from '@/components/home-component/v-home.vue'
import vMmToDpi from '@/components/converter/v-mm-to-dpi'
import vDpiToMm from '@/components/converter/v-dpi-to-mm.vue'
import vPxToDpi from '@/components/converter/v-px-to-dpi.vue'
import vTemplate from '@/components/template-builder/v-template.vue'
import vTemplatePdf from '@/components/template-builder/v-template-pdf.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome
  },
  {
    path: '/mm-to-dpi',
    name: 'mm-to-dpi',
    component: vMmToDpi
  },
  {
    path: '/dpi-to-mm',
    name: 'dpi-to-mm',
    component: vDpiToMm
  },
  {
    path: '/px-to-dpi',
    name: 'px-to-dpi',
    component: vPxToDpi
  },
  {
    path: '/template',
    name: 'template',
    component: vTemplate
  },
  {
    path: '/template-pdf',
    name: 'template-pdf',
    component: vTemplatePdf
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
