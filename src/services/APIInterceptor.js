import axios from 'axios'
import appRegistry from './AppRegistry'

class APIInterceptor {
  constructor (baseURL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}`) {
    this.baseURL = baseURL
    const token = appRegistry.storage.get('token')

    const config = {
      baseURL: this.baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
      }
    }

    this.api = axios.create(config)
  }


  get (url) {
    return this.api.get(url)
  }

  post (url, payload) {
    return this.api.post(url, payload)
  }
}

export { APIInterceptor }
export default new APIInterceptor()
