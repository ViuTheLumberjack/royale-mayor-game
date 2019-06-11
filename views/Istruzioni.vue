<template>
    <div id="myImage">
           <div id="language">
              <button id="italian" @click="toItalian"><img src="../../assets/IT.png" class="ButtonIMG"></button>
              <button id="english" @click="toEnglish"><img src="../../assets/ENG.jpg" class="ButtonIMG"></button>
           </div>
           <img src="../../assets/italian0.jpg" alt="pagina" id="image" class="sfondo">
           <button id="confirm" v-on:click.prevent="changeImage"><img src="../../assets/avanti.png" class="avantiIMG"></button>
    </div>
</template>

<script >
export default {
  name: 'HelloWorld'
}
</script>
