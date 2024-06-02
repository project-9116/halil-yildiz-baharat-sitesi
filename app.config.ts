// app.config.ts
export default defineAppConfig({
  nuxtIcon: {
    size: "28px", // default <Icon> size applied
    class: "icon", // default <Icon> class applied
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
});
