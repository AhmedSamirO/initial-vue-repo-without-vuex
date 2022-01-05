import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import JwtService from '@/services/jwt.service'

const ApiService = {
  init () {
    Vue.use(VueAxios, axios)
    Vue.axios.defaults.baseURL = process.env.VUE_APP_API_URL
    Vue.axios.defaults.headers.common[
      "Access-Control-Allow-Origin"
    ] = '*'
    Vue.axios.defaults.headers.common[
      "Content-Type"
    ] = 'text/plain'
  },

  setHeader () {
    Vue.axios.defaults.headers.common[
      "Authorization"
    ] = `bearer ${JwtService.getToken()}`
  },

  setHeaderLang (lang) {
    Vue.axios.defaults.headers.common["lang"] = lang
  },

  query (resource, params) {
    return Vue.axios.get(resource, { params: params })
  },

  get (resource) {
    return Vue.axios.get(`${resource}`)
  },

  post (resource, params) {
    return Vue.axios.post(`${resource}`, params)
  },

  update (resource, slug, params) {
    return Vue.axios.put(`${resource}/${slug}`, params)
  },

  put (resource, params) {
    return Vue.axios.put(`${resource}`, params)
  },

  delete (resource) {
    return Vue.axios.delete(resource).catch(error => {
      throw new Error(`[RWV] ApiService ${error}`)
    })
  }
}

export default ApiService

