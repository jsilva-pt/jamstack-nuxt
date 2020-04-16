<template>
  <div>
    <div v-html="block" />
  </div>
</template>

<script>
export default {
  asyncData({ params, app }) {
    return {
      block: require(`../data/cms-blocks/${app.i18n.locale}/${process.env.NUXT_ENV_COUNTRY}/terms-and-conditions.md`)
        .default
    }
  }
}
</script>
