import { createRouter, createWebHistory } from 'vue-router'

import LoginView from '../views/LoginView.vue'
import DashboardView from '../views/DashboardView.vue'
import KelasView from '../views/KelasView.vue'
import SiswaView from '../views/SiswaView.vue'

const routes = [
  {
    path: '/',
    component: LoginView
  },
  {
    path: '/dashboard',
    component: DashboardView
  },
  {
    path: '/kelas',
    component: KelasView
  },
  {
    path: '/siswa',
    component: SiswaView
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router