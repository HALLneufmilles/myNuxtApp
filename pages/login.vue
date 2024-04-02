<script setup lang="ts">
// import { definePageMeta } from "#app";

// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-le-composable-usestate-dans-nuxt-3
//   Dans Nuxt 3, useState sert à créer des variables réactives que l'on peut partager entre plusieurs composants. En copiant la ligne ci-dessous dans, par exemple, le fichier 'default.vue', on donne la possibilité aux deux composants d'utiliser ou de modifier la valeur de 'isLogged'.
// On commente cette ligne lors de la leçon portant sut l'utilisation du store Pinia et on fait ce qui suit.

// const isLogged = useState("isLogged", () => false);

// On utilise le store Pinia.
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-utiliser-un-state-de-pinia-dans-nuxt-3
const user = useUser();
// On crée une fonction pour simuler une connexion et on la passe en evenement submit du formulaire.
// comment cette fonction à la leçon "implementer une action dans le store pinia...". ette fonction peut très bien être définie dans une action du store.

// const loginUser = () => {
//   user.isLogged = true;
//   useRouter().push("/");
// };

// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-implementer-une-action-dans-un-store-pinia-avec-nuxt-3
// Utilisation de l'action 'login()' du store à la place du code ci-dessus.

const loginUser = () => {
  user.login();
};

definePageMeta({ layout: "auth" });

// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-definir-un-layout-pour-une-page-avec-pagemeta
// comme toutes les pages sont définie pour utiliser le layout 'default.vue' par <NuxtLayout/> dans 'app.vue', on dit à Nuxt que 'login.vue' doit utiliser le layout 'auth.vue'.
</script>

<template>
  <div>
    <h4><NuxtLink to="/">Retour Accueil</NuxtLink></h4>
    <form action="" @submit.prevent="loginUser">
      <label for="email">Email</label>
      <input type="email" />
      <label for="password">Mot de passe</label>
      <input type="password" />
      <button type="submit">Se connecter</button>
    </form>
  </div>
</template>
