import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginForm from '../views/LoginForm.vue'
import SignUpForm from '../views/SignUpForm.vue'
import AdminPanel from '../views/AdminPanel.vue'
import NotFound from '../views/NotFound.vue'
import MenuData from '../components/Admin/MenuData.vue'
import AddMenu from '../components/Admin/AddMenu.vue'
import StillWorking from '../components/Admin/StillWorking.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignUpForm
  },
  {
    path: '/adminpanel',
    name: 'adminpanel',
    component: AdminPanel,
    children:[ {
                path:'menudata',
                name:'menudata',
                component:MenuData},
                {
                  path:'addMenu',
                  name:'addmenu',
                  component:AddMenu},
                {
                  path:'stillworking',
                  name:'stillworking',
                  component:StillWorking} ]
  },
  {
    path: '/:catchAll(.*)',
    component: NotFound
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
