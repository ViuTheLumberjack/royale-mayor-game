<template>
    <div id = "head">
        <img src='../assets/bordo.png' class="bordo">
        <nav>
            <button id="italian" v-on:click.prevent="toItalian" :disabled="italianButton"><img src="../assets/IT.png" class="ButtonIMG"></button>
            <button id="english" v-on:click.prevent="toEnglish" :disabled="englishButton"><img src="../assets/ENG.jpg" class="ButtonIMG"></button>     
        </nav>
    </div>
</template>

<script src="../js/header.js">
export default {
    name: 'Header'
}
/* test */
</script>
<style src="../css/Header.css">
</style>
