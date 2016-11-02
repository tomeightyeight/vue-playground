'use strict';

import uuid from '../utils/uuid.js';
import Vuex from 'vuex';
import Vue from 'vue';

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
    addTask: function(state, payload) {
      state.tasks.push({
        id: uuid(),
        description: payload.description,
        completed: payload.completed
      });
    },

    /**
     * Delete a task from the local store by ID
     */
    deleteTask: function(state, payload) {
      state.tasks = state.tasks.filter(item => {
        return item.id !== payload.id;
      });
    },

    /**
     * Fetch tasks from end point
     */
    fetchTasks: function(state) {
      this.$http.get('/api/tasks')
        .then(response => {
          state.tasks = response.body;
        }, error => {
          console.log(error);
        });
    },

    /**
     * Persist tasks to server via end point
     */
    saveTasks: function(state) {
      this.$http.put('/api/tasks', state.tasks)
        .then(() => {
          alert('Task list saved!');
        }, error => {
          console.log(error);
        });
    }
  }
});

export default Store;
