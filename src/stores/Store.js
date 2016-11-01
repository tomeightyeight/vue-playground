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
  }
};
