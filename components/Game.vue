<template>
    <div>
        <span> Turno {{ turn }} </span>
        <span> Probabilita' precipitazioni: {{ probabilita }} % </span>
        <span> Vuoi assicurarti ? </span>
        <tr v-for = "(t, index) in teams" :key = "t">
            <img v-if = "t === 'big'" :src = "getImage(index)" >
            
            <img v-else-if = "t === 'medium'" :src = "getImage(index)">
            
            <img v-else :src = "getImage(index)">
            <span> {{ t }} </span>

            <input :id = "index" type = "checkbox" @click = "save(index)"> 

            <!-- 
            <button id = "yes" :disabled = "clicked" v-on:click = "confirmChoice(this.id, index)"> Si </button>
            <button id = "no" :disabled = "clicked" v-on = "confirmChoice(this.id, index)"> No </button>
            -->
        </tr>
        
        <router-link :to = "{ name: 'Results', params: {teams : teams, roundResults: risultati, turn: turno } }"> <button> NoN </button> </router-link> 

    </div>
</template>

<script>

import { it_cities } from '../assets/selezione/index.js'



export default {
    name: "Game",
    props: [  ],
    data(){
        return{
            teams: [
                "big",
                "medium",
                "small"
            ],
            turn: 1,
            probabilita: Math.floor(Math.random() * 100),
            index: 0,
            risultati: [teams.size()],
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
        save(index){
            
            
            this.risultati[index][this.turn] = 'Y';
            
                // clicked = true;
            
        },
        
    }
}
</script>