<template>
  <div id="app" >
    <Header/>
    <Istruzioni/>
    <!-- <router-view/> -->
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Istruzioni from './components/Istruzioni.vue'

export default {
  name: 'App',
  components: {Header, Istruzioni}
}
</script>