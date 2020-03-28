import Vue from "vue";
import Router from "vue-router";
import Test from "../views/Test";
import Notification from "../views/Notification";
import Login from "../views/Login";
import Broker from "../views/Broker";


Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "test",
            component: Test
        },
        {
            path: "/notification",
            name: "notification",
            component: Notification
        },
        {
            path: "/login",
            name: "login",
            component: Login
        },
        {
            path: "/broker",
            name: "broker",
            component: Broker
        },
    ]
});
