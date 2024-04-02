// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["bootstrap/dist/css/bootstrap.min.css"],
  // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-installer-pinia-avec-nuxt-3
  // Après installation de pinia ('npm install pinia @pinia/nuxt') dans le projet, on informe Nuxt que l'on va l'utiliser.
  modules: [
    [
      "@pinia/nuxt",
      {
        // Dans le contexte de @pinia/nuxt, les "Auto imports" se réfèrent à une fonctionnalité qui permet à Nuxt d'importer automatiquement certaines fonctions ou fonctionnalités de Pinia sans que vous ayez besoin de les importer explicitement dans chaque fichier où vous souhaitez les utiliser. Cela rend le code plus propre et réduit la répétition, car vous pouvez utiliser des stores Pinia, des états, des getters, des actions, etc., directement dans vos composants sans les importer manuellement à chaque fois.
        // https://pinia.vuejs.org/ssr/nuxt.html
        // A ce stade en faisant 'npm run dev' une erreur 'Cannot start nuxt:  Cannot find module 'pinia/dist/pinia.mjs' apparaît en console. Il faut ajouter le fix 'alias' ci-dessous.
        autoImports: ["defineStore", "acceptHMRUpdate"],
      },
    ],
  ],
  // Fix 'alias' pour correction, voir ci-dessus.
  alias: {
    pinia: "/node_modules/@pinia/nuxt/node_modules/pinia/dist/pinia.mjs",
  },

  app: {
    // Appliquer une transition entre les pages.
    // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-appliquer-une-transition-de-page-a-toutes-les-pages
    pageTransition: { name: "page", mode: "out-in" },

    // Définir la balise "head" de chaque page.
    // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-implementer-les-balises-meta-par-defaut-dans-nuxt-config
    head: {
      charset: "utf-8",
      viewport: "width=500, initial-scale=1",
      title: "Mon super site - Super site génial",

      meta: [
        { name: "description", content: "Description du super site!" },
        { name: "keywords", content: "site, super, génial" },
        { name: "author", content: "Moi" },
      ],
    },
  },
});
