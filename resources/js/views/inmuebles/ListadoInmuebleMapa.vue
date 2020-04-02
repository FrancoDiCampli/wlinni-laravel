<template>
  <div>
    <div class="inmuebles-container">
      <div class="flex flex-row justify-around gap-8">
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

        <div class="sm:w-full lg:w-9/12 px-6 bg-white rounded-lg p-10 mx-5">
          <div>
            <h1 class="title bold">Listado de Inmuebles</h1>

            <div class="map-container">
              <gmap-map
                ref="mapRef"
                :center="center"
                :zoom="12"
                :options="mapOptions"
                style="width:100%;  height: 600px;"
              >
                <gmap-marker
                  :key="index"
                  :icon="markerOptions"
                  v-for="(m, index) in markers"
                  :position="m.position"
                  @click="toggleInfoWindow(m,index)"
                ></gmap-marker>
                <gmap-info-window
                  :options="infoOptions"
                  :position="infoWindowPos"
                  :opened="infoWinOpen"
                  @closeclick="infoWinOpen=false"
                >
                  <!-- Si se puede poner un wcard mejor sino va ell html  -->
                  <w-card :image="card.image" style="width:220px;" :shadow="false">
                    <div class="caption">
                      <p>Desde</p>
                      <h1 class="body tertiary-text bold">{{card.precio}}</h1>
                      <p class="bold">{{card.dir}}</p>
                      <p class="xxs">{{card.description}}</p>
                      <div class="flex xxs justify-between mt-2">
                        <p>{{card.entrega}}</p>
                        <p>{{card.condicion}}</p>
                      </div>
                    </div>

                    <w-btn class="w-full" :dark="true" :rounded="true">Contactar</w-btn>
                  </w-card>
                  <!-- Esto es sin va el html que esta dentro del infoContent window  -->
                  <!-- <div v-html="infoContent"></div> -->
                </gmap-info-window>
              </gmap-map>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br />
  </div>
</template>

<script>
// import FiltroMapa from "./filtros/FiltrosMapa.vue";
import FiltroInmueble from "./FiltroInmueble.vue";

export default {
  data() {
    return {
      center: { lat: -12.1122095, lng: -77.047945 },
      markers: [
        {
          position: { lat: -12.1221005, lng: -77.0315953 },
          title: "Miraflores",
          image: "/img/departamentos/8.jpg",
          dir: "Calle los ficus Mz B lt. 10",
          description: " 19 unidades 1 a 3 dormitorio 45m a 97m techados",
          precio: "86,723",
          entrega: "Inmediata",
          condicion: "Preventa en planos"
        },
        {
          position: { lat: -12.1001099, lng: -77.0554858 },
          title: "San Isidro",
          image: "/img/departamentos/7.jpg",
          dir: "Calle los ficus Mz B lt. 10",
          description: " 19 unidades 1 a 3 dormitorio 45m a 97m techados",
          precio: "90,232",
          entrega: "Inmediata",
          condicion: "Preventa en planos"
        },
        {
          position: { lat: -12.1206998, lng: -77.0347257 },
          title: "Santiago de Surco",
          image: "/img/departamentos/6.jpg",
          dir: " Calle los ficus Mz B lt. 10",
          description: "19 unidades 1 a 3 dormitorio 45m a 97m techados",
          precio: "90,232",
          entrega: "Inmediata",
          condicion: "Preventa en planos"
        }
      ],
      places: [],
      currentPlace: null,
      mapOptions: {
        mapTypeControl: false
      },
      // iconos de los marcadores
      markerOptions: {
        url: "images/key-hole.png",
        size: { width: 20, height: 35, f: "px", b: "px" },
        scaledSize: { width: 15, height: 25, f: "px", b: "px" }
      },

      filtrar: false,
      infoContent: "",
      infoWindowPos: {
        lat: 0,
        lng: 0
      },
      infoWinOpen: false,
      currentMidx: null,

      infoOptions: {
        pixelOffset: {
          width: 0,
          height: -35
        }
      },
      card: {
        image: "/img/departamentos/6.jpg"
      }
    };
  },
  components: { FiltroInmueble },
  methods: {
    toggleInfoWindow: function(marker, idx) {
      this.infoWindowPos = marker.position;
      this.infoContent = this.getInfoWindowContent(marker);

      this.card = marker;

      //check if its the same marker that was selected if yes toggle
      if (this.currentMidx == idx) {
        this.infoWinOpen = !this.infoWinOpen;
      }
      //if different marker set infowindow to open and reset current marker index
      else {
        this.infoWinOpen = true;
        this.currentMidx = idx;
      }
    },
    getInfoWindowContent: function(marker) {
      return `<div style="width:200px;">
                <img src="${marker.image}" alt="depto 8" style="height:120px; width:0 auto;">
                <p class="bold">${marker.title}</p>
                <p>${marker.description}</p>
                <p>Comisión</p>
                <div class="flex flex-row justify-between my-5">
                    <p class="body bold">5%</p>
                    <p class="body bold tertiary-text">200</p>
                </div>
                        <router-link
                        to="/"
                        class="w-full secondary p-2  text-white uppercase rounded-full"
                        >Contactar</router-link>

            </div>`;
    }
  }
};
</script>

<style></style>
