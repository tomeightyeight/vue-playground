<template>
  <hello>
    <h1 slot="header">Here is some slot content</h1>
    <p slot="footer">Here is some slot content</p>
  </hello>
</template>

<script>
'use strict';

import Hello from '../components/Hello';

export default {
  name: 'index-view',

  components: {
    Hello
  }
};
</script>

<style scoped>

</style>
