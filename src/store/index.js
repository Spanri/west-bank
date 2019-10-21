import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";
import createCache from "vuex-cache";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth: () => import("./modules/auth"),
    general: () => import("./modules/general"),
  },
  plugins: [
    createPersistedState(),
    createCache(),
    createMutationsSharer({ predicate: ["auth_success", "logout",], }),
  ],
});
