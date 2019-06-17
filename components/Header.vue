<template>
    <div>
        <img src='../assets/bordo.png' class="bordo">
        <p> {{ title }} </p>
        <nav>
            <button id="italian" @click="toItalian" :disabled="italianButton"><img src="../assets/IT.png" class="ButtonIMG"></button>
            <button id="english" @click="toEnglish" :disabled="englishButton"><img src="../assets/ENG.jpg" class="ButtonIMG"></button>     
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
/* test */
</script>
<style src="../css/Header.css">
</style>
