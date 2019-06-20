<template>
    <div id="myImage">
          <img src="../assets/italian0.jpg" alt="pagina" id="image" class="sfondo">
          <router-link to="/selezione"  ><button id="confirm" @click.prevent="changeImage"><img src="../assets/avanti.png" class="avantiIMG"></button></router-link>
    </div>
</template>

<script>
  import { image_info } from '../js/constants'
  import Header from './Header'

  var pageNum = 0;
  var currentImage = Header.data().currentLanguage;
  var notChangeView = true;

  export default {
    name: 'Istruzioni',
    data() {
      return{
        notChangeView,
      }

    },
    methods:{
      changeImage() {

              switch (pageNum) {
                  case 0: 
                      pageNum++;
                      document.getElementById("image").src = image_info.root + image_info.currentImage + pageNum + image_info.extension;
                      break;
                  case 1:
                      
                      pageNum++;
                      document.getElementById("image").src = image_info.root + image_info.currentImage + pageNum + image_info.extension;
                      if (currentImage === ITALIAN_IMAGE)
                      document.getElementById("confirm").innerHTML = "<img src=\"../assets/inizia.PNG\" class=\"iniziaIMG\">";
                      else document.getElementById("confirm").innerHTML = "<img src=\"../assets/start.png\" class=\"iniziaIMG\">";
                      break;
          
                  case 2:

                      this.notChangeView = false;
                      break;
                  
              }
          
          }
    }
  }
</script>

<style src="../css/index.css"></style>
