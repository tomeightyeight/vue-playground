'use strict';

import Vue from 'vue';
import VueResource from 'vue-resource';

import { REPLACE_TASKS } from './MutationTypes';

Vue.use(VueResource);

/**
 * Fetch tasks from end point
 */
export const fetchTasks = function ({ commit }) {
  Vue.http.get('/api/todos')
    .then(response => {
      commit({
        type: REPLACE_TASKS,
        tasks: response.body
      });
    }, error => {
      console.log(error);
    });
};

/**
 * Persist tasks to server via end point
 */
export const saveTasks = function ({ state }) {
  Vue.http.put('/api/todo', state.tasks)
    .then(() => {
      alert('Task list saved!');
    }, error => {
      console.log(error);
    });
};
