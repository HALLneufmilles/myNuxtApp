<template>
  <div class="container">
    <h1>{{ product.title }}</h1>
    <pre>{{ product }}</pre>
    <!-- https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-recuperer-un-produit -->
    <div class="row">
      <div class="col-6">
        <img
          class="d-block"
          :src="product.image"
          :alt="product.title"
          width="200"
          height="200"
        />
      </div>
      <div class="col-6">
        <p>{{ product.description }}</p>
        <p>Prix : {{ product.price }} €</p>
        <p>Catégorie : {{ product.category }}</p>
        <p>
          Note : {{ product.rating.rate }} pour {{ product.rating.count }} votes
        </p>
        <span v-for="i in Math.round(product.rating.rate)" :key="i"
          >&starf;</span
        >
        <span v-for="i in Math.round(5 - product.rating.rate)" :key="i"
          >&star;</span
        >
      </div>
    </div>
  </div>
</template>

<script setup>
const route = useRoute();
// const { data: product } = await useFetch(
//   `https://fakestoreapi.com/products/${route.params.id}`
// );
// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-fixer-la-deduplication-avec-usefetch-et-nuxt-3
// Ajout d'une clef.
// Quand on utilise usefetch(), Nuxt met les données en cache mais il ne leurs attribut pas un id par défaut, donc on fait ça à sa place, comme ça si quelqu'un d'autre veut voir le même produit, Nuxt n'a plus qu'a aller voir dans le cache s'il existe déjà afin d'éviter de lancer une nouvelle requête. Cela optimise l'utilisation des ressources et améliore l'efficacité de l'application en évitant les appels API inutiles pour des données déjà chargées.
const { data: product } = await useFetch(
  `https://fakestoreapi.com/products/${route.params.id}`,
  {
    key: `products/${route.params.id}`,
  }
);
</script>

<style lang="scss" scoped></style>
