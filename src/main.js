import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import Vuelidate from "vuelidate";
import VueTheMask from 'vue-the-mask';
//import BootstrapVue from "bootstrap-vue";
//import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(Vuelidate);
Vue.use(VueTheMask);
//Vue.use(BootstrapVue);

Vue.config.productionTip = false;

// Set the base URL of the API
ApiService.init(process.env.VUE_APP_ROOT_API)

// If token exists set header
if (TokenService.getToken()) {
  ApiService.setHeader()
}

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
