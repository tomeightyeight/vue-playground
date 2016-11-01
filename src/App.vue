<template>
  <div id="app">
    <ul class="nav">
      <li>
        <router-link to="/">Index</router-link>
      </li>
      <li>
        <router-link to="/task-list">Task List</router-link>
      </li>
    </ul>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
'use strict';

export default {
  name: 'app'
};
</script>

<style scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin: 2rem;
  background-color: #eee;
  padding: 2rem;
  border-radius: .5rem;
}

.nav {
  list-style-type: none;
  margin: 0 0 1rem 0;
  padding: 0;
}

.nav li {
  display: inline-block;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-active {
  opacity: 0;
}
</style>
