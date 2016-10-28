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

export default {
  name: 'app',

  components: {
    TaskList
  },

  data: function() {
    return {
      newTask: '',

      tasks: [
        { description: 'Task 1', completed: false },
        { description: 'Task 2', completed: false },
        { description: 'Task 3', completed: true }
      ]
    };
  },

  methods: {
    addTask: function() {
      this.tasks.push({
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
      // Persist tasks object
    },

    deleteTask: function(index) {
      this.tasks.splice(index, 1);
    }
  }
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
