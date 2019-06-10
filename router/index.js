import Vue from 'vue'
import Router from 'vue-router'
import Istruzioni from '../components/views/Istruzioni.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Istruzioni',
      component: Istruzioni
    }
  ]
})
