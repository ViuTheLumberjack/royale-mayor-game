import Vue from 'vue'
import Router from 'vue-router'
import Istruzioni from '../components/Istruzioni.vue'
import Header from '../components/Header.vue'
import Selezione from '../components/selezione.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Istruzioni',
      component: Istruzioni
    },
    {
      path: '/header',
      name: 'Header',
      component: Header
    },
    {
      path: '/selezione',
      name: 'Selezione',
      component: Selezione
    }
  ]
})
