/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
//const urlParams = new URLSearchParams(window.location.search);
//const language = urlParams.get('language');

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
document.getElementById("demo").innerHTML = document.getElementById("myRange").value;


slider.oninput = function() {
  output.innerHTML = this.value;
};
