<template>
    <div class="container m-auto">
        <w-navbar>
            <w-top-bar>
                <w-icon icon="flag" h="20px"></w-icon>
            </w-top-bar>
        </w-navbar>

        <w-parallax image="/images/bg.jpg" height="50">
            <div class="main-content">
                <div class="title-content">
                    <h1 class="title">
                        Profesionales inmobiliarios dedicados a usted
                    </h1>
                </div>
                <div class="card-content">
                    <div class="temporary-card"></div>
                </div>
            </div>
        </w-parallax>
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
