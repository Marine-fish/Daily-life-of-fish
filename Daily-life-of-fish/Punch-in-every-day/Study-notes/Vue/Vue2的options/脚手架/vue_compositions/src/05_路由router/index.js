import { createRouter, createWebHashHistory} from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home"
        },
       {
            path: "/home/:id",
            component: () => import("./路由的切换/Home.vue")
       },
       {
         path: "/about/:id",
         component: () => import("./路由的切换/About.vue")
       }
    ]
})

export default router