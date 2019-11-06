import { UserService, AuthenticationError, } from '@/services/user.service';
import { TokenService, } from '@/services/storage.service';
import router from '@/router';
//import store from '@/store';

// методы login, getUserData, logout, refreshToken

const state =  {
  authenticating: false,
  accessToken: TokenService.getToken(),
  authenticationErrorCode: 0,
  authenticationError: '',
  signuping: false,
  signupErrorCode: 0,
  signupError: '',
  refreshTokenPromise: null,  // Holds the promise of the refresh token
};

const getters = {
  isloggedIn: state => state.accessToken ? true : false,
  authenticationErrorCode: state => state.authenticationErrorCode,
  authenticationError: state => state.authenticationError,
  authenticating: state => state.authenticating,
  signuping: state => state.signuping,
  signupErrorCode: state => state.signupErrorCode,
  signupError: state => state.signupError,
};

const actions = {
  async login({ commit, dispatch, }, {email, password,}) {
    commit('loginRequest');

    try {
      const token = await UserService.login(email, password);
      commit('loginSuccess', token);
      await dispatch('user/getProfile', null, {root: true,});

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

  /** 
   * Регистрация, 1 фаза, проверяется, не зарегистрирован 
   * ли уже такой email и phone
  */ 
  async signupPhase1({ commit, }, {phone, email,}) {
    commit('signupRequest');

    try {
      // 1ый параметр: 0 - проверка phone, 1 - email
      await UserService.signupPhase1(0, phone);
      await UserService.signupPhase1(1, email);
      commit('signupPhase1Success');

      return true;
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit('signupError', {
          errorCode: e.errorCode, 
          errorMessage: e.message,
        });
      }

      return false;
    }
  },

  /** 
   * Регистрация, 2 фаза, проверяется, уникален ли username
   * и, если да, то происходит регистрация и выдача токена
  */ 
  async signupPhase2({ commit, dispatch, }, data) {
    commit('signupRequest');

    try {
      console.log(data);
      const token = await UserService.signupPhase2(data);
      commit('signupPhase2Success', token);
      await dispatch('user/getProfile', null, {root: true,});

      router.push(router.history.current.query.redirect || '/home');

      return true;
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit('signupError', {
          errorCode: e.errorCode, 
          errorMessage: e.message,
        });
      }

      return false;
    }
  },

  logout({ commit, rootState, }) {
    UserService.logout();
    commit('logoutSuccess');
    /**  
     * задержка, чтобы анимация перехода со страницы
     * норм отработала (иначе во время перехода значения из
     * profile будут undefined)
    */
    setTimeout(() => {
      rootState.user.profile = '';
    }, 2000);
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

  signupRequest(state) {
    state.signuping = true;
    state.signupError = '';
    state.signupErrorCode = 0;
  },

  signupSuccess(state, accessToken) {
    state.accessToken = accessToken;
    state.signuping = false;
  },

  signupPhase1Success(state) {
    state.signuping = false;
  },

  signupPhase2Success(state, accessToken) {
    state.accessToken = accessToken;
    state.signuping = false;
  },

  signupError(state, {errorCode, errorMessage,}) {
    state.signuping = false;
    state.signupErrorCode = errorCode;
    state.signupError = errorMessage;
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