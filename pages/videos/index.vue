<script setup></script>

<template>
  <div>
    <h1>Vidéos</h1>
    <!-- Ces liens pointent vers le document portant un numéro dans le dossier videos.
    le fichier '[id].vue' le numéro comme paramètre du lien dynamique. -->
    <p><NuxtLink to="/videos/1">Video 1</NuxtLink></p>
    <p><NuxtLink to="/videos/2">Video 2</NuxtLink></p>
    <p><NuxtLink to="/videos/3">Video 3</NuxtLink></p>
  </div>
</template>

<style scoped></style>
