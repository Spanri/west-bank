import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

// Переменные, которые никуда не относятся

export default {
  state: {
    currentWidth: '',
  },

  getters: {
    getCurrentWidth: state => {
      console.log('Ширина экрана ', state.currentWidth);
      return state.currentWidth;
    },
  },

  mutations: {
    setCurrentWidth(state, data) {
      state.currentWidth = data;
    },
  },

  actions: {

  },
};