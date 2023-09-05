<template>
  <div class="container">
    <div class="container_letras">
      <div v-for="(item, i) in letras" :key="i" class="container-items">
        <div v-for="(letra, j) in item" :key="j" class="container-letras">
          <button :value="letra" @click="seleccionarLetra(letra)">
            {{ letra }}
          </button>
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
        <div class="soga">
          <img src="src/assets/soga.png" alt="">
        </div>
        <div class="cabeza">
          <img src="src/assets/cabeza.png" alt="">
        </div>
        <div class="cuerpo">
          <img src="src/assets/cuerpo.png" alt="">
        </div>
        <div class="brazo-izq">
          <img src="src/assets/brazo-izq.png" alt="">
        </div>
        <div class="brazo-der">
          <img src="src/assets/brazo-der.png" alt="">
        </div>
        <div class="pierna-izq">
          <img src="src/assets/pierna-izq.png" alt="">
        </div>
        <div class="pierna-der">
          <img src="src/assets/pierna-der.png" alt="">
        </div>
        <div class="base1">
          <img src="src/assets/base1.png" alt="">
        </div>
        <div class="base">
          <img src="src/assets/base.png" alt="">
        </div>
      </div>
      <div class="container-letras-ahorcado">
      </div>
      <div class="mensaje">

      </div>
        <button @click="generarAleatorio">Nuevo Juego</button>
        <label for="" style="color: white;">{{ aleatorio }}</label>
      </div>
      <div>
        <ul id="horizontal-list"> 
          <button v-for="item in palabra_escrita" type="button" class="btn btn-primary cuadro">
          <span class="badge">{{ item }}</span></button>
        </ul>
      </div>
  </div>
</template>

<script setup>
import { ref} from 'vue';

const letras = ref([
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
  ["Z", "X", "C", "V", "B", "N", "M"],
]);

const frutas = ref([
  "Manzana",
  "Banano",
  "Naranja",
  "Uva",
  "Fresa",
  "Sandia",
  "Kiwi",
  "Melocoton",
  "Mango",
  "Papaya",
  "Limon",
  "Cereza",
  "Arandano",
  "Pera",
  "Frambuesa",
]);

let game = ref(true)
let win = ref(false)
let lost = ref(false)
let contador_aciertos = ref(0)
let contador_errores = ref(0)
let aleatorio = ref(0)
let palabra_escrita = ref([])
let botones = ref([])
let color_botones = ref([])

function generarAleatorio() {
  palabra_escrita.value = []
  game.value = true
  aleatorio.value = Math.floor(Math.random()*frutas.value.length)
  console.log(aleatorio.value);
  for (let i = 0; i < frutas.value[aleatorio.value].length; i++) {
    palabra_escrita.value.push('')
  }
  

}

function created() {
  generarAleatorio()
  
}






let mensaje = ref('');



</script>


<style scoped>
.perdiste {
  text-align: center;
  font-size: 24px;
  color: red;
  margin-top: 20px;
}
.ahorcado{
  position: relative;
  width: 100%;
  height: 100%;
}
.base{
  position: absolute;
  top: 45%;
}
.base1{
  position: absolute;
  top: 7%;
  left: 2%;
  height: 40%;
}
.base1 img{
  width: 65%;
  height: 100%;
}
.base2{
  position: absolute;
  top: 8%;
  left: 1%;
}
.base3{
  position: absolute;
  top: 12%;
  left: 5%;
}

.soga{
  position: absolute;
  top: 12%;
  left: 15%;
  height: 9%;
}
.soga img{
  width: 100%;
  height: 100%;
}
.cabeza{
  position: absolute;
  top: 20%;
  left: 14%;
}
.cuerpo{
  position: absolute;
  top: 27%;
  left: 16%;
}

.brazo-izq{
  position: absolute;
  top: 27.1%;
  left: 12.4%;
}

.brazo-der{
  position: absolute;
  top: 27.3%;
  left: 16.5%;
}
.pierna-izq{
  position: absolute;
  top: 35%;
  left: 14.2%;
}
.pierna-der{
  position: absolute;
  top: 35.1%;
  left: 17%;
}
.container{
    display: flex;
    padding: 0;
    width: 100vh;
    height: 100vh;
}

.letra{
  width: 50px;
  height: 50px;
}
.letra input{
  width: 100%;
  height: 100%;
  text-align: center;
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

.container-letras-ahorcado{
  display: flex;
}
</style>

