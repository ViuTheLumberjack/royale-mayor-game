<template>
    <div id="myImage">
          <img src="../assets/italian0.jpg" alt="pagina" id="image" class="sfondo">
          <button id="confirm" v-on:click.prevent="changeImage"><img src="../assets/avanti.png" class="avantiIMG"></button>
    </div>
</template>

<script>
export default {
  name: 'Istruzioni',
  data() {

  },
  methods:{
    
  }
}
</script>

<style src="../css/index.css">
</style>
