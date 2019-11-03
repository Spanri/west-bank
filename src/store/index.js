import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";
import createCache from "vuex-cache";
import auth from "./auth.module";
import general from "./general.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    auth,
    general,
  },
  plugins: [
    createPersistedState(),
    createCache(),
    // для расшаривания store мутаций в несколько вкладок
    createMutationsSharer({ predicate: ["auth_success", "logout",], }),
  ],
});
