import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store/index";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
// import 'bootstrap-vue/dist/bootstrap-vue.css'
import Vuelidate from "vuelidate";

Vue.use(BootstrapVue);
Vue.use(Vuelidate);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount("#app");
