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

  /**
   * Add a new task to the local store
   */
  addTask: function(description, completed = false) {
    this.state.tasks.push({
      id: uuid(),
      description: description,
      completed: completed
    });
  },

  /**
   * Delete a task from the local store by ID
   */
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
