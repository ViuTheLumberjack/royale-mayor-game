<template>
    <div>
        <span v-if = "$route.params.turn === 10"> Turno Finale </span>
        <span v-else> Turno {{ $route.params.turn }} </span>
        
        <span v-if = "$route.params.evento === true"> Ha nevicato </span>
        <span v-else> Non ha nevicato </span>

        <tr v-for = "(t, index) in $route.params.teams" :key = "t">
            <img v-if = "t === 'big'" :src = "getImage(0)" class="image">
                <!-- Inserisci -->
            <img v-else-if = "t === 'medium'" :src = "getImage(1)" class="image1">
            
            <img v-else :src = "getImage(2)" class="image2">
            <label class="container">
                {{ t }}   
            <span> {{ calculate(index) }}</span>
            </label>
        </tr>

        <router-link v-if = "$route.params.turn === 10 "> <button class="button"> Fine </button> </router-link>
        <router-link v-else :to = "{name: 'Game', params: {first: first, teams : teams, risultati: $route.params.risultati, turn: turn } }"> <button class="button" @click = "nextTurn"> Prossimo Turno </button> </router-link>
    </div>
</template>

<script>
import { it_cities } from '../assets/selezione/index.js'

export default {
    name: "Results",
    data(){
        return{
            teams: this.$route.params.teams,
            turn: this.$route.params.turn,
            first: this.$route.params.first,
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
        nextTurn(){
            this.turn = this.turn + 1;
            this.first = false;
        },
        calculate(index){
            var app = 0;
            // var cont = 0;
            for(var i in 10){
                if(!(this.$route.params.risultati[index][i] === undefined)){
                    app += this.$route.params.risultati[index][i];
                    // cont++;
                }
                    
            }

            return app;
        }
    }

}
</script>

<style>

</style>