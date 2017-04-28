import axios from "axios"

export default class APIService {
  constructor(baseURL) {
    this.connection = axios.create({
      baseURL: baseURL
    })

    this.key = {
      api_key: process.env.REACT_APP_RAILS_KEY
    }
  }

  get(path, params) {
    return this.connection.get(path, {
        params: Object.assign(this.key, params || {})
      })
      .then(response => response)
      .catch(error => error)
  }
  
  post(path, body) {
    return this.connection.post(path, Object.assign(this.key, body || {}))
    .then(response => response)
    .catch(error => error)
  }
}

