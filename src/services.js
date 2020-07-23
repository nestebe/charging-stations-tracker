
import axios from 'axios'

class Service {
  constructor() {
    this.api = 'https://api.openchargemap.io/v2/poi/'
  }
  // API openchargemap v2
  async getBases(lat, lng) {
    try {
      return (await axios.get(this.api + '?output=json&' + 'latitude=' + lat + '&longitude=' + lng + '&distance=100')).data
    } catch (err) {
      return []
    }
  }
}

export default Service
