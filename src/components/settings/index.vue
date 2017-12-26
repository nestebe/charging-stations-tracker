<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout>
    <q-toolbar slot="header">

        <q-btn @click="$router.go(-1)" flat round small>
    <q-icon name="chevron_left" />

      </q-btn>

      <q-toolbar-title>
        Settings
      </q-toolbar-title>


    </q-toolbar>
  <div class="layout-padding">
    <!-- your content -->
   
    <q-toggle v-model="checked" label="Toggle Label" />
  <p class="caption">Rayon recherche (km):</p>
<q-slider
  v-model="selectedValue"
  :min="0"
  :max="100"
  :step="5"
  label
  snap
/>
  </div>

  </q-layout>
</template>

<script>
import {
  QLayout,
  QToggle,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QTabs,
  QRouteTab,
  QBtn,
  QIcon,
  QItemSide,
  QItemMain,
  QSideLink,
  QListHeader,
  QSlider,
  QScrollArea
} from 'quasar'
export default {
    components: {
    QLayout,
    QToggle,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QTabs,
    QRouteTab,
    QBtn,
    QIcon,
    QItemSide,
    QItemMain,
    QSideLink,
    QListHeader,
     QSlider,
    QScrollArea
  },
  data () {
    return {selectedValue:10}
  },
  methods:{
    goSettings(){
      this.$router.push({path: '/settings'})

    }
  }
}
</script>

<style>
</style>
