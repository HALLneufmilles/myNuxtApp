<script setup>
// **** Utilisation de useAsyncData() ****
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-fake-store-api
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-$fetch-et-useasyncdata-pour-recuperer-des-donnees
// on utilise "fakeStoreApi.com" pour simuler un fetch sur une bd.
// https://fakestoreapi.com/docs

// const { data: products } = useAsyncData(() => {
//   return $fetch("https://fakestoreapi.com/products");
// });

// ***** Version plus courte avec useFetch() *****
// On note que le résultat est le même !
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-decouvrir-le-composable-usefetch-avec-nuxt
const { data: products } = useFetch("https://fakestoreapi.com/products");
</script>

<template>
  <div>
    <h1>Liste des produits</h1>
    <!-- <pre>
     {{ products }}
    </pre> -->
    <ul>
      <li v-for="product in products" :key="product.id" class="mb-4">
        <!-- {{ product.title }} -->
        <!-- https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-recuperer-un-produit -->
        <NuxtLink :to="`/products/${product.id}`">
          <img
            :src="product.image"
            :alt="product.title"
            width="50"
            height="50"
          />
          <span class="title">{{ product.title }}</span> - prix :
          {{ product.price }}€
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
li {
  list-style: none;
}

.title {
  margin-left: 1.2rem;
}
</style>
