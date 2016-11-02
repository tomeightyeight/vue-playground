'use strict';

import uuid from '../utils/uuid';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import Vue from 'vue';

import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETED,
  REPLACE_TASKS
} from './MutationTypes';

Vue.use(VueResource);
Vue.use(Vuex);

const Store = new Vuex.Store({
  state: {
    tasks: [
      { id: uuid(), description: 'Task 1', completed: false },
      { id: uuid(), description: 'Task 2', completed: false },
      { id: uuid(), description: 'Task 3', completed: true }
    ]
  },

  mutations: {
    /**
     * Add a new task to the local store
     */
    [ADD_TASK]: function(state, payload) {
      state.tasks.push({
        id: uuid(),
        description: payload.description,
        completed: payload.completed
      });
    },

    /**
     * Delete a task from the local store by index
     */
    [DELETE_TASK]: function(state, payload) {
      state.tasks.splice(payload.index, 1);
    },

    /**
     * Toggle the completed state of a specific task
     */
    [TOGGLE_COMPLETED]: function(state, payload) {
      let task = state.tasks.find(item => item.id == payload.id);
      task.completed = ! task.completed;
    },

    /**
     * Replace all tasks within the store
     */
    [REPLACE_TASKS]: function(state, payload) {
      state.tasks = payload.tasks;
    }
  },

  actions: {
    /**
     * Fetcyh tasks from end point
     */
    fetchTasks: function({ commit }) {
      Vue.http.get('/api/tasks')
        .then(response => {
          commit(REPLACE_TASKS, response.body);
        }, error => {
          console.log(error);
        });
    },

    /**
     * Persist tasks to server via end point
     */
    saveTasks: function({ state }) {
      Vue.http.put('/api/tasks', state.tasks)
        .then(() => {
          alert('Task list saved!');
        }, error => {
          console.log(error);
        });
    }
  }
});

export default Store;
