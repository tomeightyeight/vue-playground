<template>
  <div>
    <task-list :tasks="tasks"></task-list>
    <input v-model="privateState.newTask">
    <button @click="addTask">Add</button>
    <button @click="fetch">Fetch</button>
    <button @click="save">Save</button>
    <button @click="clear">Clear</button>
  </div>
</template>

<script>
'use strict';

import TaskList from '../components/TaskList.vue';
import { mapState } from 'vuex';

import {
  ADD_TASK,
  CLEAR_TASKS
} from '../stores/MutationTypes';

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
        type: ADD_TASK,
        title: this.privateState.newTask,
        completed: false
      });

      this.privateState.newTask = '';
    },

    fetch () {
      this.$store.dispatch('fetchTasks');
    },

    save () {
      this.$store.dispatch('saveTasks');
    },

    clear () {
      this.$store.commit(CLEAR_TASKS);
    }
  }
};
</script>

<style scoped>

</style>
