
import axios from 'axios'

class Service {
  constructor () {
    this.api = 'https://api.openchargemap.io/v2/poi/'
  }
    // API v2
  async getBases (base, lat, lng, limit) {
    var _self = this

    return axios.get(_self.api +'?output=json&' + 'latitude=' + lat + '&longitude=' + lng + '&distance=100')
            .then(response => {
              return response.data
            })
            .catch(e => {
              return []
            })
  }
}

export default Service
