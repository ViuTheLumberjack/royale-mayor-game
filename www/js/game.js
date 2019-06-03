/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
const urlParams = new URLSearchParams(window.location.search);
const language = urlParams.get('language');

var slider = document.getElementById("PIPPO");
var output = document.getElementById("numGruppi");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
};

setTitle();
output.innerHTML = slider.value;
displayText();
generateForms();

function setTitle(){
    
    if(language === "italian") window.document.title = 'Gioco del Sindaco';
    else window.document.title = "Mayor's Game";
    
}

function displayText(){
    
    
    
}