// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-definir-un-etat-global

// Pour rappel, on à besoin du state lorsqu'on veut qu'une variable réactive puisse être modifiée par plusieurs composants.
// Dans Nuxt 3, useState peut aussi être utiliser pour créer une variable réactif partagée de façon Global, s'est à dire accessible par tous les composants de l'application, contrairement à ce qu'on a vu précédement où on copiait 'const isLogged = useState("isLogged", () => false);' dans le fichier '/login.vue' et 'default.vue' pour la rendre utilisable par ces deux composants.

// Lorsque vous utilisez export const useColor = () => useState("color", () => "red");, voici ce qui se passe :

// useState est appelé pour créer un état réactif nommé color.
// "color" est l'identifiant unique pour cet état spécifique dans l'application Nuxt.
// La fonction fléchée () => "red" est la valeur d'initialisation de cet état. Cela signifie que lorsque l'état color sera utilisé pour la première fois, il sera initialisé à la valeur "red".
// useColor est exportée, ce qui signifie que vous pouvez l'utiliser dans d'autres parties de votre application pour accéder à l'état color et le réactiver. Chaque fois que vous appellerez useColor(), vous obtiendrez la référence à cet état partagé. Si vous modifiez sa valeur quelque part dans l'application, cette modification sera reflétée partout où color est utilisé.

// voir son utilisation dans 'default.vue'
export const useColor = () => useState("color", () => "red");
