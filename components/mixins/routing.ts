import Vue from 'vue'

export const handleLoginStatus = Vue.extend({
  created() {
    this.handleLoginStatus()
  },
  updated() {
    this.handleLoginStatus()
  },
  methods: {
    handleLoginStatus(): void {
      const vm = this as any
      // redirect if needed
      const hasRole = vm.$store.getters['auth/hasRole']
      const routeIsLogin = vm.$route.name === 'login'
      if (hasRole && routeIsLogin) {
        const routeName =
          window.localStorage.getItem('actuallyCalledRoute') || 'index'
        vm.$router.push({ name: routeName })
        window.localStorage.removeItem('actuallyCalledRoute')
      } else if (!hasRole && !routeIsLogin) {
        window.localStorage.setItem('actuallyCalledRoute', vm.$route.name || '')
        vm.$router.replace({ name: 'login' })
      }
    },
  },
})
