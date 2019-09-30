<template>
    <div>
        <tr>
            <td> Giorno </td>
            <td> Evento </td>
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
    </div>
</template>

<script>
export default {
    name: "Fine",
    data(){
        return{

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

            return res;

        }
    }
}
</script>

<style>

</style>