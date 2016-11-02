'use strict';

import uuid from '../utils/uuid';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import Vue from 'vue';

import {
  fetchTasks,
  saveTasks
} from './Actions';

import {
  ADD_TASK,
  DELETE_TASK,
  TOGGLE_COMPLETED,
  REPLACE_TASKS,
} from './MutationTypes';

Vue.use(VueResource);
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      { id: uuid(), description: 'Task 1', completed: false },
      { id: uuid(), description: 'Task 2', completed: false },
      { id: uuid(), description: 'Task 3', completed: true }
    ]
  },

  getters: {
    totalCompleted (state) {
      return state.tasks.filter(item => {
        return ! item.completed;
      }).length;
    }
  },

  mutations: {
    /**
     * Add a new task to the local store
     */
    [ADD_TASK] (state, payload) {
      state.tasks.push({
        id: uuid(),
        description: payload.description,
        completed: payload.completed
      });
    },

    /**
     * Delete a task from the local store by index
     */
    [DELETE_TASK] (state, payload) {
      state.tasks.splice(payload.index, 1);
    },

    /**
     * Toggle the completed state of a specific task
     */
    [TOGGLE_COMPLETED] (state, payload) {
      const task = state.tasks.find(item => item.id === payload.id);
      task.completed = ! task.completed;
    },

    /**
     * Replace all tasks within the store
     */
    [REPLACE_TASKS] (state, payload) {
      state.tasks = payload.tasks;
    }
  },

  actions: {
    fetchTasks,
    saveTasks
  }
});
