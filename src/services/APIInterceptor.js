import axios from 'axios'
import mitt from 'mitt'
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
    this.api.interceptors.response.use(
      successRes => successRes,
      error => {
        if (error.response && error.response.status === 401) {
          APIInterceptor.events.emit('authorizationError', { err: error })
        }

        return Promise.reject(error)
      }
    )
  }

  static events = mitt()

  get (url) {
    return this.api.get(url)
  }

  post (url, payload) {
    return this.api.post(url, payload)
  }
}

export { APIInterceptor }
export default new APIInterceptor()
