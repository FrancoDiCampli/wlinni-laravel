<template>
    <div>
        <w-parallax image="/images/bg.jpg" height="50"></w-parallax>
        <w-navbar>
            <w-top-bar>
                <w-icon :icon="'flag'"></w-icon>
            </w-top-bar>
        </w-navbar>
        <div class="card">
            <form>
                <w-input label="Nombre" v-model="name" color="secondary"></w-input>
                <p class="title bold primary-text">{{ name }}</p>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    data: () => ({
        name: null
    })
};
</script>

<style lang="scss" scoped>
.card {
    width: 525px;
    margin: auto;
}
</style>