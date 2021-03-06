import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
window.axios = require("axios");
import "./components/wlinii_components";

// import * as VueGoogleMaps from 'vue2-google-maps'
const VueGoogleMaps = require("vue2-google-maps");
Vue.use(VueGoogleMaps, {
    load: {
        key: "",
        libraries: "places"
    }
});

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: function(h) {
        return h(App);
    }
}).$mount("#app");
