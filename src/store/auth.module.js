import { UserService, AuthenticationError, } from '../services/user.service';
import { TokenService, } from '@/services/storage.service';
import router from '@/router';

// методы login, getUserData, logout, refreshToken

const state =  {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: '',
  refreshTokenPromise: null,  // Holds the promise of the refresh token
};

const getters = {
  loggedIn: state => state.accessToken ? true : false,
  authenticationErrorCode: state => state.authenticationErrorCode,
  authenticationError: state => state.authenticationError,
  authenticating: state => state.authenticating,
};

const actions = {
  async login({ commit, }, {email, password,}) {
    commit('loginRequest');

    try {
      const token = await UserService.login(email, password);
      commit('loginSuccess', token);

      // Redirect the user to the page he first tried to visit or to /home
      router.push(router.history.current.query.redirect || '/home');

      return true;
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit('loginError', {
          errorCode: e.errorCode, 
          errorMessage: e.message,
        });
      }

      return false;
    }
  },

  // не сделано
  async signup({ commit, }, {email, password,}) {
    commit('loginRequest');

    try {
      const token = await UserService.login(email, password);
      commit('loginSuccess', token);

      // Redirect the user to the page he first tried to visit or to /home
      router.push(router.history.current.query.redirect || '/home');

      return true;
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit('loginError', {
          errorCode: e.errorCode, 
          errorMessage: e.message,
        });
      }

      return false;
    }
  },

  logout({ commit, }) {
    UserService.logout();
    commit('logoutSuccess');
  },

  refreshToken({ commit, state, }) {
    // If this is the first time the refreshToken has been called, make a request
    // otherwise return the same promise to the caller
    if(!state.refreshTokenPromise) {
      const p = UserService.refreshToken();
      /**
       * Сохраняя обещание (promise) refresh-токена и возвращая это 
       * обещание при каждом запросе на обновление токена, мы 
       * гарантируем, что токен будет обновлен только один раз.
      */
      commit('refreshTokenPromise', p);

      // Wait for the UserService.refreshToken() to resolve. On success set the token and clear promise
      // Clear the promise on error as well.
      p.then(
        response => {
          commit('refreshTokenPromise', null);
          commit('loginSuccess', response);
        },
        error => {
          error; // чтобы eslint не ругался
          commit('refreshTokenPromise', null);
        }
      );
    }

    return state.refreshTokenPromise;
  },
};

const mutations = {
  loginRequest(state) {
    state.authenticating = true;
    state.authenticationError = '';
    state.authenticationErrorCode = 0;
  },

  loginSuccess(state, accessToken) {
    state.accessToken = accessToken;
    state.authenticating = false;
  },

  loginError(state, {errorCode, errorMessage,}) {
    state.authenticating = false;
    state.authenticationErrorCode = errorCode;
    state.authenticationError = errorMessage;
  },

  logoutSuccess(state) {
    state.accessToken = '';
  },

  refreshTokenPromise(state, promise) {
    state.refreshTokenPromise = promise;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};