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
        <div class="ahorcado">
          <div class="base2">
            <img src="src/assets/base2.png" alt="">
          </div>
          <div class="base3">
            <img src="src/assets/base3.png" alt="">
          </div>
          <div class="base1">
            <img src="src/assets/base1.png" alt="">
          </div>
          <div class="base">
            <img src="src/assets/base.png" alt="">
          </div>
        </div>
  
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
  
  .container-ahorcado{
    background-color: white;
    height: 50%;
    width: 70%;
  }
  </style>
  
  