'use strict';

import VueRouter from 'vue-router';

import TaskListView from '../views/TaskListView';
import IndexView from '../views/IndexView';

const Router = new VueRouter({
  mode: 'history',

  routes: [
    { path: '/', component: IndexView },
    { path: '/hello/:name', component: IndexView },
    { path: '/task-list', component: TaskListView },
    { path: '*', component: IndexView }
  ]
});

export default Router;
