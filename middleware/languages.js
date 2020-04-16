export default function({ store }) {
  // Avoid to request API (in this case json files :P ) to many times
  if (store.state.languages.length === 0) {
    const languages = require(`../data/languages.json`)
    const countries = require(`../data/countries.json`)
    const countryLanguagesCodes =
      countries[process.env.NUXT_ENV_COUNTRY].languages
    const countryLanguages = languages.filter((language) =>
      countryLanguagesCodes.includes(language.code)
    )

    store.commit('SET_LANGUAGES', countryLanguages)
  }
}
