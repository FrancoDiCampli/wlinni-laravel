<template>
    <div class="container m-auto">
        <div>
            <!-- <HereMap /> -->
        </div>
    </div>
</template>

<script>
import HereMap from "./HereMap.vue";

export default {
    data: () => ({
        name: null
    }),

    components: {
        HereMap
    }
};
</script>

<style lang="scss" scoped>
.card {
    width: 525px;
    margin: auto;
}
</style>
