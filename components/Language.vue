<template>
    <div id=lingua>
        <h1 id="Testo"> SELEZIONA LA LINGUA </h1>
        <h1 id="Testo"> CHOOSE YOUR LANGUAGE </h1>
    	<router-link :to="{name:'Istruzioni', params: {lang : lang} }"><img id= "IT" src="../assets/header/IT.png" class="ButtonIMG" @click="changeLanguage('it')"></router-link>
        <router-link :to="{name:'Istruzioni', params: {lang : lang} }"><img id="ENG" src="../assets/header/ENG.jpg" class="ButtonIMG" @click="changeLanguage('eng')"></router-link>
    </div>
</template>

<script>
export default {
    name: "Language",
    data(){
        return{
            lang: "it"
        }
    },
    methods: {

        changeLanguage(lingua){

            this.lang = lingua

        }

    }
 
}
</script>

<style  src="../css/Language.css"></style>