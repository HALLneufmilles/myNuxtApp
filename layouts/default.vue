<template>
  <!-- A la section "Layout avec Nuxt 3", on déplace la nav-barre initialement dans 'app.vue' dans ce fichier. Dans le fichier 'app.vue' on englobe <NuxtPage/> dans un composant <NuxtLayout/> qui se lie avec le <slot /> de ce fichier situé sous l'élément <nav></nav>. Le layout 'default.vue' est le 1er que Nuxt va aller chercher. -->
  <!-- https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-implementer-un-layout-par-defaut-avec-nuxt-3 -->
  <nav>
    <!-- <a href="/articles">Articles</a>
      <a href="/videos">Videos</a> -->
    <!-- Le composant NuxtLink remplace l'élément <a>, permet de faire de la customisation -->
    <!-- https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-nuxtlink-pour-generer-des-liens -->
    <!-- Liens internes -->
    <NuxtLink to="/">Home</NuxtLink>
    <NuxtLink to="/articles">Articles</NuxtLink>
    <NuxtLink to="/products" no-rel>Produits</NuxtLink>
    <NuxtLink to="/videos">Vidéos</NuxtLink>
    <!-- On commente cette ligne lors de la leçon portant sut l'utilisation du store Pinia plutôt le state avec useState.On la remplace par celle du dessous. pour accéder à 'isLogin' il faut passer par le store user.ts .-->
    <!-- <NuxtLink v-if="!isLogged" to="/login">Login</NuxtLink> -->
    <NuxtLink v-if="!user.isLogged" to="/login">Login</NuxtLink>

    <!-- On commente cette ligne lors de la leçon portant sut l'utilisation du store Pinia le state avec useState.On la remplace par celle du dessous. pour accéder à 'isLogin' il faut passer par le store user.ts .-->
    <!-- <a href="#" v-else to="/logout" @click.prevent="isLogged = false">Logout</a> -->
    <a href="#" v-else to="/logout" @click.prevent="user.isLogged = false"
      >Logout</a
    >

    <a href="#" @click="changeColor" :style="style">Couleur : {{ color }}</a>

    <!-- Liens externes -->
    <!-- <NuxtLink to="http://google.com">Google</NuxtLink> -->
    <!-- Protéger un lien externe avec "noopener" quand "target:" est utilisé -->
    <!-- <NuxtLink to="http://alphorm.com" target="_blank" rel="noopener"
      >Alphorm</NuxtLink
    > -->
    <!-- Avec 'no-rel' le lien est traité comme un lien interne, donc sécurisé, mais qui s'ouvre dans le même onglet. -->
    <!-- <NuxtLink to="http://nuxtjs.com" no-rel>Nuxt</NuxtLink> -->
  </nav>

  <!-- Ce slot fait référence au contenu de la page qui sera défini avec ce layout -->
  <slot />
</template>

<script setup>
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-le-composable-usestate-dans-nuxt-3
//   Dans Nuxt 3, useState sert à créer des variables réactives que l'on peut partager entre plusieurs composants. En copiant la ligne ci-dessous dans, par exemple, le fichier 'login.vue', on donne la possibilité aux deux composant d'utiliser ou de modifier la valeur de 'isLogged'.
// On commente cette ligne lors de la leçon portant sur l'utilisation du store Pinia.

// const isLogged = useState("isLogged", () => true);

// Utilisation du store, a la place du state de useState dans la ligne précédente.
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-utiliser-un-state-de-pinia-dans-nuxt-3
// Il faudra importer useUser() a chaque fois.

const user = useUser();

// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-definir-un-etat-global
// En lien avec 'states.ts'
// const color = useColor(); : Cette ligne récupère et utilise l'état réactif nommé color qui a été initialisé à l'aide d'un composable défini dans le fichier states.ts. Pour rappel, dans 'state.ts' la fonction useState est utilisée pour créer une référence réactive 'color' qui est initialisée avec la valeur "red", et cette valeur peut être utilisée ou modifiée par d'autres composants de l'application.
const color = useColor();
// const style = ref("color:" + color.value); : Ici, ref est utilisée pour créer une nouvelle référence réactive pour le style qui sera appliqué à un élément HTML <a>. La propriété .value est nécessaire pour accéder à la valeur actuelle de l'autre référence réactive récupérée dans color. Cette ligne concatène littéralement en une chaine de caractères "color:" + color.value, qui sera utilisée comme valeur dynamique de style, ici "color:red" .
const style = ref("color:" + color.value);

// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-definir-un-etat-global
const changeColor = () => {
  color.value = color.value === "red" ? "blue" : "red";
  style.value = "color: " + color.value;
};
</script>

<style scoped></style>
