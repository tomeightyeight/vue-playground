<template>
  <div>Hello, {{ name }}</div>
</template>

<script>
'use strict';

export default {
  name: 'hello',

  data () {
    return {
      defaultName: 'World'
    };
  },

  computed: {
    name: function() {
      if (typeof this.$route.params.name !== 'undefined') {
        return this.$route.params.name;
      }

      return this.defaultName;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
