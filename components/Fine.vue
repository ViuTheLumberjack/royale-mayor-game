<template>
    <div>
    <table id = "fine">
        <tr>
            <td v-if="lang==='it'"> Giorno </td>
            <td v-else> Day </td>

            <td v-if="lang=='it'"> Evento </td>
            <td v-else> Event </td>

            <td v-for = "t in $route.params.teams" :key = "t"> {{ t }} </td>
        </tr>
        <tr v-for = "i in 10" :key = "i">
            <td> {{ i }} </td>
            <td> {{ $route.params.events[ i - 1] }} </td>
            <td v-for = "(index, t) in $route.params.teams" :key = "index"> {{ $route.params.risultati[t][i-1] }} </td>
            <!--   -->
        </tr>
        <tr>
            <td> CSI </td>
            <td>  </td>
            <td v-for = "(index, t) in $route.params.teams" :key = "index"> {{ csi(t) }} </td>
        </tr>

        <span class = "Vincitore" v-if="lang==='it'">
            Il vincitore e' {{ $route.params.teams[team] }} col punteggio {{ max }}
        </span>
        <span class = "Vincitore" v-else>
            The winner is {{ $route.params.teams[team] }} with a score of {{ max }}
        </span>
    </table>
    </div>
</template>

<script>
export default {
    name: "Fine",
    data(){
        return{
            lang: this.$route.params.lang,
            max: -1,
            team: null
        }
    },
    methods: {
        csi(t){
            var yy = 0
            var yn = 0
            var ny = 0
            //var nn = 0
            var res = 0
            for(var i = 0; i < 10; i++){
                if(this.$route.params.risultati[t][i-1] === true && this.$route.params.events[i] === true){
                    yy++
                } else if(this.$route.params.risultati[t][i-1] === true && this.$route.params.events[i] === false){
                    yn++
                } else if(this.$route.params.risultati[t][i-1] === false && this.$route.params.events[i] === true){
                    ny++
                } else {
                    //nn++
                }
            }

            res = yy/(yy+yn+ny);

            res = res.toFixed(2);

            if(res > this.max) {
                this.max = res;
                this.team = t;
            }

            return res;

        }
    },
    created: function(){
        this.lang = this.$route.params.lang;
    }
}
</script>

<style src="../css/Fine.css">
</style>