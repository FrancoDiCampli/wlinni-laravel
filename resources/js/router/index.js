import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";
import PreciosSuscripcion from "../views/PreciosSuscripcion";
import ListadoPublicacion from "../views/ListadoPublicacion";
import ListadoInmueble from "../views/ListadoInmueble";
import DetallePublicacion from "../views/DetallePublicacion";

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
        },
        {
            path: "/listado_publicacion",
            name: "listadoPublicacion",
            component: ListadoPublicacion
        },
        {
            path: "/listado_inmueble",
            name: "listadoInmueble",
            component: ListadoInmueble
        },
        {
            path: "/detalle_publicacion",
            name: "detallePublicacion",
            component: DetallePublicacion
        }
    ]
});
