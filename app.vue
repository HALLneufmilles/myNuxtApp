<template>
  <div class="app-container">
    <!-- <NuxtWelcome /> -->

    <!-- A la section "Layout avec Nuxt 3", on déplace la nav barre du fichier 'app.vue' dans le fichier 'default.vue' du dossier Layouts. 
    Puis on englobe <NuxtPage /> dans un composant <NuxtLayout />-->
    <!-- !!! NuxtLayout sans attribut 'name' pointe par defaut sur le layout 'default' pour toutes les pages, quel layout par défaut elles doivent utiliser !!!. Ce qui n'empeche pas de spécifier un autre layout page par page si on le souhaite, comme pour la page 'login.vue' avec 'definePageMeta'.  -->
    <!-- https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-implementer-un-layout-par-defaut-avec-nuxt-3 -->

    <NuxtLayout :name="default">
      <!-- On peut aussi imposer le nom du layout par défaut pour toutes les pages, sans exeption, même les pages définies avec definePageMeta() en ajoutant un :name à <NuxtLayout/> en lien avec la const layout dans <script></script>.-->
      <!-- https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-remplacer-le-layout-par-defaut -->
      <!-- <NuxtLayout :name="layout"> -->
      <!-- NuxtPage va détecter index.vue du dossier Pages qu'il va considérer comme la page d'accueil. -->
      <!-- https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-afficher-une-page-daccueil -->
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup>
//  Avec la const je peux définir le layout 'auth.vue' par défaut
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-remplacer-le-layout-par-defaut
// const layout = "default";
// const layout = "auth";
</script>

<style>
.app-container {
  max-width: 800px;
  margin: 0 auto;
}

nav a {
  font-size: 1.2rem;
  margin-right: 10px;
}
/* https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-customiser-les-liens-actifs-et-actifs-exact */
/* les composants NuxtLink tout comme <router-link> de Vuejs, possèdent deux classes par défaut mais non définis que l'on peut renseigner.
Ces classes sont '.router-link-active' et '.router-link-exact-active':
.router-link-active: Cette classe est appliquée aux liens dont l'URL correspond partiellement à l'adresse actuelle. Cela signifie que si vous avez une structure de navigation hiérarchique ou imbriquée, .router-link-active sera appliquée non seulement au lien qui correspond exactement à l'URL, mais aussi à tout lien parent dans la hiérarchie des routes. Par exemple, si vous avez une route /users et une sous-route /users/profile, naviguer vers /users/profile appliquera la classe .router-link-active à la fois au lien menant à /users et au lien menant à /users/profile, indiquant que vous vous trouvez dans la section users du site.
.router-link-exact-active:À l'inverse, cette classe est utilisée pour indiquer une correspondance exacte entre le lien de navigation et l'URL actuelle. Elle ne sera appliquée qu'au lien qui correspond exactement à l'adresse visitée, sans tenir compte des éventuelles correspondances partielles ou des liens parents. Reprenant l'exemple précédent, si vous naviguez vers /users/profile, seule le lien menant directement à /users/profile se verra appliquer .router-link-exact-active, tandis que le lien vers /users ne l'aura pas, même s'il est dans la même hiérarchie de navigation. 
 */
.router-link-active {
  color: red;
}

.router-link-exact-active {
  color: blue;
}
/* ces classes sont préfixé avec le 'name' donné dans 'nuxt.config.ts' pour la transition (page) .*/
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
