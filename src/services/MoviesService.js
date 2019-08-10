import APIInterceptor from './APIInterceptor'

export default class MoviesService {
  constructor (api = APIInterceptor) {
    this.api = api
  }

  getMovies (query = '') {
    return this.api.get(`/movies?${query}`)
  }
}
