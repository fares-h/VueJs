import Vue from 'vue'
import App from './App.vue'

import Header from './Header.vue'
import Body from './Body.vue'
import Footer from './Footer.vue'

Vue.component('server-header', Header);
Vue.component('server-body', Body);
Vue.component('server-footer', Footer);

new Vue({
  el: '#app',
  render: h => h(App)
})
