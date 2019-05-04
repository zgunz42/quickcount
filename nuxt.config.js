const pkg = require('./package')

module.exports = {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: pkg.name,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },

  /*
   ** Global CSS
   */
  css: [],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://bootstrap-vue.js.org/docs/
    'bootstrap-vue/nuxt',
    '@nuxtjs/pwa',
    [
      'nuxt-fire',
      {
        useOnly: [
          'auth',
          'firestore',
          'functions',
          'storage',
          'realtimeDb',
          'messaging'
        ],
        customEnv: false,
        enableFirestorePersistence: false,
        config: {
          development: {
            apiKey: 'AIzaSyDF1JKpnsF3tZxVlT5eBV3SNL1ShKmIx-E',
            authDomain: 'quickcount-b10k2b.firebaseapp.com',
            databaseURL: 'https://quickcount-b10k2b.firebaseio.com',
            projectId: 'quickcount-b10k2b',
            storageBucket: 'quickcount-b10k2b.appspot.com',
            messagingSenderId: '710326215281'
          },
          production: {
            apiKey: 'AIzaSyDF1JKpnsF3tZxVlT5eBV3SNL1ShKmIx-E',
            authDomain: 'quickcount-b10k2b.firebaseapp.com',
            databaseURL: 'https://quickcount-b10k2b.firebaseio.com',
            projectId: 'quickcount-b10k2b',
            storageBucket: 'quickcount-b10k2b.appspot.com',
            messagingSenderId: '710326215281'
          }
        }
      }
    ]
  ],
  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      // Run ESLint on save
      if (ctx.isDev && ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
