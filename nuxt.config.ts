export default defineNuxtConfig({
  modules: [
    '@nuxt/image','@nuxtjs/sitemap'
  ],
  devtools: { enabled: true },
  app: {
    head: {
      title: "Waradu"
    }
  }
})
