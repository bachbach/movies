import axios from 'axios'

class APIInterceptor {
  constructor (baseURL = `${process.env.REACT_APP_API_URL}/${process.env.REACT_APP_API_VERSION}`) {
    this.baseURL = baseURL

    const config = {
      baseURL: this.baseURL,
      headers: {
        Accept: 'application/json',
      }
    }

    this.api = axios.create(config)
  }


  get (url) {
    return this.api.get(url)
  }
}

export { APIInterceptor }
export default new APIInterceptor()
