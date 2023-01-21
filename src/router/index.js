import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/JournalView.vue'
import clavierView from "../views/ClavierView.vue"
import contactView from "@/views/ContactView.vue"
import FormView from "@/views/FormView.vue"

const routes = [
  {
    path: '/',
    name: 'journal',
    component: HomeView
  },
  {
    path: '/clavier',
    name: 'clavier',
    component: clavierView
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.

  },
  {path:'/contact',
  name:'contact' ,
  component: contactView
},

{path:'/ajoutContact',
name:'ajoutContact' ,
component: FormView
}

]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
