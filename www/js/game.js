/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//const urlParams = new URLSearchParams(window.location.search);
//const language = urlParams.get('language');

var rangeslider = document.getElementById("sliderRange");
var output = document.getElementById("demo");
output.innerHTML = rangeslider.value;

rangeslider.oninput = function() {
  output.innerHTML = this.value;
};

//var output = document.getElementById("numGruppi");

//setTitle();
//displayText();
//generateForms();

function setTitle(){
    
    if(language === "italian") window.document.title = 'Gioco del Sindaco';
    else window.document.title = "Mayor's Game";
    
}

function displayText(){
    
    
    
}

function sendAlert()
{
    alert("Selezione Bloccata")
}

function setImageS()
{
    
}

function setImageM()
{
    
}

function setImageB()
{
    
}

