<template>
  <div>
    <task-list :tasks="sharedState.tasks" @delete="deleteTask"></task-list>
    <input v-model="privateState.newTask">
    <button @click="addTask">Add</button>
    <button @click="fetch">Fetch</button>
    <button @click="save">Save</button>
  </div>
</template>

<script>
'use strict';

import TaskList from '../components/TaskList.vue';
import Store from '../stores/Store';
import uuid from '../utils/uuid.js';

export default {
  name: 'task-list-view',

  components: {
    TaskList
  },

  data: function() {
    return {
      privateState: {
        newTask: ''
      },

      sharedState: Store.state
    };
  },

  methods: {
    addTask: function() {
      if (this.privateState.newTask === '') {
        return;
      }

      Store.addTask({
        id: uuid(),
        description: this.privateState.newTask,
        completed: false
      });

      this.privateState.newTask = '';
    },

    deleteTask: function(id) {
      Store.deleteTask(id);
    },

    /**
     * Fetch tasks from endpoind - move me to global Store
     */
    fetch: function() {
      this.$http.get('/api/tasks')
        .then(response => {
          this.tasks = response.body;
        }, error => {
          console.log(error);
        });
    },

    /**
     * Save tasks - move me to global Store
     */
    save: function() {
      this.$http.put('/api/tasks', this.tasks)
        .then(() => {
          alert('Task list saved!');
        }, error => {
          console.log(error);
        });
    }
  }
};
</script>

<style scoped>

</style>
