<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      app
      temporary
      class="hidden-md-and-up"
    >
      <v-list>
        <template v-for="(item, i) in menu">
          <v-subheader v-if="!item.to" :key="i">{{ item.title }}</v-subheader>
          <v-list-item v-else :key="i" :to="item.to" router exact>
            <v-list-item-content>
              <v-list-item-title v-text="item.name" />
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar fixed app>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click.stop="drawer = !drawer"
      />
      <v-toolbar-title
        @click="$router.push({ name: `index___${$i18n.locale}` })"
        v-text="title"
      />
      <v-spacer />
      <v-btn
        v-for="(item, index) in menu"
        :key="index"
        text
        :to="item.to"
        class="hidden-sm-and-down"
      >
        {{ item.name }}
      </v-btn>
      <v-menu transition="slide-y-transition" bottom>
        <template v-slot:activator="{ on }">
          <v-btn text v-on="on">
            {{ currentLocaleData.name }}
          </v-btn>
        </template>
        <v-list>
          <v-list-item
            v-for="locale in $i18n.locales"
            :key="locale.code"
            :to="switchLocalePath(locale.code)"
            @click="setCurrentLanguageSettings(locale)"
          >
            <v-list-item-title>{{ locale.name }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
    <v-content>
      <v-container>
        <nuxt />
      </v-container>
    </v-content>
    <v-footer :fixed="fixed" app>
      <span>&copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  middleware: 'languages',
  data() {
    return {
      drawer: false,
      fixed: false,
      title: 'JAMstack experience',
      currentLocaleData: null
    }
  },
  computed: {
    menu() {
      return [
        {
          name: this.$t('pricing'),
          to: {
            name: `pricing___${this.$i18n.locale}`
          }
        },
        {
          name: this.$t('contacts'),
          to: {
            name: `contacts___${this.$i18n.locale}`
          }
        },
        {
          name: this.$t('terms_and_conditions'),
          to: {
            name: `terms-and-conditions___${this.$i18n.locale}`
          }
        }
      ]
    }
  },
  created() {
    this.currentLocaleData = this.$i18n.locales.find(
      (el) => el.code === this.$i18n.locale
    )
    this.setCurrentLanguageSettings(this.currentLocaleData)
  },
  methods: {
    setCurrentLanguageSettings(locale) {
      this.$vuetify.rtl = locale?.rtl
    }
  },
  head() {
    return this.$nuxtI18nSeo()
  }
}
</script>
