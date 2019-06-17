import Vue from 'vue'
new Vue ({

    el: '#head',
    data: {        
        title: "Gioco del Sindaco" 
    },
    methods: {    
        setTitle: function (){
            
            if(language === "italian") window.document.title = 'Gioco del Sindaco';
            else window.document.title = "Mayor's Game";
            
        },

        displayText: function (){ 
            
        },

    }
})