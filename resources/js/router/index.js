import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home";

// AUTH
import Login from "../views/auth/Login";
import Register from "../views/auth/Register";
import RegisterSuccessful from "../views/auth/RegisterSuccessful";

// PRECIOS
import Precios from "../views/precios/Precios";

// PUBLICACIONES
import Publicaciones from "../views/publicaciones/Publicaciones";
import NuevaPublicacion from "../views/publicaciones/NuevaPublicacion";
import DetallePublicacion from "../views/publicaciones/DetallePublicacion";

// INMUEBLES
import Inmuebles from "../views/inmuebles/Inmuebles";
import InmueblesMapa from "../views/inmuebles/ListadoInmuebleMapa";

// NOTIFICACIONES
import Notificaciones from "../views/notificaciones/Notificaciones";

// AMC
import AMC1 from "../views/amc/amc1";
import AMC2 from "../views/amc/amc2";
import AMC4 from "../views/amc/amc4";
// Brocker
import Brocker from "../views/brocker/brocker";
// Agente
import Agente from "../views/agentes/Agente";

Vue.use(Router);

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
        },

        // AUTH
        {
            path: "/login",
            name: "login",
            component: Login,
        },
        {
            path: "/register",
            name: "register",
            component: Register,
        },
        {
            path: "/register/successful",
            name: "register_successful",
            component: RegisterSuccessful,
        },

        // PRECIOS
        {
            path: "/precios",
            name: "precios",
            component: Precios,
        },

        // PUBLICACIONES

        {
            path: "/publicaciones",
            name: "publicaciones",
            component: Publicaciones,
        },
        {
            path: "/publicaciones/nueva",
            name: "publicaciones_nueva",
            component: NuevaPublicacion,
        },
        {
            path: "/publicaciones/detalle",
            name: "publicaciones_detalle",
            component: DetallePublicacion,
        },

        // INMUEBLES
        {
            path: "/inmuebles",
            name: "inmuebles",
            component: Inmuebles,
        },
        {
            path: "/inmuebles/mapa",
            name: "inmuebles_mapa",
            component: InmueblesMapa,
        },

        // NOTIFICACIONES
        {
            path: "/notificaciones",
            name: "notificaciones",
            component: Notificaciones,
        },
        // AMC
        {
            path: "/amc1",
            name: "amc1",
            component: AMC1,
        },
        {
            path: "/amc2",
            name: "amc2",
            component: AMC2,
        },
        {
            path: "/amc4",
            name: "amc4",
            component: AMC4,
        },
        // Brocker
        {
            path: "/brocker",
            name: "brocker",
            component: Brocker,
        },
        // Agente
        {
            path: "/agente",
            name: "agente",
            component: Agente,
        },
    ],
});
