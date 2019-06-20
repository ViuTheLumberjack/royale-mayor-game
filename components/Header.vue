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

    import { imageName } from '../js/constants'
    var italianButton = true;
    var englishButton = false;
    /*         root: "../../assets/",
    
           currentImage : "italian",
            extension: ".jpg",
            pageNum: 0,*/

export default {
    name: 'Header',
    data() {
        
        return{  
            italianButton,
            englishButton    
    }
    },
    methods: {    
        toItalian: function () {
            console.log(imageName.ITALIAN_IMAGE);
            this.italianButton = true;
            this.englishButton = false;
        },

        toEnglish: function () {
            console.log(imageName.ENGLISH_IMAGE);
            this.italianButton = false;
            this.englishButton = true;
        },
    }
}

</script>

<style src="../css/Header.css">
</style>
