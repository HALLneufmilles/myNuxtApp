// https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-implementer-un-store-avec-pinia-et-nuxt-3
// Mise en place d'un store appellé 'user':
// Pas besoin d'importer 'defineStore' puisqu'elle est auto-importer dans 'nuxt.config.ts'.
export const useUser = defineStore("user", {
  state: () => {
    return {
      isLogged: false,
    };
  },

  getters: {},

  // https://www.alphorm.com/tutoriel/formation-en-ligne-nuxt-js-3---le-guide-complet-du-debutant/tuto-video-tuto-video-implementer-une-action-dans-un-store-pinia-avec-nuxt-3
  actions: {
    login() {
      this.isLogged = true;
      useRouter().push("/");
    },
  },
});

// Pas besoin d'importer 'acceptHMRUpdate' puisqu'elle est auto-importer dans 'nuxt.config.ts'.
// acceptHMRUpdate va permettre de modifier le state à chaud, c'est à dire que l'on aura pas besoin de rafraîchir le navigateur pour voir les modifications.
if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useUser, import.meta.hot));
}
