<template>
    <div id="myImage">
      <img v-bind:src = "img_source" alt = "pagina" id="image" class="sfondo">
      <span v-html="button"></span>
    </div>
</template>

<script>
  import { image_info } from '../js/constants'
  import Header from './Header'

  var button_image = require("../assets/avanti.png");
  var image_class = "avantiIMG";
  var button = '<button id = "confirm" v-on:click.prevent="changeImage"><img v-bind:src="' + button_image +'" v-bind:class="' + image_class + '" alt="bottone"></button>';
  var pageNum = 0;
  var currentImage = Header.data().currentLanguage;
  var img_source = require('../assets/italian0.jpg');

  export default {
    name: 'Istruzioni',
    data() {
      return{
        button_image,
        image_class,
        button,
        pageNum,
        currentImage,
        img_source,
      }
    },
    
    computed:{
      changeImage() {

              switch (pageNum) {
                  case 0: 
                      pageNum++;
                      img_source = image_info.currentImage + pageNum + image_info.extension;
                      break;

                  case 1:
                      
                      pageNum++;
                      img_source = image_info.root + image_info.currentImage + pageNum + image_info.extension;
                      if (currentImage === image_info.ITALIAN_IMAGE)
                      button_image = require("../assets/inizia.png");
                      else button_image = require("../assets/start.png");

                      image_class = "iniziaIMG";
                      break;
          
                  case 2:

                      button = '<router-link to="/selezione"/>';
                      break;
                  
              }
          
          }
    }
  }
</script>

<style src="../css/index.css"></style>
