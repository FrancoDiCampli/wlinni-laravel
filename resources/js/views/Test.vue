<template>
  <div class>
    <div class="bg-gray-300 flex justify-around p-5">
      <div id="filter" class="w-3/12">
        <w-card>
          <template slot="header">
            <h1
              class="text-white uppercase text-center caption tracking-wider bold"
            >Filtros aplicados</h1>
          </template>

          <div id="filtros" class="flex flex-wrap m-0 p-0">
            <div
              v-for="filter in filters"
              :key="filter"
              class="text-center secondary text-white px-5 rounded-full m-2"
            >
              {{filter}}
              <button @click="unset(filter)">X</button>
            </div>
          </div>
          <section class="w-full mx-auto">
            <!-- Operaciones  -->
            <article>
              <div class="flex justify-between p-5">
                <h1 class="uppercase text-lg font-semibold">Operaciones</h1>
                <div>
                  <a href @click.prevent="shown=!shown">
                    <img
                      :class="shown ? 'deployed' : 'undeployed'"
                      class="h-5"
                      src="/images/arrow-up.png"
                      alt
                    />
                  </a>
                </div>
              </div>

              <div :class="shown ? ' in' : ' out'" class="bg-gray-300 mx-auto px-10 py-5">
                <button
                  @click.prevent="set(operacion)"
                  v-for="operacion in operaciones"
                  :key="operacion"
                  class="outline-none block py-3"
                >{{operacion}}</button>
              </div>
            </article>
            <!-- Publicaciones  -->
            <article>
              <div class="flex justify-between p-5">
                <h1 class="uppercase text-lg font-semibold">Publicaciones</h1>
                <div>
                  <a href @click.prevent="shown=!shown">
                    <img
                      :class="shown ? 'deployed' : 'undeployed'"
                      class="h-5"
                      src="/images/arrow-up.png"
                      alt
                    />
                  </a>
                </div>
              </div>

              <div :class="shown ? ' in' : ' out'" class="bg-gray-300 mx-auto px-10 py-5">
                <button
                  @click.prevent="set(publicacion)"
                  v-for="publicacion in publicaciones"
                  :key="publicacion"
                  class="outline-none block py-3"
                >{{publicacion}}</button>
              </div>
            </article>
          </section>
        </w-card>
      </div>
      <div id="map" class="bg-white w-7/12 rounded-lg p-10">
        <h1 class="title bold">Listado de Inmuebles</h1>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shown: true,
      filters: [],
      operaciones: ["Venta", "Alquiler", "Traspaso"],
      publicaciones: ["Casas", "Alquileres", "Oficinas"]
    };
  },
  methods: {
    set(op) {
      this.filters.push(op);
    },
    unset(op) {
      const i = this.filters.indexOf(op);
      this.filters.splice(i, 1);
    }
  }
};
</script>

<style>
.container {
  height: 500px;
}
.in {
  visibility: visible;
  position: relative;
  opacity: 1;
  transition: visibility 0s linear 0s, opacity 300ms;
}
.out {
  visibility: hidden;
  position: absolute;
  animation: 1s fadeIn;
  opacity: 0;
  transition: visibility 0s linear 300ms, opacity 300ms;
}
.undeployed {
  transform: rotate(360deg);
  transition: 500ms;
  transition-duration: 1s;
}
.deployed {
  transform: rotate(180deg);
  transition: 500ms;
}
</style>
