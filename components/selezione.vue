<template>
    <div id="selezione">
        <span class="testo"> NUMERO GRUPPI: {{ groupNumber }} </span>

        <div class="slidecontainer">
            <input type="range" min="3" max="8" value="groupNumber"
                   class="slider" id="sliderRange" @> 
        </div>
         
    </div>
</template>

<script>
var groupNumber = 3;

export default {
    name: "Selezione",
    data(){
        return{
            
        }
    },
}
</script>

<style src="../css/caricadati.css"></style>
<style src="../css/slider.css"></style>
