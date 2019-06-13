import '../css/index.css'
import Vue from 'vue'
import Istruzioni from '../components/Istruzioni'

var root = "../../assets/";
var ITALIAN_IMAGE = "italian";
var ENGLISH_IMAGE = "english";
var currentImage = "italian";
var extension = ".jpg";
var pageNum = 0;

new Vue({
    el= '#myImage',
    data: {
        italianButton = true,
        englishButton = false
    },
    methods:{
        toItalian: function () {
            currentImage = ITALIAN_IMAGE;
            document.getElementById("image").src = root + currentImage + pageNum + extension;
            if (pageNum === 2)
                document.getElementById("confirm").innerHTML = "<img src=\"../../assets/inizia.PNG\" class=\"avantiIMG\">";
            else
                document.getElementById("confirm").innerHTML = "<img src=\"../../assets/avanti.png\" class=\"avantiIMG\">";
        },

        toEnglish: function () {
            currentImage = ENGLISH_IMAGE;
            document.getElementById("image").src = root + currentImage + pageNum + extension;
            if (pageNum === 2)
                document.getElementById("confirm").innerHTML = "<img src=\"../../assets/start.png\" class=\"avantiIMG\">";
            else
                document.getElementById("confirm").innerHTML = "<img src=\"../../assets/next.png\" class=\"avantiIMG\">";
        },

        changeImage: function () {

            switch (pageNum) {
                case 0: 
                    pageNum++;
                    document.getElementById("image").src = root + currentImage + pageNum + extension;
                    break;
                case 1:
                    
                    pageNum++;
                    document.getElementById("image").src = root + currentImage + pageNum + extension;
                    if (currentImage === ITALIAN_IMAGE)
                    document.getElementById("confirm").innerHTML = "<img src=\"../../assets/inizia.PNG\" class=\"iniziaIMG\">";
                    else document.getElementById("confirm").innerHTML = "<img src=\"../../assets/start.png\" class=\"iniziaIMG\">";
                    break;
        
                case 2:
        
                    document.getElementById("confirm").onclick = nextPage();
                    document.getElementById("confirm").id = "start";
                    break;
                
            }
        
        }
    }

})

function nextPage(){
    
    window.open("caricadati.html" + "?language=" + currentImage);
    window.close();
    
}