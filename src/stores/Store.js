'use strict';

import uuid from '../utils/uuid.js';

export default {
  state: {
    tasks: [
      { id: uuid(), description: 'Task 1', completed: false },
      { id: uuid(), description: 'Task 2', completed: false },
      { id: uuid(), description: 'Task 3', completed: true }
    ]
  },

  addTask: function(task) {
    this.state.tasks.push(task);
  },

  deleteTask: function(id) {
    this.state.tasks = this.state.tasks.filter(item => {
      return item.id !== id;
    });
  },

  /**
   * Fetch tasks from end point
   */
  fetchTasks: function() {
    this.$http.get('/api/tasks')
      .then(response => {
        this.state.tasks = response.body;
      }, error => {
        console.log(error);
      });
  },

  /**
   * Persist tasks to server via end point
   */
  saveTasks: function() {
    this.$http.put('/api/tasks', this.state.tasks)
      .then(() => {
        alert('Task list saved!');
      }, error => {
        console.log(error);
      });
  }
};
