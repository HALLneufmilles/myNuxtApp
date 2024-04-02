<script setup>
// En utilisant useHead() on peut modifier chaque éléments de la balise 'head'  défini dans 'nuxt.config.ts' ou ajouter des attributs à l'élément body d'une page.
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-le-composable-usehead
useHead({
  // En rafraîchissant la page et en affichent le code source dans le navigateur, on voit que 'title' à été modifier pour cette page.
  title: "Les articles",
  // Onpeut changer d'autres méta :
  meta: [{ name: "description", content: "Liste des article du site." }],
  // bodyAttrs permet d'ajouter des attribut à la balise Body. Ici on lui met une classe (pas défini donc ne change rien) et lui donner un Id (Pour quoi faire ???)
  bodyAttrs: {
    class: "layout-dark",
    id: "body-id",
  },
  // on peut importer des scripts, ici une librairie,
  // script: [
  // {
  //   src: "https://cdnjs.cloudflare.com/ajax/1ibs/jquery/3.6.0/jguery-min.is",
  // },
  // un console.log(), en position children, c'est à dire en dessous du script jquery.
  // {
  children: "console.log('Hello World')",
  // On peut ajouter ça pour que le console.log soit affiché à la fin du body. L'intructeur ne voit pas bien à quoi ça pourrait servir :).
  //   body: true,
  // },
  // ],

  // Ajouter des styles :
  style: [
    {
      children: "body {background-color: red;}",
    },
  ],
});
</script>

<template>
  <div>
    <h1>Articles</h1>
  </div>
</template>
