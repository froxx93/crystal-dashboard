import { $axios } from '~/utils/api'
import { normalizeKeys } from '~/utils/utils'

export interface Credentials {
  username: string
  password: string
}

type Role = 'ROLE_SUPER_ADMIN' | 'ROLE_ADMIN'

interface UserData {
  username: string
  token: string
  refreshToken: string
  roles: Role[]
  rolesToAssign: Role[]
}

interface AuthState extends UserData {}

const emptyState: AuthState = {
  username: '',
  token: '',
  refreshToken: '',
  roles: [],
  rolesToAssign: [],
}

export default {
  namespaced: true,
  state: JSON.parse(localStorage.getItem('userData') || 'null') || emptyState,
  getters: {
    getUserData: (state: AuthState): UserData => {
      return state
    },
    hasRole: (state: AuthState): boolean => {
      return state.roles.length > 0
    },
  },
  mutations: {
    updateUserData(state: any, userData: UserData) {
      state.token = userData.token
      state.refreshToken = userData.refreshToken
      state.roles = userData.roles
      state.rolesToAssign = userData.rolesToAssign

      $axios.setToken(`Bearer ${userData.token}`)

      // Update value in localStorage
      if (state !== emptyState) {
        localStorage.setItem('userData', JSON.stringify(state))
      } else {
        localStorage.removeItem('userData')
      }
    },
  },
  actions: {
    async login({ commit }: any, credentials: Credentials): Promise<UserData> {
      const resp: any = await $axios.$post('/login', credentials)
      const userData: UserData = {
        username: credentials.username,
        ...(normalizeKeys(resp) as any),
      }

      commit('updateUserData', userData)

      return userData
    },
    logout({ commit }: any): void {
      commit('updateUserData', emptyState)
    },
  },
}
