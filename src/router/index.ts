import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Tabs from '../views/Tabs.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/startTab'
  },
  {
    path: '/tabs/',
    component: Tabs,
    children: [
      {
        path: '',
        redirect: 'startTab'
      },
      {
        path: 'startTab',
        component: () => import('@/views/StartTab.vue')
      },
      {
        path: 'bookInstytut',
        component: () => import('@/views/BookInstytut.vue')
      },
      {
        path: 'bookJoyland',
        component: () => import('@/views/BookJoyland.vue')
      },
      {
        path: 'bookBazar',
        component: () => import('@/views/BookBazar.vue')
      },
      {
        path: 'bookKsiegaWyzwan',
        component: () => import('@/views/BookKsiegaWyzwan.vue')
      },
      {
        path: 'bookNormalniLudzie',
        component: () => import('@/views/BookNormalniLudzie.vue')
      },
      {
        path: 'bookPapieroweMiasta',
        component: () => import('@/views/BookPapieroweMiasta.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
