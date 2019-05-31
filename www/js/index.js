var root = "img/";
var italianImage = "italian";
var englishImage = "english";
var currentImage = "italian";
var extension = ".jpg";

var pageNum = 0;

function toItalian(){
    
    currentImage = italianImage;
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
            document.getElementById("confirm").onclick = "nextPage()";
            break;
    }

}

function nextPage(){
    
    window.open("caricamento.html");
    
}