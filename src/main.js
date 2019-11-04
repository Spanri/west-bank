import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import config from "./config";
import Vuelidate from "vuelidate";
import VueTheMask from 'vue-the-mask';
import { ApiService, TokenService, } from './services/index';
//import BootstrapVue from "bootstrap-vue";
//import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap-vue/dist/bootstrap-vue.css'

ApiService.init(config.apiUrl);
// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader();
}

Vue.use(Vuelidate);
Vue.use(VueTheMask);
//Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
