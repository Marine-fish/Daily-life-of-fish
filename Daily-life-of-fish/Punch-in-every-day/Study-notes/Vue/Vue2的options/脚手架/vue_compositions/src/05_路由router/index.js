import { createRouter, createWebHashHistory} from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: "/",
            redirect: "/home/:id"
        },
       {
            path: "/home/:id",
            component: () => import("./路由的切换/Home.vue")
       },
       {
         path: "/about/:id",
         component: () => import("./路由的切换/About.vue")
       },
       {
        path: "/:pathMatch(.*)*",//表示只有匹配不到上面的任何一个页面就会跳转到这个页面去,加后面*就会把路径解析成数组
        component: () => import("./配置路由不匹配的的页面/NotFound.vue")
       }
    ]
})

export default router