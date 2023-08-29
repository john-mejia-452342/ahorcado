<template>
  <div class="container">
    <div class="container_letras">
        <div v-for="(item, i) in letras" :key="i" class="container-items">          
            <div v-for="(letra, j) in item" :key="j" class="container-letras">
                <button>{{ letra }}</button>
            </div>
        </div>
    </div>
    <div class="container-ahorcado">

    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


let letras = ref([
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"], 
    ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"], 
    ["Enviar", "Z", "X", "C", "V", "B", "N", "M","⬅️"] 
    ])
</script>

<style scoped>

.container{
    display: flex;
    padding: 0;
    width: 100vh;
    height: 100vh;
}

.container_letras{
    display: flex;
    flex-direction: column;
}
.container-items{
    display: flex;
    margin: 2px;
}
.container_letras button{
    margin: 2px;
}
</style>
