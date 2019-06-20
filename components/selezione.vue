<template>
    <div id="selezione">
        <p class="testo"><b>NUMERO GRUPPI: </b><span id="demo">2</span></p>
        <div class="slidecontainer">
            <input type="range" min="3" max="8" value="3"
                   class="slider" id="sliderRange"> 
        </div>
        <div class="titoli">
            <p class='CittaP'> CITTA' PICCOLA </p>
            <p class="CittaM"> CITTA' MEDIA </p>
            <p class="CittaG"> CITTA' GRANDE </p>
            
        </div>
        <form class="form1"><input type="text" class="nomeG">
            <button type="button" class="smallB" onclick="sendAlert()"><img src="img/smallL.png" class="icon"></button>
            <button type="button" class="mediumB" onclick="sendAlert()"><img src="img/medium.png" class="icon"></button>
            <button type="button" class="bigB" onclick="sendAlert()"><img src="img/big.png" class="icon"></button>
        </form>
        
        <form class="form2"><input type="text" class="nomeG">
            <button type="button" class="smallB" onclick="sendAlert()"><img src="img/small.png" class="icon"></button>
            <button type="button" class="mediumB" onclick="sendAlert()"><img src="img/mediumL.png" class="icon"></button>
            <button type="button" class="bigB" onclick="sendAlert()"><img src="img/big.png" class="icon"></button>
        </form>
        
        <form class="form3"><input type="text" class="nomeG">
            <button type="button" class="smallB" onclick="sendAlert()"><img src="img/small.png" class="icon"></button>
            <button type="button" class="mediumB" onclick="sendAlert()"><img src="img/medium.png" class="icon"></button>
            <button type="button" class="bigB" onclick="sendAlert()"><img src="img/bigL.png" class="icon"></button>
        </form> 
    </div>
</template>
<style src="../css/caricadati.css"></style>
<style src="../css/index.css"></style>
<style src="../css/slider.css"></style>