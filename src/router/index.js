import { createRouter, createWebHashHistory } from 'vue-router'

import VHome from '@/components/home-component/v-home.vue'
import VMmToDpi from '@/components/converter/v-mm-to-dpi'
import VDpiToMm from '@/components/converter/v-dpi-to-mm.vue'
import VPxToDpi from '@/components/converter/v-px-to-dpi.vue'
import VTemplate from '@/components/template-builder/v-template.vue'
import VTemplatePdf from '@/components/template-builder-pdf/v-template-pdf.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: VHome
  },
  {
    path: '/mmtodpi',
    name: 'mmtodpi',
    component: VMmToDpi
  },
  {
    path: '/dpitomm',
    name: 'dpitomm',
    component: VDpiToMm
  },
  {
    path: '/pxtodpi',
    name: 'pxtodpi',
    component: VPxToDpi
  },
  {
    path: '/template',
    name: 'template',
    component: VTemplate
  },
  {
    path: '/template-pdf',
    name: 'template-pdf',
    component: VTemplatePdf
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
