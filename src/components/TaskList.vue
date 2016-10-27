<template>
  <div>
    <h1>Task List <span v-show=" ! remaining">({{ totalItems }})</span></h1>

    <ul v-if=" ! remaining">
      <li :class="{ 'completed': item.completed }" v-for="item in list"><span @click="toggleCompleted(item)">{{ item.description }}</span><button @click="$parent.tasks.$remove(item)">X</button></li>
    </ul>

    <p v-else>There are no tasks to display.</p>
  </div>
</template>

<script>
'use strict';

export default {
  name: 'task-list',

  props: ['list'],

  computed: {
    totalItems: function() {
      return this.list.length;
    },

    remaining: true
  },

  methods: {
    totalCompleted: function() {
      return this.list.filter(item => {
        return item.completed;
      }).length;
    },

    toggleCompleted: function(item) {
      item.completed = ! item.completed;
    },

    inProgress: function(item) {
      return ! item.completed;
    },

    remove: function() {
      // this.$parent.tasks.$remove(item);
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
