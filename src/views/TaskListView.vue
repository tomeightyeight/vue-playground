<template>
  <div>
    <task-list :tasks="tasks" @deleteTask="deleteTask" @toggleCompleted="toggleCompleted"></task-list>
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

  data () {
    return {
      privateState: {
        newTask: ''
      }
    };
  },

  computed: {
    localComputed () {
      //
    },

    ...mapState([
      'tasks'
    ])
  },

  methods: {
    addTask () {
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

    deleteTask (index) {
      this.$store.commit({
        type: 'deleteTask',
        index: index
      });
    },

    toggleCompleted (id) {
      this.$store.commit({
        type: 'toggleCompleted',
        id: id
      });
    },

    fetch () {
      this.$store.dispatch('fetchTasks');
    },

    save () {
      this.$store.dispatch('saveTasks');
    }
  }
};
</script>

<style scoped>

</style>
