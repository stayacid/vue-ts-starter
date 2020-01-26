import './js/common'

//import Vue
import Vue from 'vue'
import App from './App.vue'
//window.Vue = require('vue');
//Vue.component('example-component', require('./components/Example.vue').default);
import store from './store/store';

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// SCSS
import './scss/main.scss'

// CSS (example)
// import './assets/css/main.css'