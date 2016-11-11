'use strict';

import { REPLACE_TASKS } from './MutationTypes';

/**
 * Fetch tasks from end point
 */
export const fetchTasks = function ({ commit }) {
  fetch('/api/todos', {
    method: 'GET'
  })
  .then(response => response.json())
  .then(response => {
    commit({
      type: REPLACE_TASKS,
      tasks: response
    });
  })
  .catch(error => {
    console.log(error);
  });
};

/**
 * Persist tasks to server via end point
 */
export const saveTasks = function ({ state }) {
  fetch('/api/todo', {
    method: 'PUT',
    body: state.tasks
  })
  .then(() => {
    console.log('task list saved');
  })
  .catch(error => {
    console.log(error);
  });
};
