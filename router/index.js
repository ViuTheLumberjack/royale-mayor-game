import Vue from 'vue'
import Router from 'vue-router'
import Istruzioni from '../components/Istruzioni.vue'
import Header from '../components/Header.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Istruzioni',
      component: Istruzioni
    },
    {
      path: '/',
      name: 'Header',
      component: Header
    }
  ]
})
