// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // build: {
  //   extractCSS: true, // CSS'yi ayrı dosyalara ayır
  //   optimization: {
  //     splitChunks: {
  //       layouts: true,
  //       pages: true,
  //       commons: true,
  //     },
  //   },
  // },

  css: ["~/assets/scss/theme.scss"],

  modules: ["@nuxt/image", "@nuxt/icon", "nuxt-swiper"],

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

  ssr: true,
  devtools: { enabled: false },
});
