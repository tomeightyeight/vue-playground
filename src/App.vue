<template>
  <div id="app">
    <task-list :list="tasks"></task-list>
    <input v-model="newtask">
    <button @click.prevent="add">Add</button>
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
      newtask: '',

      tasks: [
        { description: 'Task 1', completed: false },
        { description: 'Task 2', completed: false },
        { description: 'Task 3', completed: true }
      ]
    };
  },

  methods: {
    add: function() {
      this.tasks.push({
        description: this.newtask,
        completed: false
      });
    },

    fetch: function() {
      // Fetch tasks from endpoint
    },

    save: function() {
      // Persist tasks object
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
