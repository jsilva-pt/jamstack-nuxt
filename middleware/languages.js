export default function({ store }) {
  if (store.state.languages.length === 0) {
    const languages = require(`../database/languages.json`)
    const countries = require(`../database/countries.json`)
    const countryLanguages = countries[process.env.NUXT_ENV_COUNTRY].languages

    const payload = languages.filter((language) =>
      countryLanguages.includes(language.code)
    )

    store.commit('SET_LANGUAGES', payload)
  }
}
