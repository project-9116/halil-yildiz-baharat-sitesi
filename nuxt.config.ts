// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image", "nuxt-icon"],
  css: ["~/assets/scss/theme.scss"],

  build: {
    // loaders: {
    //   scss: {
    //     additionalData: '@import "~/assets/styles/variables.scss";',
    //   },
    // },
  },
});
