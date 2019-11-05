import router from '@/router';

// Переменные, которые никуда не относятся

const state = {
  currentWidth: '',
};

const getters = {
  currentWidth: state => state.currentWidth,
};

const actions = {
  setCurrentWidth({commit,}, currentWidth) {
    const isAuth = router.currentRoute.meta.type & 0b100;

    commit('currentWidthSuccess', currentWidth);
    if (currentWidth < 748 && isAuth) {
      router.push("/download-app");
    }
  },
};

const mutations = {
  currentWidthSuccess(state, currentWidth) {
    console.log('Ширина экрана', currentWidth);
    state.currentWidth = currentWidth;
  },
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
};