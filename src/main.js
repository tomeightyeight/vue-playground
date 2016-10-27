import Vue from 'vue';
import VueResource from 'vue-resource';
import App from './App';

/* eslint-disable no-new */
new Vue({
  el: '#app',

  template: '<App/>',

  components: { App },

  http: {
    root: 'http://bozboz2.tom/api',
    headers: {
      //
    }
  }
});

Vue.use(VueResource);
