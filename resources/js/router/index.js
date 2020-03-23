import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import PreciosSuscripcion from "../views/PreciosSuscripcion";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home
        },
        {
            path: "/precios_suscripcion",
            name: "preciosSuscripcion",
            component: PreciosSuscripcion
        }
    ]
});
