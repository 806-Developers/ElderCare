import { createRouter, createWebHashHistory } from 'vue-router'
import ChatAssistant from '@/components/ChatAssistant.vue'
import DataShown from '@/components/DataShown.vue'
import UserLogin from '@/components/UserLogin.vue'
import MainPage from '@/components/MainPage.vue'

const routes = [
    {
        path: '/main',
        name: 'main',
        component: MainPage
    },
    {
        path: '/login',
        name: 'login',
        component: UserLogin
    },
    {
        path: '/datashown',
        name: 'datashown',
        component: DataShown
    },
    {
        path: '/assistant',
        name: 'assistant',
        component: ChatAssistant
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router

