<template>
  <div>
    <div v-html="block" />
  </div>
</template>

<script>
import loadMarkdown from '~/utils/load-markdown'
export default {
  async asyncData({ params, app }) {
    return {
      block: await loadMarkdown({
        locale: app.i18n.locale,
        country: process.env.NUXT_ENV_COUNTRY,
        filename: 'terms-and-conditions'
      })
    }
  }
}
</script>
