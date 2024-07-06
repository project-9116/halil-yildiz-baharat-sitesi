// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  modules: ["@nuxt/image", "@nuxt/icon"],
  css: ["~/assets/scss/theme.scss"],

  app: {
    pageTransition: { name: "page", mode: "out-in" },
  },

  icon: {
    size: "24px",
    class: "icon",
    aliases: {
      phone: "game-icons:rotary-phone",
      products: "game-icons:cool-spices",
      salt: "fluent-emoji-high-contrast:salt",
      left: "material-symbols-light:swipe-left-outline-rounded",
      right: "material-symbols-light:swipe-right-outline-rounded",
      hamburger:
        "streamline:interface-setting-menu-parallel-hamburger-circle-navigation-parallel-hamburger-buttonmenu-circle",
    },
  },
  // build: {
  //   loaders: {
  //     scss: {
  //       additionalData: `@import "@/assets/scss/_settings.scss";`,
  //     },
  //   },
  // },
});