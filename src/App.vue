<template>
  <div id="app">
    <task-list :tasks="tasks" @delete="deleteTask"></task-list>
    <input v-model="newTask">
    <button @click.prevent="addTask">Add</button>
    <button @click.prevent="fetch">Fetch</button>
    <button @click.prevent="save">Save</button>
  </div>
</template>

<script>
'use strict';

import TaskList from './components/TaskList.vue';
import uuid from './utils/uuid.js';

export default {
  name: 'app',

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
      this.$http.get('http://bozboz2.tom/api/tasks')
        .then(response => {
          this.tasks = response.body;
        }, error => {
          console.log(error);
        });
    },

    save: function() {
      this.$http.put('http://bozboz2.tom/api/tasks', this.tasks)
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
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 2rem;
  background-color: #eee;
  padding: 2rem;
  border-radius: .5rem;
}

h1 {
  margin-top: 0;
}
</style>
