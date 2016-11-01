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

      Store.addTask(this.privateState.newTask, false);

      this.privateState.newTask = '';
    },

    deleteTask: function(id) {
      Store.deleteTask(id);
    },

    fetch: function() {
      Store.fetchTasks();
    },

    save: function() {
      Store.saveTasks();
    }
  }
};
</script>

<style scoped>

</style>
