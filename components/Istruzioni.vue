<template>
    <div id="myImage">
      <img v-bind:src = "img_source" alt = "pagina" id="image" class="sfondo">
      <button id = "confirm" v-on:click.prevent="changeImage"><img v-bind:src="button_image" class="avantiIMG" alt="bottone"></button>
      <!-- <span v-html="button"/> -->
    </div>
</template>

<script>
  // import { image_info } from '../js/constants'
  import Header from './Header'
  import { it_images } from "../assets/istruzioni/index.js"

  var button_image = it_images.avanti;
  var button = '<button id = "confirm" v-on:click.prevent="changeImage"><img v-bind:src="' + button_image +'" class="avantiIMG" alt="bottone"></button>';
  var pageNum = 0;
  var currentImage = Header.data().currentLanguage;
  var img_source = it_images.italian0;

  export default {
    name: 'Istruzioni',
    data() {
      return{
        button_image: it_images.avanti,
        button,
        pageNum,
        currentImage,
        img_source,
      }
    },
    
    methods:{
      changeImage() {

              switch (pageNum) {
                  case 0: 
                      pageNum++;
                      img_source = it_images.italian1;
                      break;

                  case 1:
                      
                      pageNum++;
                      img_source = it_images.italian2;
                      /*if (currentImage === image_info.ITALIAN_IMAGE)
                      button_image = ;
                      else button_image = ;*/

                       // image_class = "iniziaIMG";
                      break;
          
                  case 2:

                      button = '<router-link to="/selezione"/>';
                      break;
                  
                  default : 
                    console.log(pageNum);
                  
              }
          
          }
    }
  }
</script>

<style src="../css/index.css"></style>
