<template>
  <div class="container">
    <div class="container_letras">
        <div v-for="(item, i) in letras" :key="i">
            <div><button>{{ item }}</button></div>

        </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';


let letras = ref(["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P", "A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ", "Enviar", "Z", "X", "C", "V", "B", "N", "M","⬅️"])
</script>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
