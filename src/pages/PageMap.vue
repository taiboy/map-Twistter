<template>
   <q-page padding class="flex">
    <q-card style="flex:1">
      <l-map ref="myMap" @ready="onReady" @locationfound="onLocationFound" :zoom="zoom" :center="center">
        <l-control-layers position="topright"></l-control-layers>
        <l-tile-layer
            name='OpenStreetMap'
            visible=true
            url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            layer-type="base"></l-tile-layer>
        <l-tile-layer
            v-for="tileProvider in tileProviders"
            :key="tileProvider.name"
            :name="tileProvider.name"
            :visible="tileProvider.visible"
            :url="tileProvider.url"
            :attribution="tileProvider.attribution"
            layer-type="overlay"></l-tile-layer>
      </l-map>
    </q-card>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LControlLayers } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

export default {
  name: 'PageMap',
  components: {
    LMap,
    LTileLayer,
    LControlLayers
  },
  data () {
    return {
      zoom: 13,
      center: L.latLng(36, 140),
      tileProviders: [
        {
          name: '洪水浸水想定区域（想定最大規模）',
          visible: true,
          url: 'https://disaportaldata.gsi.go.jp/raster/01_flood_l2_shinsuishin_data/{z}/{x}/{y}.png',
          attribution: '国土地理院'
        },
        {
          name: '浸水継続時間（想定最大規模）',
          visible: false,
          url: 'https://disaportaldata.gsi.go.jp/raster/01_flood_l2_keizoku_data/{z}/{x}/{y}.png',
          attribution: '国土地理院'
        },
        {
          name: '土砂災害警戒区域（土石流）',
          visible: false,
          url: 'https://disaportaldata.gsi.go.jp/raster/05_dosekiryukeikaikuiki/{z}/{x}/{y}.png',
          attribution: '国土地理院'
        }
      ]
    }
  },
  methods: {
    onReady (mapObject) {
      mapObject.locate()
    },
    onLocationFound (location) {
      this.center = L.latLng(location.latitude, location.longitude)
    }
  }
}
</script>

<style scoped>

</style>
