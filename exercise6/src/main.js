import Vue from 'vue'
import App from './App.vue'

import Header from './components/Shared/Header.vue'
import Body from './components/Shared/Body.vue'
import Footer from './components/Shared/Footer.vue'

Vue.component('server-header', Header);
Vue.component('server-body', Body);
Vue.component('server-footer', Footer);

export const eventBus = new Vue();

new Vue({
  el: '#app',
  render: h => h(App)
})
