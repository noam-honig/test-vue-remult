import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);





const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/users',
            component: () => import("./components/user-list.vue")
        },
        {
            path: "/add",
            component: () => import("./components/add-user.vue")
        },
        {
            path: "/sign-in",
            component: () => import("./components/sign-in.vue")
        },
        {
            path: "/update-password",
            component: () => import("./components/update-password-view.vue")
        }
    ]
});

export default router;