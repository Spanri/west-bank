import { UserService, AuthenticationError, } from '@/services/user.service';

// методы login, getUserData, logout, refreshToken

const state =  {
  profile: {},
  profileErrorCode: 0,
  profileError: '',
};

const getters = {
  profile: state => state.profile,
  profileErrorCode: state => state.profileErrorCode,
  profileError: state => state.profileError,
};

const actions = {
  async getProfile({ commit, }) {
    commit('getProfileRequest');

    try {
      const profile = await UserService.getProfile();
      commit('getProfileSuccess', profile);

      return true;
    } catch (e) {
      if (e instanceof AuthenticationError) {
        commit('getProfileError', {
          errorCode: e.errorCode, 
          errorMessage: e.message,
        });
      }

      return false;
    }
  },
};

const mutations = {
  getProfileRequest(state) {
    state.profileErrorCode = 0;
    state.profileError = '';
  },

  getProfileSuccess(state, profile) {
    state.profile = profile;
  },

  getProfileError(state, {errorCode, errorMessage,}) {
    state.profileErrorCode = errorCode;
    state.profileError = errorMessage;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};