<template>
    <!-- if you want automatic padding use "layout-padding" class -->
    <q-layout>
        <div class="layout-view">
            <div id="appd" style="height:80vh">
                <v-map ref="mymap" @l-dragend="updateMarkers(...arguments)" :zoom="zoom" :center="center" :options="options">
                    <v-tilelayer :url="url" :attribution="attribution"></v-tilelayer>
                    <v-marker :key="index" v-for="(osm, index) in markers" :lat-lng="[osm.AddressInfo.Latitude, osm.AddressInfo.Longitude]" @l-click="openInfos(index)"></v-marker>
                </v-map>
            </div>
    
            <Infos ref="details"></Infos>
        </div>
    </q-layout>
</template>

<script>
import { QBtn } from "quasar";
import Infos from "../modules/infos";
import axios from "axios";
import Service from "../../services";
export default {
  components: {
    Infos,

    QBtn
  },
  data() {
    return {
      markers: [],
      options: { minZoom: 10 },
      zoom: 14,
      center: [this.$root.lat, this.$root.lng],
      url: "http://{s}.tile.osm.org/{z}/{x}/{y}.png",
      attribution: ""
      //   marker: L.latLng(47.218938, -1.553772),
    };
  },
  methods: {
    async updateMarkers(e) {
      //   console.log(e.target.boxZoom._map._lastCenter.lat +" "+e.target.boxZoom._map._lastCenter.lng )
      var _self = this;
      console.log(e.target.boxZoom._map.getCenter());
      var center = e.target.boxZoom._map.getCenter();
      _self.markers = [];
      var service = new Service();
      _self.markers = await service.getBases(center.lat, center.lng);
    },
    openInfos(id) {
      var _self = this;
      this.$refs.details.openInfos(_self.markers[id]);
    }
  },
  mounted() {
    var _self = this;
    _self.markers = _self.$root.osm;
  }
};
</script>

<style>

</style>
