<template>
  <!--
       AMC1 web y mobil
  -->
  <div>
    <div class="precios-container py-16">
      <w-card :shadow="false">
        <div class="w-full lg:w-11/12 mx-auto">
          <div class>
            <h1 class="subtitle-lg fan bold">Análisis de Mercado Comparativo (AMC)</h1>
            <p class="caption">Aplicación de analisis de precios</p>
            <p
              class="uppercase text-white primary px-2 my-5 lg:mt-5 w-1/3 lg:w-2/12 rounded-full text-center"
            >02 paso</p>
            <h1 class="subtitle-lg fan bold">Agregar Oferta Pública</h1>
            <div class="shadow w-full rounded-full default mt-5">
              <div class="secondary leading-none text-center rounded-full p-2" style="width: 55%"></div>
            </div>
          </div>

          <br />
          <!-- Cards de editar  -->
          <form action>
            <w-btn
              class="lg:hidden px-5"
              color="secondary"
              :dark="true"
              @click.prevent="filtrar = false"
            >filtrar</w-btn>
          </form>

          <br />
          <div class="lg:flex white-text mt-5">
            <div
              id="publicaciones"
              class="flex w-full justify-between tertiary rounded-lg p-5 lg:mr-2 mb-5"
            >
              <div>
                <h1 class="body bold">Publicaciones seleccionadas (3)</h1>
                <p class="caption">Seleccionadas</p>
              </div>
              <div>
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="pencil-alt"
                  class="h-12 svg-inline--fa fa-pencil-alt fa-w-16"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M497.9 142.1l-46.1 46.1c-4.7 4.7-12.3 4.7-17 0l-111-111c-4.7-4.7-4.7-12.3 0-17l46.1-46.1c18.7-18.7 49.1-18.7 67.9 0l60.1 60.1c18.8 18.7 18.8 49.1 0 67.9zM284.2 99.8L21.6 362.4.4 483.9c-2.9 16.4 11.4 30.6 27.8 27.8l121.5-21.3 262.6-262.6c4.7-4.7 4.7-12.3 0-17l-111-111c-4.8-4.7-12.4-4.7-17.1 0zM124.1 339.9c-5.5-5.5-5.5-14.3 0-19.8l154-154c5.5-5.5 14.3-5.5 19.8 0s5.5 14.3 0 19.8l-154 154c-5.5 5.5-14.3 5.5-19.8 0zM88 424h48v36.3l-64.5 11.3-31.1-31.1L51.7 376H88v48z"
                  />
                </svg>
                <p class="caption mt-5">Editar</p>
              </div>
            </div>
            <div id="ingreso" class="w-full primary rounded-lg p-5 lg:ml-2 mb-5">
              <div class="body bold">Ingeso Manual</div>
              <p class="caption">Insertar datos para el cálculo</p>
            </div>
          </div>

          <!-- Filtro y publicaciones  -->
          <div class="inmuebles-container">
            <div class="flex flex-row justify-around">
              <div class="w-3/12 hidden lg:block">
                <div>
                  <w-card :shadow="false">
                    <template slot="header">
                      <p class="caption bold white-text">FILTROS</p>
                    </template>

                    <FiltroInmueble></FiltroInmueble>
                  </w-card>
                </div>
              </div>
              <div class="w-full" v-if="filtrar">
                <div class="filter">
                  <div class="filter-header">filtros</div>
                  <div class="filter-body">
                    <FiltroInmueble></FiltroInmueble>
                    <w-btn
                      :fullwidth="true"
                      color="secondary"
                      :dark="true"
                      @click="filtrar = false"
                    >filtrar</w-btn>
                  </div>
                </div>
              </div>
              <div class="w-full" v-else>
                <w-card :shadow="false">
                  <div class="flex flex-row justify-between flex-wrap">
                    <div class="sm:w-full lg:w-1/3 p-3" v-for="(card, i) in cards" :key="i">
                      <w-card :image="card.image" :value="card.selected">
                        <template slot="image">
                          <p class="bold">{{ card.direccion }}</p>
                          <br />
                          <p>{{ card.descripcion }}</p>
                        </template>
                        <template slot="state">
                          <p class="white-text">{{ card.tipo }}</p>
                        </template>
                        <p class="bold">{{ card.title }}</p>
                        <p>{{ card.body }}</p>
                        <p>Comisión</p>
                        <div class="flex flex-row justify-between">
                          <p class="body bold">{{ card.comision }}</p>
                          <p class="body bold tertiary-text">{{ card.mes }}</p>
                        </div>

                        <template slot="footer">
                          <div class="flex flex-row justify-between">
                            <div class="flex flex-row justify-between">
                              <div class="info-item">
                                <w-icon icon="room-solid" h="12px"></w-icon>
                                <p class="white-text">
                                  {{
                                  card.info
                                  .habitaciones
                                  }}
                                </p>
                              </div>
                              <div class="info-item">
                                <w-icon icon="bath-solid" h="15px"></w-icon>
                                <p class="white-text">{{ card.info.baños }}</p>
                              </div>
                              <div class="info-item">
                                <w-icon icon="parking-solid" h="12px"></w-icon>
                                <p class="white-text">
                                  {{
                                  card.info
                                  .estacionamiento
                                  }}
                                </p>
                              </div>
                            </div>
                            <div class="info-item">
                              <w-icon icon="size" h="15px"></w-icon>
                              <p class="white-text">{{ card.info.tamaño }}</p>
                            </div>
                          </div>
                        </template>
                      </w-card>
                    </div>
                  </div>
                  <br />
                </w-card>
              </div>
            </div>
          </div>

          <div class="lg:flex justify-end mt-10">
            <w-btn
              class="bold w-11/12 lg:w-1/3"
              :large="true"
              :dark="true"
              color="primary"
            >siguiente</w-btn>
          </div>
        </div>
      </w-card>
    </div>
  </div>
</template>

<script>
import FiltroInmueble from "../inmuebles/FiltroInmueble";
export default {
  data() {
    return {
      checked: true,
      windowWidth: window.innerWidth,
      select: null,
      form: {},
      filtrar: false,
      cards: [
        {
          tipo: "Alquiler",
          image: "/images/departamentos/1.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: true,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        },
        {
          tipo: "En Venta",
          image: "/images/departamentos/2.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: false,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        },
        {
          tipo: "En Venta",
          image: "/images/departamentos/3.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: false,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        },
        {
          tipo: "En Venta",
          image: "/images/departamentos/4.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: false,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        },
        {
          tipo: "En Venta",
          image: "/images/departamentos/5.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: false,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        },
        {
          tipo: "En Venta",
          image: "/images/departamentos/6.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: false,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        },
        {
          tipo: "En Venta",
          image: "/images/departamentos/7.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: false,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        },
        {
          tipo: "En Venta",
          image: "/images/departamentos/8.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: false,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        },
        {
          tipo: "En Venta",
          image: "/images/departamentos/9.jpg",
          title: "958 Calle Montreal",
          body: "Av.montreal",
          comision: "5%",
          mes: "S/ 86,723",
          direccion: "BUILT-UP-65 SQ FT LAND SIZE-110 SQ FT",
          selected: false,
          descripcion:
            " Casa frente a un grande parque con juegos para niños, lugares para hacer ejercicios y otros.",
          info: {
            habitaciones: 3,
            baños: 2,
            estacionamiento: 2,
            tamaño: "120m"
          }
        }
      ]
    };
  },
  components: {
    FiltroInmueble
  },

  mounted() {
    window.addEventListener("resize", () => {
      this.windowWidth = window.innerWidth;
    });
  },

  methods: {
    setOperation(op) {
      this.form.operacion = op;
    },
    setCuality(op) {
      this.form.cuality = op;
    },
    setDetails(op) {
      this.form.details = op;
    },
    setConservation(op) {
      this.form.conservation = op;
    },
    setLocation(op) {
      this.form.location = op;
    },

    showForm() {
      console.log(this.form);
    }
  }
};
</script>

<style lang="scss">
.bn {
  border: 1px solid black;
}
.fan {
  font-size: 28px;
}
.precios-container {
  width: 90%;
  margin: auto;
}

@media (max-width: 764px) {
  .precios-container {
    width: 95%;
  }
}
</style>
