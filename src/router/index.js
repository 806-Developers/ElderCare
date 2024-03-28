
/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router/auto'
import assistant from '../pages/assistant.vue'
import index from '../pages/index.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes:[
    {path: "/assistant", component: assistant},
    {path: "/", component: index}
  ]
})

export default router
