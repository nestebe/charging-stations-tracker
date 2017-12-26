
import axios from 'axios'

class Service {
  constructor() {
    this.api = 'https://api.openchargemap.io/v2/poi/'
  }
  // API openchargemap v2
  async getBases(lat, lng) {
    var _self = this

    return axios.get(_self.api + '?output=json&' + 'latitude=' + lat + '&longitude=' + lng + '&distance=100')
      .then(response => {
        return response.data
      })
      .catch(e => {
        return []
      })
  }
}

export default Service
