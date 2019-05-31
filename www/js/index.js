var root = "img/";
var ITALIAN_IMAGE = "italian";
var ENGLISH_IMAGE = "english";
var currentImage = "italian";
var extension = ".jpg";

var pageNum = 0;

function toItalian(){
    
    currentImage = ITALIAN_IMAGE;
    document.getElementById("image").src = root + currentImage + pageNum + extension;
    console.log(currentImage + pageNum + extension);
}

function toEnglish(){
    
    alert("In Sviluppo");
    
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
            document.getElementById("confirm").innerHTML = "Inizio";
            break;

        case 2:

            document.getElementById("confirm").onclick = nextPage();
            break;
        
    }

}

function nextPage(){
    
    window.open("caricamento.html");
    window.close();
    
}