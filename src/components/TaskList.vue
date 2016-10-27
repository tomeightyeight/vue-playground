<template>
  <div>
    <h1>Task List <span v-show=" ! remaining">({{ totalItems }})</span></h1>

    <ul v-if=" ! remaining">
      <li v-for="(item, index) in tasks" :class="{ 'completed': item.completed }">
        <span @click="toggleCompleted(item)">{{ item.description }}</span>
        <button @click="deleteTask(item)">X</button>
      </li>
    </ul>

    <p v-else>There are no tasks to display.</p>
  </div>
</template>

<script>
'use strict';

export default {
  name: 'task-list',

  props: ['tasks'],

  computed: {
    totalItems: function() {
      return this.tasks.length;
    },

    remaining: true
  },

  methods: {
    totalCompleted: function() {
      return this.tasks.filter(item => {
        return item.completed;
      }).length;
    },

    toggleCompleted: function(item) {
      item.completed = ! item.completed;
    },

    inProgress: function(item) {
      return ! item.completed;
    },

    deleteTask: function(index) {
      this.$emit('delete', index);
    }
  }
};
</script>

<style scope>
ul {
  list-style-type: none;
}

.completed {
  text-decoration: line-through;
}
</style>
