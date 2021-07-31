module.exports = {
  apps: [
    {
      name: 'Crystal Dashboard',
      exec_mode: 'cluster',
      instances: 'max',
      script: '/root/.nvm/versions/node/v14.17.4/bin/nuxt',
      args: 'start',
    },
  ],
}
