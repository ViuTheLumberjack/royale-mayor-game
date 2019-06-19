// import '../css/index.css'
import Vue from 'vue'
import header from '../js/header.js'

new Vue({
    el: '#myImage',
    data: {
        
    },
    methods:{
        changeImage: function () {

            switch (pageNum) {
                case 0: 
                    pageNum++;
                    document.getElementById("image").src = header.root + header.currentImage + header.pageNum + header.extension;
                    break;
                case 1:
                    
                    pageNum++;
                    document.getElementById("image").src = header.root + header.currentImage + header.pageNum + header.extension;
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