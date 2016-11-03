<template>
  <div>
    <h1>Task List <span v-show="remaining">({{ remaining }})</span></h1>

    <ul v-if="total">
      <transition-group name="fade">
        <li :class="{ 'completed': item.completed }"
            v-for="(item, index) in tasks"
            :key="item.id"
        >
          <span @click="toggleCompleted(item.id)">{{ item.description }}</span>
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
    remaining () {
      return this.$store.getters.totalCompleted;
    },

    total () {
      return this.tasks.length;
    }
  },

  methods: {
    inProgress (item) {
      return ! item.completed;
    },

    deleteTask (index) {
      this.$emit('deleteTask', index);
    },

    toggleCompleted (id) {
      this.$emit('toggleCompleted', id);
    },
  }
};
</script>

<style lang="scss" scoped>
h1 {
  margin-top: 0;
}

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
