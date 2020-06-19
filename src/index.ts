// JS
import './js/common';
// SCSS
import './scss/_fonts.scss';
import './scss/helpers/_normalize.scss';
import './scss/_base.scss';
import './scss/_container.scss';
import './scss/_typography.scss';

// CSS (example)
// import './assets/css/main.css'

// import Vue
import Vue from 'vue';

// custom plugins
// import testPlugin from './js/plugins/testPlugin'

// router
import VueRouter from 'vue-router';
import routes from './js/routes';

// app
import App from './App.vue';
// store
import store from './store/store';


// router
const router: VueRouter = new VueRouter({
  routes,
  mode: 'history', // remove hash from url but needs to set server to always return index.html
});
Vue.use(VueRouter);
/* router.beforeEach((to, from, next) => { // example of router hook
  store.commit('m_closeFilters')
  next()
}) */

// my custom plugins
// Vue.use(testPlugin)

// exapmle of using any js library
/* eslint-disable-next-line max-len */
// Object.defineProperty(Vue.prototype, '$dateTime', { value: DateTime }) // or Vue.prototype.$dateTime = DateTime but this is low-level and read-only way

/* eslint-disable-next-line no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: (h) => h(App),
});


// other examples for vue
// window.Vue = require('vue');
// Vue.component('example-component', require('./components/Example.vue').default);
