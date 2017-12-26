// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

// Uncomment the following lines if you need IE11/Edge support
// require(`quasar/dist/quasar.ie`)
// require(`quasar/dist/quasar.ie.${__THEME}.css`)

import Vue from 'vue'
import Vue2Leaflet from 'vue2-leaflet'
import Quasar from 'quasar'
import router from './router'


Vue.component('v-map', Vue2Leaflet.Map)
Vue.component('v-tilelayer', Vue2Leaflet.TileLayer)
Vue.component('v-marker', Vue2Leaflet.Marker)
Vue.config.productionTip = false
Vue.use(Quasar) // Install Quasar Framework

if (__THEME === 'mat') {
  require('quasar-extras/roboto-font')
}
import 'quasar-extras/material-icons'
// import 'quasar-extras/ionicons'
// import 'quasar-extras/fontawesome'
// import 'quasar-extras/animate'
import Service from 'services'

import { Dialog } from 'quasar'
Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    render: h => h(require('./App')),
    data () {
      return {
        lat: 48.864716,
        lng: 2.349014,
        loading: true,
        osm: null

      }
    },
    methods: {

      async  geolocSuccess (position) {
        var _self = this
        console.log('geolocSuccess' + position.coords.latitude + ' - ' + position.coords.longitude)
        _self.lat = position.coords.latitude
        _self.lng = position.coords.longitude
        var service = new Service()
        _self.osm = await service.getBases( _self.lat, _self.lng)
        _self.loading = false
      },
      async geolocError () {
        var _self = this
        console.log('geoloc error')
        //  alert('geoloc error')
        var service = new Service()
        _self.osm = await service.getBases(_self.lat, _self.lng)
        console.log(_self.osm)
        _self.loading = false
      },
      getPosition () {
        var _self = this
        //   alert('getposition')
        navigator.geolocation.getCurrentPosition(_self.geolocSuccess, _self.geolocError)
      }

    },
    created () {
      var _self = this

      if (PROD) {
        if (navigator.connection.type === Connection.NONE) {
          Dialog.create({
            title: 'Warning',
            message: 'Internet connection is required',

            buttons: [
              {
                preventClose: true,
                label: 'Retry',
                handler (data, close) {
                  if (navigator.connection.type != Connection.NONE) {
                    close()
                    _self.getPosition()
                  }
                }
              }
            ]
          })
        }
        else {
          _self.getPosition()
        }
      }
      else {
        _self.getPosition()
      }
    }

  })
})
