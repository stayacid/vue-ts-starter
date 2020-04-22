import './js/common'

//import Vue
import Vue from 'vue'
import App from './App.vue'
import store from './store/store';

// custom plugins
// import testPlugin from './js/plugins/testPlugin'

// router
import VueRouter from 'vue-router'
import { routes } from './js/routes'



// router
const router = new VueRouter({
  routes,
  //mode: 'history', // remove hash from url but needs to set server to always return index.html
})
Vue.use(VueRouter)
/*router.beforeEach((to, from, next) => { // example of router hook
  store.commit('m_closeFilters')
  next()
})*/

// my custom plugins
// Vue.use(testPlugin)

// exapmle of using any js library
// Object.defineProperty(Vue.prototype, '$dateTime', { value: DateTime }) // or Vue.prototype.$dateTime = DateTime but this is low-level and read-only way

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

// SCSS
import './scss/_fonts.scss'
import './scss/helpers/_normalize.scss'
import './scss/_base.scss';
import './scss/_container.scss';
import './scss/_typography.scss';

// CSS (example)
// import './assets/css/main.css'


// other examples for vue
//window.Vue = require('vue');
//Vue.component('example-component', require('./components/Example.vue').default);