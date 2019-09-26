<template>
    <div>
        <div class="testo">
            <h1 class="turno"> Turno {{ turn }} </h1>
            <h1 class="probabilita">Probabilita' precipitazioni: {{ probabilita }} % </h1>
            <h1 class="assicuri"> cliccare la casella della rispettiva citta' per assicurarsi </h1>
        </div>
        <tr v-for = "(t) in teams" :key = "t">
            <img v-if = "t === 'big'" :src = "getImage(0)" class="image">
                <!-- Inserisci -->
            <img v-else-if = "t === 'medium'" :src = "getImage(1)" class="image1">
            
            <img v-else :src = "getImage(2)" class="image2">
            <label class="container">
                <input type = "checkbox"> 
                <span class="checkmark"></span>
            </label>
            <!-- 
            <button id = "yes" :disabled = "clicked" v-on:click = "confirmChoice(this.id, index)"> Si </button>
            <button id = "no" :disabled = "clicked" v-on = "confirmChoice(this.id, index)"> No </button>
            -->
        </tr>
        
        <router-link :to = "{ name: 'Results', params: {teams : teams, roundResults: risultati, turn: turno } }"> <button @click = "save" class="button"> Avanti </button> </router-link> 

    </div>
</template>

<script>

import { it_cities } from '../assets/selezione/index.js'


export default {
    name: "Game",
    data(){
        return{
            teams: [
                "big",
                "medium",
                "small"
            ],
            turn: 1,
            probabilita: Math.floor(Math.random() * 100),
            clicked: false,
            index: 0,
            risultati: []
        }
    },
    methods: {
        getImage(number){
            switch(number){
                case 0:
                    return it_cities.big;
                case 1:
                    return it_cities.medium;
                case 2:
                    return it_cities.small;
            }
        },
        confirmChoice(id, index){
            if(id === "yes") risultati[index][turn] = 'Y';
            else risultati[index][turn] = 'N';
            clicked = true;
        }, 
        save(){
            
        }
    }
}
</script>

<style src="../css/Game.css"></style>
