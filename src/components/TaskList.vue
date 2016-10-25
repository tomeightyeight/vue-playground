<template>
  <div>
    <h1>Task List <span v-if="">({{ totalItems }})</span></h1>

    <ul>
      <li :class="{ 'completed': item.completed }" v-for="item in list" @click="toggleCompleted(item)">{{ item.description }}</li>
    </ul>
  </div>
</template>

<script>
'use strict'

export default {
  name: 'task-list',

  props: ['list'],

  computed: {
    totalItems: function (item) {
      return this.list.filter(item => {
        return !item.completed
      }).length
    }
  },

  methods: {
    toggleCompleted: function (item) {
      item.completed = !item.completed
    },

    deleteItem: function (item) {

    }
  }
}
</script>

<style scope>
ul {
  list-style-type: none;
}

.completed {
  text-decoration: line-through;
}
</style>
