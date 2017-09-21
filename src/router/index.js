import Router from 'vue-router'
import Vue from 'vue'

Vue.use(Router)

export default new Router({
    mode: 'hash',
    scrollBehavior: () => ({ y: 0 }),
   
});