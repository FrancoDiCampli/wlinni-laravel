import Vue from "vue";
import Router from "vue-router";
import Test from "../views/Test";
import Notification from "../views/Notification";
import Login from "../views/Login";
import Broker from "../views/Broker";
import Agent from "../views/Agent";

import AMC1 from "../views/amc/amc1";
import AMC2 from "../views/amc/amc2";


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
        {
            path: "/agent",
            name: "agent",
            component: Agent
        },
        {
            path: "/amc1",
            name: "AMC1",
            component: AMC1
        },
        {
            path: "/amc2",
            name: "AMC2",
            component: AMC2
        },
    ]
});
