export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "FullStackBeta Auth",
    htmlAttrs: {
      lang: "pt-br"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [{ src: "~static/css/app.css" }],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [{ src: "~plugins/vuesax.js" }],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    "@nuxt/typescript-build",

    // Compition API Nuxt
    "@nuxtjs/composition-api/module"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  //-> Registe aqui o modulo - nuxt-validate
  modules: ["nuxt-validate"],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    interval: 2000
  }
};
