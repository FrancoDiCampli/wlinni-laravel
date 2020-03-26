import Vue from "vue";
import Router from "vue-router";
import Test from "../views/Test";
import PreciosSuscripcion from "../views/PreciosSuscripcion";
import ListadoPublicacion from "../views/ListadoPublicacion";

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
            path: "/precios_suscripcion",
            name: "preciosSuscripcion",
            component: PreciosSuscripcion
        },
        {
            path: "/listado_publicacion",
            name: "listadoPublicacion",
            component: ListadoPublicacion
        }
    ]
});
