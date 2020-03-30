import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";

// PRECIOS
import Precios from "../views/precios/Precios";

// PUBLICACIONES
import Publicaciones from "../views/publicaciones/Publicaciones";
import NuevaPublicacion from "../views/publicaciones/NuevaPublicacion";
import DetallePublicacion from "../views/publicaciones/DetallePublicacion";

// INMUEBLES
import Inmuebles from "../views/inmuebles/Inmuebles";

// PROBANDO
import amc2 from "../views/amc/amc2";

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
            path: "/test",
            name: "test",
            component: amc2
        },

        // PRECIOS
        {
            path: "/precios",
            name: "precios",
            component: Precios
        },

        // PUBLICACIONES

        {
            path: "/publicaciones",
            name: "publicaciones",
            component: Publicaciones
        },
        {
            path: "/publicaciones/nueva",
            name: "publicaciones_nueva",
            component: NuevaPublicacion
        },
        {
            path: "/publicaciones/detalle",
            name: "publicaciones_detalle",
            component: DetallePublicacion
        },

        // INMUEBLES
        {
            path: "/inmuebles",
            name: "inmuebles",
            component: Inmuebles
        }
    ]
});
