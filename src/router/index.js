import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import FoodDetails from '../views/Foods/FoodDetails.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path:'/foods/:id',
    name:'FoodDetails',
    component:FoodDetails,
    props:true
  },
  {
    path:'/:catchAll(.*)',
    name:'NotFound',
    component:NotFound
  }
  // {
  //   path:'/foods/all-foods',
  //   redirect:'/'
  // }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
