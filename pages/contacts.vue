<template>
  <div>
    <div v-html="block1" />
    <section>
      <h1>Static Block</h1>
      <p>... when we have sections that never change ...</p>
    </section>
    <div v-html="block2" />
  </div>
</template>

<script>
export default {
  asyncData({ params, app }) {
    return {
      block1: require(`../static/blocks/${app.i18n.locale}/${process.env.NUXT_ENV_COUNTRY}/contacts/block1.md`)
        .default,
      block2: require(`../static/blocks/${app.i18n.locale}/${process.env.NUXT_ENV_COUNTRY}/contacts/block2.md`)
        .default
    }
  }
}
</script>
