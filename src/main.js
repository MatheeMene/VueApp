import Vue from 'vue'
import App from './App.vue'
// Artefatos externos 
import VueResource from 'vue-resource';

Vue.use(VueResource);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
