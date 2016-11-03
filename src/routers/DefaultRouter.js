'use strict';

import VueRouter from 'vue-router';

import TaskListView from '../views/TaskListView';
import IndexView from '../views/IndexView';

export default new VueRouter({
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'Index',
      component: IndexView
    },

    {
      path: '/hello/:name',
      name: 'HelloWorld',
      component: IndexView
    },

    {
      path: '/task-list',
      name: 'TaskList',
      component: TaskListView
    },

    {
      path: '/async',
      name: 'Async',
      component: function(resolve) {
        // Webpack creates a seperate bundle with code splitting
        // and handles the async loading via JSONP for us
        require(['../views/AsyncView.vue'], resolve);
      }
    },

    {
      path: '*',
      name: '404',
      component: IndexView
    }
  ]
});
