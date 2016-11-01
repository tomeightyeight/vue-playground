<template>
  <div>
    <task-list :tasks="tasks" @delete="deleteTask"></task-list>
    <input v-model="newTask">
    <button @click="addTask">Add</button>
    <button @click="fetch">Fetch</button>
    <button @click="save">Save</button>
  </div>
</template>

<script>
'use strict';

import TaskList from '../components/TaskList.vue';
import uuid from '../utils/uuid.js';

export default {
  name: 'task-list-view',

  components: {
    TaskList
  },

  data: function() {
    return {
      newTask: '',

      tasks: [
        { id: uuid(), description: 'Task 1', completed: false },
        { id: uuid(), description: 'Task 2', completed: false },
        { id: uuid(), description: 'Task 3', completed: true }
      ]
    };
  },

  methods: {
    addTask: function() {
      if (this.newTask === '') {
        return;
      }

      this.tasks.push({
        id: uuid(),
        description: this.newTask,
        completed: false
      });

      this.newTask = '';
    },

    fetch: function() {
      this.$http.get('/api/tasks')
        .then(response => {
          this.tasks = response.body;
        }, error => {
          console.log(error);
        });
    },

    save: function() {
      this.$http.put('/api/tasks', this.tasks)
        .then(() => {
          alert('Task list saved!');
        }, error => {
          console.log(error);
        });
    },

    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style scoped>

</style>
