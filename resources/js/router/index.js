import Vue from "vue";
import Router from "vue-router";
<<<<<<< HEAD
import Test from "../views/Test";
=======
import Home from "../views/Home";
import PreciosSuscripcion from "../views/PreciosSuscripcion";
import ListadoPublicacion from "../views/ListadoPublicacion";
>>>>>>> origin/german

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
<<<<<<< HEAD
            name: "test",
            component: Test
=======
            name: "home",
            component: Home
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
>>>>>>> origin/german
        }
    ]
});
