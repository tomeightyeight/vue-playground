'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import DefaultRouter from './routers/DefaultRouter';
import App from './App';

// Inject additional package dependencies
Vue.use(VueResource);
Vue.use(VueRouter);

// Main app instance
new Vue({
  router: DefaultRouter,

  template: '<App/>',

  components: { App },

  // Global options for VueResource
  http: {
    root: '',
    headers: {
      //
    }
  }
}).$mount('#app');
