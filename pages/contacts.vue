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
import loadMarkdown from '~/utils/load-markdown'
export default {
  async asyncData({ params, app }) {
    return {
      block1: await loadMarkdown({
        locale: app.i18n.locale,
        country: process.env.NUXT_ENV_COUNTRY,
        folder: 'contacts',
        filename: 'block1'
      }),
      block2: await loadMarkdown({
        locale: app.i18n.locale,
        country: process.env.NUXT_ENV_COUNTRY,
        folder: 'contacts',
        filename: 'block2'
      })
    }
  }
}

// export default {
//   asyncData({ params, app }) {
//     return {
//       block1: require(`../data/cms-blocks/${app.i18n.locale}/${process.env.NUXT_ENV_COUNTRY}/contacts/block1.md`)
//         .default,
//       block2: require(`../data/cms-blocks/${app.i18n.locale}/${process.env.NUXT_ENV_COUNTRY}/contacts/block2.md`)
//         .default
//     }
//   }
// }
</script>
