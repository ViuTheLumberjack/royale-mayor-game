var root = "img/";
var ITALIAN_IMAGE = "italian";
var ENGLISH_IMAGE = "english";
var currentImage = "italian";
var extension = ".jpg";

var pageNum = 0;

function toItalian(){   
    currentImage = ITALIAN_IMAGE;
    document.getElementById("image").src = root + currentImage + pageNum + extension;
    document.getElementById("confirm").innerHTML = "<img src=\"img/avanti.png\" class=\"avantiIMG\">";
}

function toEnglish(){
    currentImage = ENGLISH_IMAGE;
    document.getElementById("image").src = root + currentImage + pageNum + extension;
    document.getElementById("confirm").innerHTML = "<img src=\"img/next.png\" class=\"avantiIMG\">";
}

function changeImage() {

    switch (pageNum) {
        case 0: 
            pageNum++;
            document.getElementById("image").src = root + currentImage + pageNum + extension;
            break;
        case 1:
            
            pageNum++;
            document.getElementById("image").src = root + currentImage + pageNum + extension;
            document.getElementById("confirm").innerHTML = "<img src=\"img/inizia.PNG\" class=\"iniziaIMG\">";
            break;

        case 2:

            document.getElementById("confirm").onclick = nextPage();
            document.getElementById("confirm").id = "start";
            break;
        
    }

}

function nextPage(){
    
    window.open("caricadati.html" + "?language=" + currentImage);
    window.close();
    
}