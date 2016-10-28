<template>
  <div>
    <h1>Task List <span v-show="remaining">({{ remaining }})</span></h1>

    <ul v-if="total">
      <transition-group name="fade">
        <li v-for="(item, index) in tasks" :key="item.id" :class="{ 'completed': item.completed }">
          <span @click="toggleCompleted(item)">{{ item.description }}</span>
          <button @click="deleteTask(index)">X</button>
        </li>
      </transition-group>
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
    remaining: function() {
      return this.totalCompleted();
    },

    total: function() {
      return this.tasks.length;
    }
  },

  methods: {
    totalCompleted: function() {
      return this.tasks.filter(item => {
        return ! item.completed;
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

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
