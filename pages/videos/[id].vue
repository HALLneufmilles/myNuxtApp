<template>
  <div>
    <h1>Vidéo avec l'ID : {{ $route.params.id }}</h1>
  </div>
</template>

<script setup>
// definePageMeta() fonctionne avec le dossier 'middleware'.
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-les-named-route-middlewares
definePageMeta({
  middleware: "video-exists",
});

// Des metas dynamyques dans la balise Head :
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-rendre-les-balises-meta-dynamique
const route = useRoute();

useHead({
  title: `La vidéo ${route.params.id} - Mon super site`,
  meta: [
    {
      name: "description",
      content: `La vidéo ${route.params.id} - Mon super site`,
    },
    // On peut ajouter des "Méta social" à chaque page pour le partage avec les reseaux sociaux:
    // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-ajouter-les-balises-meta-social
    // Les balises og (Open Graph) permettent de transmettre un aperçu du contenu partagé Facebook sous la forme d'un objet riche. Lorsqu'une page est partagée sur des plateformes sociales comme Facebook, LinkedIn, ou Twitter, ces types de balises définissent comment le titre, la description, l'image, et l'URL de la page doivent être affichés dans l'aperçu du partage. Cela aide à créer une représentation visuelle attrayante et informative du contenu partagé, augmentant potentiellement l'engagement des utilisateurs avec ce contenu sur les réseaux sociaux.
    // Il faut clique sur l'extension de chrome " Social share Preview" pour voir le résultat.
    { property: "og:description", content: `La vidéo ${route.params.id}` },
    {
      property: "og:title",
      content: `super titre de la vidéo ${route.params.id}`,
    },
    { property: "og:image", content: "/aws.png" },
    { property: "og:url", content: route.fullPath },

    // Pour twitter :
    { name: "twitter:card", content: "summary-large-img" },
    { name: "twitter:title", content: `Titre de la vidéo ${route.params.id}` },
    { name: "twitter:image", content: "/gimp.png" },
  ],
});
</script>

<style scoped></style>
