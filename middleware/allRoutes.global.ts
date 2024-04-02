// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-les-global-middlewares-dans-nuxt-3

// Un middleware est Global lorsqu'il est défini dans un fichier préfixé avec '.global' comme ce fichier et va applique le middleware ci-dessous à toute l'application et pour tous changement de routes.
export default defineNuxtRouteMiddleware((to, from) => {
  // La route s'affichera à chaque changement de route.
  // Cas d'emploi : envoyer une requete pour signaliser chaque fois que quelqu'un visite certaine pages...
  console.log(to.fullPath);
});
