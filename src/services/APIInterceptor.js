import axios from 'axios'

class APIInterceptor {
  constructor (baseURL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}`) {
    this.baseURL = baseURL

    const config = {
      baseURL: this.baseURL,
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
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
