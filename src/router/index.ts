import { createRouter, createWebHistory } from 'vue-router'
// import Home from "../components/section-one/HomeComponent.vue"
// import Home from "../components/section-two/HomeComponent.vue"
// import Home from "../components/section-three/HomeComponent.vue"
// import Home from "../components/section-four/HomeComponent.vue"
import Home from "../components/section-five/HomeComponent.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
})

export default router
