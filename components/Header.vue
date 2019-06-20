<template>
    <div id = "head">
        <img src='../assets/bordo.png' class="bordo">
        <nav>
            <button id="italian" v-on:click.prevent="toItalian" :disabled="italianButton"><img src="../assets/IT.png" class="ButtonIMG"></button>
            <button id="english" v-on:click.prevent="toEnglish" :disabled="englishButton"><img src="../assets/ENG.jpg" class="ButtonIMG"></button>     
        </nav>
    </div>
</template>

<script>

    import { image_info } from '../js/constants'
    var italianButton = true;
    var englishButton = false;
    var currentLanguage = image_info.ITALIAN_IMAGE;

    export default {
        name: 'Header',
        data() {
            return{  
                currentLanguage,    
            }
        },
        methods: {    
            toItalian: function () {
                console.log(image_info.ITALIAN_IMAGE);
                this.italianButton = true;
                this.englishButton = false;
            },

            toEnglish: function () {
                console.log(image_info.ENGLISH_IMAGE);
                this.italianButton = false;
                this.englishButton = true;
            },
        }
    }

</script>

<style src="../css/Header.css">
</style>
