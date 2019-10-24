import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";
import createCache from "vuex-cache";
import auth from "./modules/auth";
import general from "./modules/general";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    general,
  },
  plugins: [
    createPersistedState(),
    createCache(),
    createMutationsSharer({ predicate: ["auth_success", "logout",], }),
  ],
});
