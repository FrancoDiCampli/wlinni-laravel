<template>
    <div ref="map"></div>
</template>

<script>
export default {
    name: "HereMap",
    data() {
        return {};
    },

    mounted() {
        // Initialize the platform object:
        var platform = new H.service.Platform({
            apikey: "aZ8yVZMqrBUavs5QX7Bqfax4FY8JdmETwgJTHey9DCs"
        });

        // Obtain the default map types from the platform object
        var maptypes = platform.createDefaultLayers();

        // Instantiate (and display) a map object:
        var map = new H.Map(
            document.getElementById("map"),
            maptypes.vector.normal.map,
            {
                zoom: 10,
                center: {
                    lat: -27.5751,
                    lng: -60.71716
                }
            }
        );
    }
};
</script>

<style scoped></style>