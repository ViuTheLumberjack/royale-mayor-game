<!-- La selezione rimane in pausa causa problemi con v-for -->
<template>
    <div id="selezione">

        <tr v-for = "i in maxPlayers" :key = "i">
            <input v-if="i==1" v-model="message" placeholder="Citta'Piccola" :id="m1">
            <input v-if="i==2" v-model="message" placeholder="Citta'Media" :id="m2">
            <input v-if="i==3" v-model="message" placeholder="Citta'Grande" :id="m3">
            <input v-if="i==4" v-model="message" placeholder="Citta'Piccola" :id="m4" :disabled=dis1>
            <input v-if="i==5" v-model="message" placeholder="Citta'Media" :id="m5" :disabled="dis2">
            <input v-if="i==6" v-model="message" placeholder="Citta'Grande" :id="m6" :disabled="dis3">
            <input v-if="i==7" v-model="message" placeholder="Citta'Piccola" :id="m7" :disabled="dis4">
            <input v-if="i==8" v-model="message" placeholder="Citta'Media" :id="m8" :disabled="dis5">
            <input v-if="i>3" type="radio" name=i v-on="activate(i)" :id="i">
        </tr>

        <router-link to = "{name: 'Game', params: {players : players} }" ></router-link>
        
    </div>
</template>

<script>

export default {
    name: "Selezione",
    data(){
        return{
            maxPlayers: 8,
            players: 3, 
            dis1: true,
            dis2: true,
            dis3: true,
            dis4: true,
            dis5: true
        }
    },
    methods: {
        changePlayers(){
            players = players
        },
        activate(i){
            if(i==4) {
                dis1=false
                dis2=true
                dis3=true
                dis4=true
                dis5=true
            }else if(i==5){
                dis1=false
                dis2=false
                dis3=true
                dis4=true
                dis5=true
            }else if(i==5){
                dis1=false
                dis2=false
                dis3=false
                dis4=true
                dis5=true
            }else if(i==5){
                dis1=false
                dis2=false
                dis3=false
                dis4=false
                dis5=true
            }else if(i==5){
                dis1=false
                dis2=false
                dis3=false
                dis4=false
                dis5=false
            }
        }

    }
    
}
</script>

<style src="../css/caricadati.css"></style>
<style src="../css/slider.css"></style>
