<!-- La selezione rimane in pausa causa problemi con v-for -->
<template>
    <div id="selezione">
        <div class="slidecontainer">
            <input type="range" min="3" max="8" v-bind:value="defaultGroup"
                   class="slider" id="sliderRange"> 
        </div>

        <tr v-for = "(i) in groupNumber" :key = "i">
            <input v-model="message" placeholder="edit me">
            <label>Message is: {{ message }}</label>
        </tr>

        <input type = "button" @click="updateNumber">
        
    </div>
</template>

<script>

var defaultGroup = 5;
var groupNumber = 0;

export default {
    name: "Selezione",
    data(){
        return{
            groupNumber: 5,
            
        }
    },
    methods: {
        updateNumber(){
            groupNumber = document.getElementById("sliderRange").value;
            console.log(groupNumber);
            //this.groupNumber += 1;
        }
    }
    
}
</script>

<style src="../css/caricadati.css"></style>
<style src="../css/slider.css"></style>
