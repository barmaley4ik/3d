import Vue from 'vue'

window.Vue = require('vue');


Vue.component('button-example', require('./Front/app.vue').default);
import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'
Vue.use(VModal)
Vue.directive('focus', {
  // When the bound element is inserted into the DOM...
  inserted: function (el) {
    // Focus the element
    el.focus()
  }
})
import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
new Vue({
    el: '#app',
    data: {
    
    },
});