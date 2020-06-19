import Vue from 'vue';
import Vuex, { Store } from 'vuex'
import { initializeStores, modules } from './store-accessor'

Vue.use(Vuex);

// example - https://github.com/garyo/vuex-module-decorators-example
// Initialize the modules using a Vuex plugin that runs when the root store is
// first initialized. This is vital to using static modules because the
// modules don't know the root store when they are loaded. Initializing them
// when the root store is created allows them to be hooked up properly.
const initializer = (store: Store<any>) => initializeStores(store)
export const plugins = [initializer]
export * from './store-accessor' // re-export the modules

export default new Store({
  plugins,
  modules
})
