export default defineNuxtConfig({
  modules: ["@nuxtjs/sitemap"],
  devtools: { enabled: true },
  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Waradu",
      meta: [
        { charset: "utf-8" },
        {
          name: "viewport",
          content: "width=device-width, initial-scale=1",
        },
        { name: "author", content: "Waradu" },
        { name: "theme-color", content: "#000000" },
        {
          hid: "description",
          name: "description",
          content: "My Portfolio website",
        },
      ],
      script:
        process.env.NODE_ENV === "production"
          ? [
              {
                src: "https://plausible.pandadev.net/js/script.js",
                defer: true,
                "data-domain": "waradu.dev",
              },
            ]
          : [],
    },
  },
});
