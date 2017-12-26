<template>
  <!-- Configure "view" prop for QLayout -->
  <q-layout ref="layout" reveal>
    <q-toolbar slot="header">
  
      <q-toolbar-title>
  
        Charging Stations
  
      </q-toolbar-title>
       <!--  <q-btn @click="goSettings()" flat round small>
        <q-icon name="settings" />
      </q-btn> -->
    </q-toolbar> 
  
    <q-tabs align="justify" slot="navigation">
      <q-route-tab slot="title" icon="list" to="/" replace hide="icon" label="List" e/>
      <q-route-tab slot="title" icon="map" to="/map" replace hide="icon" label="Map" />
    </q-tabs>
  

    <router-view />
  
    <!-- Footer
          <q-toolbar slot="footer">
            ...
          </q-toolbar>
          -->
  </q-layout>
</template>

<script>
import {
  QLayout,
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
  QScrollArea,
  Toast
} from 'quasar'
import { Dialog } from 'quasar'
export default {
  components: {
    QLayout,
    Toast,
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
    QScrollArea
  },
  data() {
    return {
    }
  },
  created() {
    /*   if(navigator.connection.type === Connection.NONE){
   
       }*/
  },

  update() {
    console.log("updated")
  },



  beforeMount() {

    var _self = this


    
        if (PROD) {
          if (AdMob) AdMob.createBanner({
            adId:"ca-app-pub-8747952408882266/2860494849",
            position: AdMob.AD_POSITION.BOTTOM_CENTER,
            autoShow: true,
            success: function () {
              console.log('fsuccessr');
            },
            error: function () {
              console.log('failed to create banner');
            }
          });
        }


  }
}
</script>

<style>

</style>
