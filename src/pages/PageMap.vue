<template>
   <q-page padding class="flex">
    <q-card style="flex:1">
      <l-map @ready="onReady" @locationfound="onLocationFound" :zoom="zoom" :center="center">
        <l-tile-layer :url="url" :attribution="attribution"></l-tile-layer>
      </l-map>
    </q-card>
  </q-page>
</template>

<script>
import { LMap, LTileLayer } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'PageMap',
  components: {
    LMap,
    LTileLayer
  },
  data () {
    return {
      zoom: 13,
      center: L.latLng(36, 140),
      url: 'http://{s}.tile.osm.org/{z}/{x}/{y}.png',
      attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }
  },
  methods: {
    onReady (mapObject) {
      mapObject.locate()
    },
    onLocationFound (location) {
      console.log(location)
    }
  }
}
</script>

<style scoped>

</style>
