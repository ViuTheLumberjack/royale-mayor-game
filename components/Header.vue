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
/*    var italianButton  true,
            englishButton: false,
            root: "../../assets/",*/
    var        ITALIAN_IMAGE= "italian";
    var        ENGLISH_IMAGE= "english";
/*            currentImage : "italian",
            extension: ".jpg",
            pageNum: 0,*/

export default {
    name: 'Header',
    data() {
        
        return{       
            
    }
    },
    methods: {    
        toItalian: function () {
            console.log(ITALIAN_IMAGE);
            this.italianButton = false;
            this.englishButton = true;
        },

        toEnglish: function () {
            console.log(ENGLISH_IMAGE);
            this.italianButton = true;
            this.englishButton = false;
        },
    }
}
</script>
<style src="../css/Header.css">
</style>
