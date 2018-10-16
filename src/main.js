import '@babel/polyfill'
import Vue from 'vue';
import './plugins/vuetify'
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import { Ripple } from 'vuetify/es5/directives'

Vue.config.productionTip = false;


new Vue({
  router,
  store,
  render: h => h(App),
  components: {
  }
}).$mount('#app');

