<template>
  <q-modal ref="layoutModal" :content-css="{minWidth: '80vw', minHeight: '80vh'}">
    <q-modal-layout>
      <q-toolbar slot="header">
        <q-btn flat @click="$refs.layoutModal.close()">
          <q-icon name="keyboard_arrow_left" />
        </q-btn>
        <q-toolbar-title>
          infos
        </q-toolbar-title>
      </q-toolbar>
  
      <div class="layout-padding ">
        <table class="q-table striped-odd bordered cell-separator" style="width:100%">
  
          <tbody>
            <tr v-if="address != null">
              <td class="text-left">Adress</td>
              <td class="text-left"> {{buidAddress(address)}}</td>
            </tr>
  
            <tr v-if="operator != null">
              <td class="text-left">Operator</td>
              <td class="text-left">{{operator.Title}}</td>
            </tr>
            <tr v-if="operator  != null">
              <td class="text-left">Website</td>
              <td class="text-left">{{operator.WebsiteURL}}</td>
            </tr>
            <tr v-if="operator  != null">
              <td class="text-left">Email</td>
              <td class="text-left">{{operator.ContactEmail}}</td>
            </tr>

          </tbody>
        </table>
        <q-btn style="margin-right: 5px; margin-top: 3px" class="float-right" color="primary" @click="guidageGPS(lat,lon)"> GPS</q-btn>
  
      </div>
  
      </div>
    </q-modal-layout>
  </q-modal>
</template>

<script>
import {
  Toast,
  Ripple,
  QBtn,
  QIcon,
  QModal,
  QModalLayout,
  QToolbar,
  QToolbarTitle,
  QSearch,
  QList,
  QItem,
  QItemSide,
  QItemMain
} from 'quasar'
export default {
  components: {
    QBtn,
    QIcon,
    QModal,
    QModalLayout,
    QToolbar,
    QToolbarTitle,
    QSearch,
    QList,
    QItem,
    QItemSide,
    QItemMain
  },
  data() {
    return {
      operator: null,
      address: null,
      lat: null,
      lon: null


    }
  },
  methods: {
    openInfos(osm) {
      console.log(osm.AddressInfo.Longitude)

      this.address = null
      this.operator = osm.OperatorInfo
      this.address = osm.AddressInfo
      this.lat = osm.AddressInfo.Latitude
      this.lon = osm.AddressInfo.Longitude


      this.$refs.layoutModal.open()
    },
    buidAddress(addr) {
      var result = ""
      if (addr.AddressLine1 != null) {
        result += addr.AddressLine1 + " "
      }
      if (addr.AddressLine2 != null) {
        result += addr.AddressLine2 + " "
      }
      if (addr.Postcode != null) {
        result += addr.Postcode + " "
      }
      if (addr.Town != null) {
        result += addr.Town + " "
      } 
      

      return result




    },
    guidageGPS(lat, lon) {
      window.open("http://maps.google.com/?q=" + lat + "," + lon, '_system')
    }
  }
}
</script>

<style>

</style>
