<template>
    <div>
        <h1> Vuoi assicurarti ? </h1>
        <v-text value = "probabilita">
        <tr v-for = "t in teams" :key = "t">
            <img v-if = "t === 'big'" :src = "getImage()">
                <!-- Inserisci -->
            <img v-else-if = "t === 'medium'" :src = "getImage()">
            
            <img v-else :src = "getImage()">

            <button> Si </button>
            <button> No </button>
        </tr>
        
    </div>
</template>

<script>

import { it_cities } from '../assets/selezione/index.js'

var teams = [
    "big",
    "medium",
    "small"
]
var risultati = [
    
]

var turn = 1;

export default {
    name: "Game",
    data(){
        return{

        }
    }
}
</script>

<style>

</style>