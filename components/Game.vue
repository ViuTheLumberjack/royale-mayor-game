<template>
    <div>
        <span> Turno {{ turn }} </span>
        <span> Probabilita' precipitazioni: {{ probabilita }} % </span>
        <span> Vuoi assicurarti ? </span>
        <tr v-for = "(t, index) in teams" :key = "t">
            <img v-if = "t === 'big'" :src = "getImage(0)">
                <!-- Inserisci -->
            <img v-else-if = "t === 'medium'" :src = "getImage(1)">
            
            <img v-else :src = "getImage(2)">

            <input type = "checkbox"> 

            <!-- 
            <button id = "yes" :disabled = "clicked" v-on:click = "confirmChoice(this.id, index)"> Si </button>
            <button id = "no" :disabled = "clicked" v-on = "confirmChoice(this.id, index)"> No </button>
            -->
        </tr>
        
        <router-link :to = "{ name: 'Results', params: {teams : teams, roundResults: risultati, turn: turno } }"> <button @click = "save"> NoN </button> </router-link> 

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

<style>

</style>