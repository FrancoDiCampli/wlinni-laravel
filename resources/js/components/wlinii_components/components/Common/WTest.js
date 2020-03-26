import Vue from "vue";



Vue.component("w-test", {
    props: {
        mapConfig: Object,
        apiKey: String,
    },

    template: `

       <div class="google-map" ref="googleMap"></div>
    `,

    computed: {



    }
});
