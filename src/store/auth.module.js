import { userService, } from '@/services';
import router from "@/router";

// когда страница открывается первый раз во вкладке
const user = JSON.parse(localStorage.getItem('user'));
const initialState = user
  ? { status: { loggedIn: true, }, user, }
  : { status: {}, user: null, };

export default {
  namespaced: true,

  state: initialState,

  actions: {
    login({ dispatch, commit, }, { username, password, }) {
      commit('loginRequest', { username, });
      console.log('user');

      userService.login(username, password)
        .then(
          
          user => {
            console.log('user 1');
            commit('loginSuccess', user);
            router.push('/home');
          },
          error => {
            console.log('user 0');
            commit('loginFailure', error);
            dispatch('alert/error', error, { root: true, });
          }
        );
    },

    logout({ commit, }) {
      userService.logout(); // удаляет токен из localstorage
      commit('logout');
    },
  },

  mutations: {
    loginRequest(state, user) {
      state.status = { loggingIn: true, };
      state.user = user;
    },

    loginSuccess(state, user) {
      state.status = { loggedIn: true, };
      state.user = user;
    },

    loginFailure(state) {
      state.status = {};
      state.user = null;
    },

    logout(state) {
      state.status = {};
      state.user = null;
    },
  },
};