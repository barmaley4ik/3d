import Vue from 'vue'

import axios from 'axios'
window.Vue = require('vue');
window.axios = axios;
import VueAxios from 'vue-axios'
Vue.use(VueAxios, axios)

Vue.component('button-example', require('./Front/app.vue').default);

import VModal from 'vue-js-modal/dist/index.nocss.js'
import 'vue-js-modal/dist/styles.css'

Vue.use(VModal)

Vue.directive('focus', {
    // When the bound element is inserted into the DOM...
    inserted: function(el) {
        // Focus the element
        el.focus()
    }
})

import VueTheMask from 'vue-the-mask'
Vue.use(VueTheMask)
let token = document.head.querySelector('meta[name="csrf-token"]');

if (token) {
    window.axios.defaults.headers.common['X-CSRF-TOKEN'] = token.content;
} else {
    console.error('CSRF token not found: https://laravel.com/docs/csrf#csrf-x-csrf-token');
}
new Vue({
    el: '#app',
    data: {

    },
});