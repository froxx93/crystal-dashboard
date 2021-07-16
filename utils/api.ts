import { NuxtAxiosInstance } from '@nuxtjs/axios'

// eslint-disable-next-line import/no-mutable-exports
let $axios: NuxtAxiosInstance

export function initializeAxios(axiosInstance: NuxtAxiosInstance) {
  $axios = axiosInstance

  const token = JSON.parse(localStorage.getItem('userData') || 'null')?.token
  if (token) {
    $axios.setToken(`Bearer ${token}`)
  }
}

export { $axios }
