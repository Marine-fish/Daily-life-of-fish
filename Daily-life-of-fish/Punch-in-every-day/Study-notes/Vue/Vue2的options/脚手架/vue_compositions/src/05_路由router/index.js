import { createRouter, createWebHistory} from "vue-router"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: "/",
            redirect: "/login"
        },
       {
            path: "/login",
            component: () => import("./Home.vue")
       }
    ]
})

export default router