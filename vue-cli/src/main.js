import Vue from 'vue'
import App from './App.vue'
import Test from './Test.vue'
import Home from './Home.vue'

Vue.component('app-server', Home);

new Vue({
  el: '#app',
  render: h => h(App)
});
new Vue ({
  el: '#test',
  render: h => h(Test)
});

