// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // Config Global CSS
  css: ["~/assets/css/main.css"],

  // Config Meta Tags
  app: {
    head: {
      title: "Market-App",
      meta: [
        {
          name: "description",
          content: "Market App products",
        },
      ],
    },
  },
  modules: ["@nuxt/eslint", "@nuxt/fonts", "@nuxt/icon", "@nuxt/image"],

  /**
   * Config Single Pages APP (SPA)
   * ssr: false,
   * nitro: {
   *   preset: "static",
   *   static: true,
   * },
   */

  // Prerender Todo el sitio
  // Generar Sitio Web Estatico
  nitro: {
    prerender: {
      routes: ["/", "/about", "/contact", "/products"],
      ignore: ["/dashboard", "/dashboard/**"],
      // habilitar el crawling para describir enlaces automaticos
      crawlLinks: true,
    },
  },
});
