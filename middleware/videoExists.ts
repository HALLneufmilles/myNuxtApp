// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-les-named-route-middlewares

// Ce middleware va s'appliquer là où on va l'appeler. Celui-ci est utilisé dans le fichier '[id].vue' du dossier 'video'.
// defineNuxtRouteMiddleware() vérifie à chaque changement de route les condition dans les middleware.
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.params.id == "9") {
    console.log("message: Page de la vidéo 9");

    // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-le-helper-abortnavigation
    // cette methode (helper) permet d'arréter la navigation si la condition est vraie.

    // return abortNavigation();

    // cette methode (helper) permet de rediriger le visiteur si la condition est vraie.

    // return navigateTo("/");
  }
});
