// Переменные, которые никуда не относятся

const state = {
  currentWidth: '',
};

const getters = {
  getCurrentWidth: state => {
    console.log('Ширина экрана ', state.currentWidth);
    return state.currentWidth;
  },
};

const mutations = {
  setCurrentWidth(state, data) {
    state.currentWidth = data;
  },
};

const actions = {

};

export default {
  state,
  getters,
  actions,
  mutations,
};