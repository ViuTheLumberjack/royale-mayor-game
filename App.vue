<template>
  <div id="app" >
    <Header/>
    <router-view name="Header"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App'
}
</script>