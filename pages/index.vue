<script setup></script>

<template>
  <div>
    <h1>Home page</h1>

    <p>Je suis la Home page!</p>

    <!-- '/' indique "va chercher dans le dossier 'public' ! " -->
    <!-- <img src="/favicon.ico" alt="favicon" /> -->

    <!-- Il faut ajouter les dossier "assets" ! -->
    <!-- le dossier assets est utilisé pour tout ce qui est fichiers Javascript, d'image, css, font etc.
    S'est ce fichier qui sera bundlé par Vite par défaut à partir de la version 3 de Nuxt. Historiquement Nuxt utilisait Webpack. Il est toujours possible d'utiliser Webpack mais il faut configurer le fichier 'nuxt.config.ts' -->
    <!-- Dans Nuxt.js, le symbole ~ utilisé dans le chemin d'une image ou de toute autre ressource est un alias qui fait référence à la racine du projet. Lorsque vous utilisez ~/, vous indiquez que le chemin commence à partir du répertoire racine de votre projet Nuxt. Cela permet d'éviter les problèmes liés aux chemins relatifs lors du référencement de fichiers et de ressources dans votre application.
     Cela simplifie le processus de référencement des ressources dans votre projet, car vous n'avez pas à vous soucier du dossier spécifique dans lequel se trouve le fichier qui référence la ressource. Sans cet alias, vous auriez besoin de fournir des chemins relatifs précis, ce qui peut devenir complexe et sujet à erreurs, surtout lorsque vous déplacez des fichiers autour de la structure du projet.-->
    <img src="~/assets/img/suricate.jpg" alt="ddd" width="500" height="500" />
  </div>
</template>

<style scoped></style>
