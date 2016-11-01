'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';
import VueRouter from 'vue-router';

import TaskListView from './views/TaskListView';
import IndexView from './views/IndexView';

import App from './App';

// Inject additional package dependencies
Vue.use(VueResource);
Vue.use(VueRouter);

const Router = new VueRouter({
  mode: 'history',

  routes: [
    { path: '/', component: IndexView },
    { path: '/task-list', component: TaskListView },
    { path: '*', component: IndexView }
  ]
});

// Main app instance
new Vue({
  router: Router,

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
