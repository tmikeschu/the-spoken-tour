// @flow
import axios from "axios"

export default class APIService {

  connection: Function
  key: {}
  constructor(baseURL: string) {
    this.connection = axios.create({
      baseURL: baseURL
    })

    this.key = {
      api_key: process.env.REACT_APP_RAILS_KEY
    }
  }

  get = (path: string, params: {}) => (
    this.connection.get(path, {
        params: Object.assign(this.key, params || {})
    })
    .then(response => response)
    .catch(error => error)
  )
  
  post = (path: string, body: {}) => (
    this.connection.post(path, Object.assign(this.key, body || {}))
    .then(response => response)
    .catch(error => error)
  )
}

