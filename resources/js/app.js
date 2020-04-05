import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
window.axios = require("axios");
import "./components/wlinii_components";

const VueGoogleMaps = require("vue2-google-maps");
Vue.use(VueGoogleMaps, {
    load: {
        //pago
        key: "AIzaSyA43rPJ1Lt5zxs3KABtJiq9xh4yANAkYUw",
        // gratis
        // key: "AIzaSyAXlj8mkvRRg6KTVesim7xcM8CcceMfcAc",
        libraries: "places",
    },
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function (h) {
        return h(App);
    },
}).$mount("#app");
