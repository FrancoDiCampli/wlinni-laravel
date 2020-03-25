<template>
  <div>
    <div class="container">
      <div class="bg-img">
        <div class="contenedor w-11/12 lg:w-8/12 bg-white">
          <div>
            <h1>Registro</h1>
          </div>
          <div class>
            <h1
              class="text-xl text-brown lg:text-4xl font-bold mt-5 lg:mt-10"
            >Registro Satisfactorio!</h1>
            <h6 class="text-sm lg:text-lg font-bold">Sus datos fuerron registrados</h6>
            <img class="w-9/12 lg:w-7/12 mx-auto mb-10" src="/img/register.png" alt />
            <p
              class="lg:block my-10 text-xs lg:text-lg w-10/12 mx-auto"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

            <router-link
              to="/"
              class="uppercase brown text-white lg:py-5 lg:px-10 px-5 py-2 text-xs"
            >Volver al inicio</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.bg-img {
  background-image: url("/img/banners/3.png");
}
</style>
