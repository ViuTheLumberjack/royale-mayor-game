<template>
    <div>
        <img src='../assets/bordo.png'/>
        <p> {{ title }} </p>
        <nav>
            <button id="italian" @click="toItalian"><img src="../assets/IT.png" class="ButtonIMG"></button>
            <button id="english" @click="toEnglish"><img src="../assets/ENG.jpg" class="ButtonIMG"></button>     
        </nav>
    </div>
</template>

<script>
export default {
    name: 'Header'
}
</script>
