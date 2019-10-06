import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuelidate from 'vuelidate'
import vuelidateErrorExtractor, { templates } from "vuelidate-error-extractor";

Vue.use(Vuelidate)
Vue.use(vuelidateErrorExtractor, {
  template: templates.singleErrorExtractor.foundation6,
  messages: { required: "Поле {attribute} обязательно." },
  attributes: {
    email: "Email",
    firstName: "First name",
    lastName: "Last name"
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
