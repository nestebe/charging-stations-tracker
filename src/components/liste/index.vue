<template>
  <!-- if you want automatic padding use "layout-padding" class -->
 <div class="">
  
    <q-list highlight inset-separator>
  
      <q-item v-for="(osm, index) in $root.osm" :key="osm._id">
        <q-item-side icon="power" inverted color="grey-6" />
        <q-item-main>
          <q-item-tile label v-if="osm.AddressInfo != null">{{osm.AddressInfo.Title}}, {{osm.AddressInfo.Town}}</q-item-tile>
          <q-item-tile sublabel>{{osm.AddressInfo.Distance.toFixed(2) }} km</q-item-tile>
        </q-item-main>
        <q-item-side right icon="info" @click="openInfos(index)" />
      </q-item>
  
    </q-list>
  
    <!-- your content -->
  
    <q-inner-loading :visible="$root.loading">
      <q-spinner-gears size="50px" color="primary" />
    </q-inner-loading>
  
    <Infos ref="details"></Infos>
  
  </div>
</template>

<script>
import Infos from '../modules/infos'
import {
  QList,
  QScrollArea,
  QListHeader,
  QItem,
  QItemSeparator,
  QItemSide,
  QItemMain,
  QItemTile,
  QInnerLoading,
  QSpinnerGears
} from 'quasar'

export default {
  components: {
    QInnerLoading,
    QScrollArea,
    QSpinnerGears,
    QList,
    QListHeader,
    QItem,
    QItemSeparator,
    QItemSide,
    QItemMain,
    QItemTile,
    Infos
  },
  data() {
    return {
      message: "",
      osmListe:[]
    }
  },
  methods: {
    openInfos(id) {
      //load data store
      var vm = this

      vm.$refs.details.openInfos(vm.$root.osm[id])
    }
  },
  mounted() {
    




  }
}
</script>

<style>

</style>
