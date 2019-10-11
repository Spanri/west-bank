import Vue from "vue";
import Vuex from "vuex";
import auth from "./modules/auth";
import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";
import createCache from "vuex-cache";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
  },
  plugins: [
    createPersistedState(),
    createCache(),
    createMutationsSharer({ predicate: ["auth_success", "logout",], }),
  ],
});
