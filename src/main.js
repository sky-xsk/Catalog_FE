import 'element-ui/lib/theme-default/index.css'

import App from './App'
import ElementUI from 'element-ui'
import Router from 'vue-router'
import Vue from 'vue'
import VueResource from 'vue-resource'
import Vuex from 'vuex'
import router from './router'
import store from './store'

Vue.use(VueResource)
Vue.use(ElementUI)
Vue.use(Vuex)

new Vue({
    el: '#app',
    router,
    store,
    template: '<App/>',
    components: { App }
})