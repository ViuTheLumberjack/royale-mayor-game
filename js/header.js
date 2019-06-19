import Vue from 'vue'
import Header from '../components/Header.vue'

var vm = new Vue ({

    el: '#head',
    data: {        
        italianButton: true,
        englishButton: false,
        root: "../../assets/",
        ITALIAN_IMAGE: "italian",
        ENGLISH_IMAGE: "english",
        currentImage : "italian",
        extension: ".jpg",
        pageNum: 0,
    },
    computed: {    
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
})