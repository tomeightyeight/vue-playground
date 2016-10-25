<template>
  <div id="app">
    <task-list :list="tasks"></task-list>
  </div>
</template>

<script>
'use strict'

import TaskList from './components/TaskList.vue'

export default {
  name: 'app',

  components: {
    TaskList
  },

  data: function () {
    return {
      tasks: [
        { description: 'Task 1', completed: false },
        { description: 'Task 2', completed: false },
        { description: 'Task 3', completed: true }
      ]
    }
  }
}
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
