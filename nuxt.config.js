import colors from 'vuetify/es5/util/colors'
require('dotenv').config()

const languages = require(`./data/languages.json`)
const countries = require(`./data/countries.json`)
const currentCountry = countries[process.env.NUXT_ENV_COUNTRY]
const countryLanguagesCodes = currentCountry.languages
const countryDefaultLanguage = currentCountry.default
const countryLanguages = languages.filter((language) =>
  countryLanguagesCodes.includes(language.code)
)

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    titleTemplate: '%s - ' + process.env.npm_package_name,
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
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
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    '@nuxtjs/markdownit',
    [
      'nuxt-i18n',
      {
        seo: false,
        baseUrl: 'https://my-nuxt-app.com',
        parsePages: false,
        // pages: {
        //   pricing: {
        //     en: '/pricing',
        //     ar: '/التسعير'
        //   }
        // },
        locales: countryLanguages,
        defaultLocale: countryDefaultLanguage,
        strategy: 'prefix_except_default',
        lazy: true,
        langDir: 'lang/',
        vueI18n: {
          fallbackLocale: countryDefaultLanguage,
          messages: {}
        }
      }
    ]
  ],

  // [optional] markdownit options
  // See https://github.com/markdown-it/markdown-it
  markdownit: {
    preset: 'default',
    linkify: true,
    breaks: true
  },

  /*
   ** Axios module configuration
   ** See https://axios.nuxtjs.org/options
   */
  axios: {},

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
