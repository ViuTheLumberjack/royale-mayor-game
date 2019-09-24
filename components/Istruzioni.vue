<template>
    <div id="myImage">
      <!-- <img v-bind:src = "getImage()" alt = "pagina" id="image" class="sfondo"> -->

      <md-card-media>
      <!-- swiper -->
      <swiper :options="swiperOption">
        <swiper-slide><img v-bind:src = "getImage(0)" alt = "pagina" id="image" class="sfondo"></swiper-slide>
        <swiper-slide><img v-bind:src = "getImage(1)" alt = "pagina" id="image" class="sfondo"></swiper-slide>
        <swiper-slide><img v-bind:src = "getImage(2)" alt = "pagina" id="image" class="sfondo"></swiper-slide>

        <div class="swiper-pagination" slot="pagination"></div>
        <div class="swiper-button-prev" slot="button-prev"></div>
        <div class="swiper-button-next" slot="button-next"></div>
      </swiper>
    </md-card-media>

      <button id="confirm" v-on:click.prevent = "changeImage"><img v-bind:src = "button_image" class="avantiIMG" alt="bottone"></button>
      <!-- <span v-html="button"/> -->
    </div>
</template>

<script>
  // import { image_info } from '../js/constants'
  import Header from './Header'
  import { it_images } from "../assets/istruzioni/index.js"
  import 'swiper/dist/css/swiper.css'

import { swiper, swiperSlide } from 'vue-awesome-swiper'

  var button_image = it_images.avanti;
  var button = '<button id = "confirm" v-on:click.prevent="changeImage"><img v-bind:src="' + button_image +'" class="avantiIMG" alt="bottone"></button>';
  var pageNum = 0;
  var currentImage = Header.data().currentLanguage;
  var img_source = it_images.italian0;

  export default {
    name: 'Istruzioni',
    data() {
      return{
        button_image,
        button,
        pageNum,
        currentImage,
        img_source,
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'progressbar'
          },
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
          }
        }
      }
    },
    components: {
    swiper,
    swiperSlide
    },
    
    methods:{
      changeImage() {
        console.log(pageNum);
              switch (pageNum) {
                  case 0: 
                      pageNum++;
                      document.getElementById("image").src = it_images.italian1;
                      
                      break;

                  case 1:
                      
                      pageNum++;
                      document.getElementById("image").src = it_images.italian2;
                      /* if (currentImage === image_info.ITALIAN_IMAGE)
                      button_image = ;
                      else button_image = ; */

                      image_class = "iniziaIMG";
                      break;
          
                  case 2:

                      button = '<router-link to="/selezione"/>';
                      break;
                  
                  default : 
                    
                  
              }
          
          },
      getImage(number){
        var img_source;

        switch (number) {
                  case 0: 
                      
                      img_source = it_images.italian0;
                      
                      break;

                  case 1:
                      
                      
                      img_source = it_images.italian1;
                      /*if (currentImage === image_info.ITALIAN_IMAGE)
                      button_image = ;
                      else button_image = ;*/

                       // image_class = "iniziaIMG";
                      break;
          
                  case 2:
                    img_source = it_images.italian2;
                  
        }

        return img_source;
      }
    }
  }
</script>

<style src="../css/index.css"></style>
