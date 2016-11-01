'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';
import App from './App';

// Bind additional packages to vue
Vue.use(VueResource);
Vue.use(VueRouter);

const Router = new VueRouter({
  routes: [
    { path: '/', component: App }
  ]
});

// Main app instance
new Vue({
  router: Router,

  template: '<router-view/>',

  // Global options for VueResource
  http: {
    root: '',
    headers: {
      //
    }
  }
}).$mount('#app');
