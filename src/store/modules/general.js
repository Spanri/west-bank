import Vue from "vue";
import Vuex from "vuex";
// import axios from "axios";

Vue.use(Vuex);

export default {
  state: {
    currentWidth: '',
  },
  getters: {
    getCurrentWidth: state => state.currentWidth,
  },
  mutations: {
    setCurrentWidth(state, data) {
      state.currentWidth = data;
    },
  },
  actions: {

  },
};