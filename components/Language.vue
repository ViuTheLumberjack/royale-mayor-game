<template>
    <div id=lingua>
    	<router-link :to="{name:'Istruzioni', params: {lang : lang} }"><img src="../assets/header/IT.png" class="ButtonIMG" @click="changeLanguage('it')"></router-link>
        <router-link :to="{name:'Istruzioni', params: {lang : lang} }"><img src="../assets/header/ENG.jpg" class="ButtonIMG" @click="changeLanguage('eng')"></router-link>
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

<style>

</style>