import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import createMutationsSharer from "vuex-shared-mutations";
import createCache from "vuex-cache";
import general from "./general.module";
import auth from "./auth.module";
import user from "./user.module";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    general,
    auth,
    user,
  },

  plugins: [
    createPersistedState(),
    createCache(),
    // для расшаривания store мутаций в несколько вкладок
    createMutationsSharer({ predicate: ["auth.login", "auth.logout",], }),
  ],
});
