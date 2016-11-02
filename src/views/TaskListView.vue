<template>
  <div>
    <task-list :tasks="tasks" @delete="deleteTask"></task-list>
    <input v-model="privateState.newTask">
    <button @click="addTask">Add</button>
    <button @click="fetch">Fetch</button>
    <button @click="save">Save</button>
  </div>
</template>

<script>
'use strict';

import TaskList from '../components/TaskList.vue';
import { mapState } from 'vuex';

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

      tasks: []
    };
  },

  computed: {
    localComputed() {
      //
    },

    ...mapState([
      'tasks'
    ])
  },

  methods: {
    addTask: function() {
      if (this.privateState.newTask === '') {
        return;
      }

      this.$store.commit({
        type: 'addTask',
        description: this.privateState.newTask,
        completed: false
      });

      this.privateState.newTask = '';
    },

    deleteTask: function(id) {
      this.$store.commit({
        type: 'deleteTask',
        id: id
      });
    },

    fetch: function() {
      this.$store.commit('fetchTasks');
    },

    save: function() {
      this.$store.commit('saveTasks');
    }
  }
};
</script>

<style scoped>

</style>
