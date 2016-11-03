<template>
  <div>{{ message }}</div>
</template>

<script>
'use strict';

export default {
  name: 'async',

  data () {
    return {
      message: 'This component was load asynchronously'
    };
  }
};
</script>

<style scoped>

</style>
