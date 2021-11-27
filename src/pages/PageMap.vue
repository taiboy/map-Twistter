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
        <l-geo-json
          :geojson="geojson"
          :options="options"
          :options-style="styleFunction"
        ></l-geo-json>
      </l-map>
    </q-card>
  </q-page>
</template>

<script>
import { LMap, LTileLayer, LControlLayers, LGeoJson } from 'vue2-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import axios from 'axios'

export default {
  name: 'PageMap',
  components: {
    LMap,
    LTileLayer,
    LControlLayers,
    LGeoJson
  },
  data () {
    return {
      zoom: 13,
      center: L.latLng(36, 140),
      geojson: null,
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
  computed: {
    options () {
      return {
        onEachFeature: this.onEachFeatureFunction
      }
    },
    styleFunction () {
      const fillColor = this.fillColor // important! need touch fillColor in computed for re-calculate when change fillColor
      return () => {
        return {
          weight: 2,
          color: '#ECEFF1',
          opacity: 1,
          fillColor: fillColor,
          fillOpacity: 1
        }
      }
    },
    onEachFeatureFunction () {
      if (!this.enableTooltip) {
        return () => {}
      }
      return (feature, layer) => {
        layer.bindTooltip(
          '<div>code:' +
            feature.properties.code +
            '</div><div>nom: ' +
            feature.properties.nom +
            '</div>',
          { permanent: false, sticky: true }
        )
      }
    }
  },
  methods: {
    onReady (mapObject) {
      mapObject.locate()
    },
    onLocationFound (location) {
      this.center = L.latLng(location.latitude, location.longitude)
      axios.get('https://www.j-shis.bosai.go.jp/map/api/pshm/Y2021/AVR/TTL_MTTL/meshinfo.geojson?position=' + location.longitude + ',' + location.latitude + '&epsg=4301')
        .then(response => (this.geojson = response))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>

</style>
