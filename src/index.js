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
import './scss/global/_fonts.scss'
import './scss/global/helpers/_normalize.scss'
import './scss/global/_base.scss';
import './scss/global/_container.scss';
import './scss/global/_typography.scss';

// CSS (example)
// import './assets/css/main.css'