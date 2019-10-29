import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from "vuelidate";
import VueTheMask from 'vue-the-mask';
import vSelect from 'vue-select';

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
//require('es6-promise').polyfill();

Vue.use(VueTheMask);
Vue.component('v-select', vSelect);
Vue.config.productionTip = false;

vSelect.props.components.default = () => ({
  Deselect: {
    render: createElement => createElement('span', ''),
  },
  OpenIndicator: {
    render: createElement => createElement('span', ''),
  },
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
