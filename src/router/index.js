import { createRouter, createWebHashHistory } from 'vue-router'

import vHome from '@/components/home-component/v-home.vue'
import vMmToDpi from '@/components/converter/v-mm-to-dpi'
import vDpiToMm from '@/components/converter/v-dpi-to-mm.vue'
import vPxToDpi from '@/components/converter/v-px-to-dpi.vue'
import vTemplate from '@/components/template-builder/v-template.vue'
import vTemplatePdf from '@/components/template-builder-pdf/v-template-pdf.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: vHome
  },
  {
    path: '/mmtodpi',
    name: 'mmtodpi',
    component: vMmToDpi
  },
  {
    path: '/dpitomm',
    name: 'dpitomm',
    component: vDpiToMm
  },
  {
    path: '/pxtodpi',
    name: 'pxtodpi',
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
