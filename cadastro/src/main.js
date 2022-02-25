import Vue from 'vue'
import App from './App.vue'
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import router from './routes';
import provedor from './provedor'
import msg from './pt_BR';

Vue.use(VueResource);

Vue.use(VeeValidate,{
  locale:'pt_BR',
  dictionary:{
    pt_BR:{
      messages: msg
    }
  }
});

Vue.http.options.root = 'http://localhost:3000';

new Vue({
  el: '#app',
  router,
  store: provedor,
  render: h => h(App)
})
