<template>
    <div id="myImage">
      <img v-bind:src = "img_source" alt = "pagina" id="image" class="sfondo">
      <span v-html="button"></span>
    </div>
</template>

<script>
  import { image_info } from '../js/constants'
  import Header from './Header'
  var button_image = "../assets/avanti.png"
  var image_class = "avantiIMG"
  var button = '<button id = "confirm" @click.prevent="changeImage"><img src="' + button_image + '" class="' + image_class +'"></button>'
  var pageNum = 0;
  var currentImage = Header.data().currentLanguage;
  var img_source = '../assets/italian0.jpg'

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
      changeImage: function() {

              switch (pageNum) {
                  case 0: 
                      pageNum++;
                      img_source = image_info.currentImage + pageNum + image_info.extension;
                      break;

                  case 1:
                      
                      pageNum++;
                      img_source = image_info.root + image_info.currentImage + pageNum + image_info.extension;
                      if (currentImage === ITALIAN_IMAGE)
                      button_image = "../assets/inizia.PNG";
                      else button_image = "../assets/start.png";

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
