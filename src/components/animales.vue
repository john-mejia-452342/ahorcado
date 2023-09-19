<template>
    <div class="container">
      <!-- Modal -->
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel" style="color: black;">ELIGE UNA DIFICULTAD</h1>
                    </div>
                    <div class="modal-body">
                        <button class="learn-more" @click="chooseDifficulty('easy')"  data-bs-dismiss="modal">
                            <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">E A S Y </span>
                        </button>
                        <button class="learn-more" @click="chooseDifficulty('medium')" data-bs-dismiss="modal">
                            <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">M E D I U M</span>
                        </button>
                        <button class="learn-more" @click="chooseDifficulty('hard')" data-bs-dismiss="modal">
                            <span class="circle" aria-hidden="true">
                            <span class="icon arrow"></span>
                            </span>
                            <span class="button-text">H A R D</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
      <div class="container_letras">
        <div v-for="(item, index) in letras" :key="index" class="container-items">
          <button   v-on:click="comparar(item,index)"  v-bind:disabled="botones[index]" 
          v-bind:class="{verde:color_botones[index]=='verde' , rojo:color_botones[index]=='rojo'}">{{item}}</button>
        </div>
      </div>
      <div class="container-game">
        <div class="container-ahorcado">
          <div class="ahorcado">
            <div v-for="(item,index) in imagen" :key="index">
              <img :src="item" alt="">
            </div>
          </div>
        </div>
        <div class="container-letras-ahorcado">
          <ul id="horizontal-list"> 
            <button
              v-for="(item, index) in palabra_escrita"
              :key="index"
              type="button"
              class="btn btn-success">
              <span class="badge" v-if="item">{{ item }}</span>
            </button>
          </ul>
        </div>
        <div>
            <select v-model="chosenDifficulty" class="">
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
            </select>
        </div>
        <button type="button" class="btn btn-secondary nuevo" @click="created">Nuevo Juego</button>
      </div>
      
    </div>
  </template>
  
  <script setup>
  import {ref} from 'vue';
  import { onMounted } from 'vue';
  
  
  import Swal from 'sweetalert2'
  
  import fondo from "/src/assets/fondo.png";
  import base from "/src/assets/base.png";
  import base2 from "/src/assets/base2.png";
  import cabeza from   "/src/assets/cabeza.png";
  import cuerpo from "/src/assets/cuerpo.png";
  import cuerpo_mano from "/src/assets/cuerpo-mano.png";
  import cuerpo_manos from "/src/assets/cuerpo-manos.png";
  import pierna from "/src/assets/pierna.png";
  import lost_img from "/src/assets/lose.png";
  import win_img from "/src/assets/win.png";
  
  onMounted(() => {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
    function cerrarModal() {
      modal.hidden()
    }
   created()
  });
  
  const letras = ref(["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", 
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]);
  
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
  
  
  //Dificultad
  let chosenDifficulty = ref('');
  function chooseDifficulty(difficulty) {
    created()
    chosenDifficulty.value = difficulty
  }
  
  let game = ref(true)
  let win = ref(false)
  let lost = ref(false)
  let contador_aciertos = ref(0)
  let contador_errores = ref(0)
  let aleatorio = ref(0)
  let palabra_escrita = ref([])
  let botones = ref([])
  let color_botones = ref([])
  let mensaje = ref('');
  let imagen = ref([fondo])
  
  let lastButtonClicked = ref(null);
  
  
  function generarAleatorio() {
    palabra_escrita.value = []
    lastButtonClicked.value = null;
    game.value = true
    aleatorio.value = Math.floor(Math.random()*frutas.value.length)
    for (let i = 0; i < frutas.value[aleatorio.value].length; i++) {
      palabra_escrita.value.push('')
    }
    return aleatorio.value
  }
  
  function comparar(caracter, posicion) {
    if (game.value) {
      const palabraGenerada = palabra_generada().toLowerCase();
      const letra = caracter.toLowerCase();
  
      //Buscar letras
      if (palabraGenerada.includes(letra)) {
        for (let i = 0; i < palabraGenerada.length; i++) {
          if (palabraGenerada[i] === letra && palabra_escrita.value[i] === '') {
            palabra_escrita.value[i] = caracter;
            contador_aciertos.value++;
            
            //dificultad facil 
            if(chosenDifficulty.value == 'easy'){
              color_botones.value[posicion] = 'verde'
              botones.value[posicion] = true;
            }
            if (chosenDifficulty.value !== 'easy') {
              botones.value[posicion] = false;
            }
          }
        }
        //Presionar dos veces error dificultad media y dificil 
        if (chosenDifficulty.value !== 'easy') {
          botones.value[posicion] = false; 
          if (caracter !== lastButtonClicked.value) {
            lastButtonClicked.value = caracter;
          }else{
            contador_errores.value++;
          }
        }
      } else {
          //dificultad facil 
        if(chosenDifficulty.value == 'easy'){
          color_botones.value[posicion] = 'rojo'
          contador_errores.value++;
          botones.value[posicion] = true;
        }

        
      if(chosenDifficulty.value != 'easy'){
        botones.value[posicion] = false
        contador_errores.value++;
      }
      
        
      }
      //Facil
      if(chosenDifficulty.value == 'easy'){
        if (contador_errores.value == 1) {
          imagen.value = [base]
        }else if(contador_errores.value == 2){
          imagen.value = [base2]
        }else if(contador_errores.value == 3){
          imagen.value = [cabeza]
        }else if(contador_errores.value == 4){
          imagen.value = [cuerpo]
        }else if(contador_errores.value == 5){
          imagen.value = [cuerpo_mano]
        }else if(contador_errores.value == 6){
          imagen.value = [cuerpo_manos]
        }else if(contador_errores.value == 7){
          imagen.value = [pierna]
        }else if (contador_errores.value == 8) {
          imagen.value = [lost_img]
          Swal.fire({
            title: 'YOU LOSE!',
            width: 400,
            padding: '3em',
            color: 'red',
            background: '#fff',
            backdrop: `rgba(240,63,68,0.4)`
          })
          mensaje.value= 'Perdiste'
          lost.value = true
          game.value = false
        }
        if (contador_aciertos.value == palabraGenerada.length) {
          imagen.value = [win_img]
          Swal.fire({
            title: 'YOU WIN!',
            width: 400,
            padding: '3em',
            color: 'green',
            background: '#fff',
            backdrop: `rgba(55,235,103,0.4)`
          })
          mensaje.value= 'Bien Hecho'
          win.value = true
          game.value = false
        }
      }
      //Medio
      if (chosenDifficulty.value == 'medium') {
        if (contador_errores.value == 1) {
          imagen.value = [base]
        }else if(contador_errores.value == 2){
          imagen.value = [base2]
        }else if(contador_errores.value == 3){
          imagen.value = [cabeza]
        }else if(contador_errores.value == 4){
          imagen.value = [cuerpo]
        }else if(contador_errores.value == 5){
          imagen.value = [cuerpo_manos]
        }else if(contador_errores.value == 6){
          imagen.value = [lost_img]
          Swal.fire({
            title: 'YOU LOSE!',
            width: 400,
            padding: '3em',
            color: 'red',
            background: '#fff',
            backdrop: `rgba(240,63,68,0.4)`
          })
          mensaje.value= 'Perdiste'
          lost.value = true
          game.value = false
        }
        if (contador_aciertos.value == palabraGenerada.length) {
          imagen.value = [win_img]
          Swal.fire({
            title: 'YOU WIN!',
            width: 400,
            padding: '3em',
            color: 'green',
            background: '#fff',
            backdrop: `rgba(55,235,103,0.4)`
          })
          mensaje.value= 'Bien Hecho'
          win.value = true
          game.value = false
        }
      }
      //Dificil
      if(chosenDifficulty.value == 'hard'){
        if (contador_errores.value == 1) {
          imagen.value = [base2]
        }else if(contador_errores.value == 2){
          imagen.value = [cuerpo]
        }else if(contador_errores.value == 3){
          imagen.value = [cuerpo_manos]
        }else if(contador_errores.value == 4){
          imagen.value = [lost_img]
          Swal.fire({
            title: 'YOU LOSE!',
            width: 400,
            padding: '3em',
            color: 'red',
            background: '#fff',
            backdrop: `rgba(240,63,68,0.4)`
          })
          mensaje.value= 'Perdiste'
          lost.value = true
          game.value = false
        }
        if (contador_aciertos.value == palabraGenerada.length) {
          imagen.value = [win_img]
          Swal.fire({
            title: 'YOU WIN!',
            width: 400,
            padding: '3em',
            color: 'green',
            background: '#fff',
            backdrop: `rgba(55,235,103,0.4)`
          })
          mensaje.value= 'Bien Hecho'
          win.value = true
          game.value = false
        }
      }
    }
  }
  
  function created() {
    game.value = true
    win.value = false
    lost.value = false
    contador_aciertos.value = 0
    contador_errores.value = 0
    aleatorio.value = 0
    palabra_escrita.value = []
    botones.value = []
    color_botones.value = []
    mensaje.value = '';
    imagen.value = [fondo]
    lastButtonClicked = ref(null);
    generarAleatorio()
  }
  
  function palabra_generada(){
    return frutas.value[aleatorio.value]
  }
  
  </script>
  
  
  <style scoped>
  
  .rojo{
    background-color: red;
  }
  
  .verde{
    background-color: green;
  }
  
  .container{
    display: flex;
    align-items: center;
    padding: 0;
    width: 100%;
  
  }
  
  .container_letras{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    height: 20%;
    width: 50%;
  }
  .container-items{
    display: flex;
    height: 50px;
    width: 60px;
  }
  .container-items button{
    height: 100%;
    width: 100%;
    margin: 2px;
  
  }
  .container-game{
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 80%;
  }
  .container-ahorcado{
    display: flex;
    flex-direction: column;
    justify-content: center;
    background-color: white;
    height: 400px;
    width: 400px;
  }
  
  .ahorcado{
    width: 100%;
    height: 100%;
  }
  .ahorcado div img{
    width: 100%;
    height: 100%;
  }
  
  
  .container-letras-ahorcado{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top:10px ;
  }
  
  #horizontal-list{
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 0;
    padding: 0;
    list-style: none;
  }
  #horizontal-list button{
    margin: 2px;
    height: 38px;
    width: 50px;
    display: flex;
    text-align: center;
    align-items: center;
  }
  
  .nuevo{
    margin-top: 10px;
  }
  
  .modal-body {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
  
  .learn-more {
    margin-top: 10px;
  }
  
  .modal-body button {
    position: relative;
    display: inline-block;
    cursor: pointer;
    outline: none;
    border: 0;
    vertical-align: middle;
    text-decoration: none;
    background: transparent;
    padding: 0;
    font-size: inherit;
    font-family: inherit;
  }
  
  .modal-body button.learn-more {
    width: 12rem;
    height: auto;
  }
  
  .modal-body button.learn-more .circle {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: relative;
    display: block;
    margin: 0;
    width: 3rem;
    height: 3rem;
    background: #282936;
    border-radius: 1.625rem;
  }
  
  .modal-body button.learn-more .circle .icon {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    background: #fff;
  }
  
  .modal-body button.learn-more .circle .icon.arrow {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    left: 0.625rem;
    width: 1.125rem;
    height: 0.125rem;
    background: none;
  }
  
  .modal-body button.learn-more .circle .icon.arrow::before {
    position: absolute;
    content: "";
    top: -0.29rem;
    right: 0.0625rem;
    width: 0.625rem;
    height: 0.625rem;
    border-top: 0.125rem solid #fff;
    border-right: 0.125rem solid #fff;
    transform: rotate(45deg);
  }
  
  .modal-body button.learn-more .button-text {
    transition: all 0.45s cubic-bezier(0.65, 0, 0.076, 1);
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    padding: 0.75rem 0;
    margin: 0 0 0 1.85rem;
    color: #000000;
    font-weight: 700;
    line-height: 1.6;
    text-align: center;
    text-transform: uppercase;
  }
  
  .modal-body button:hover .circle {
    width: 100%;
  }
  
  .modal-body button:hover .circle .icon.arrow {
    background: #fff;
    transform: translate(1rem, 0);
  }
  
  .modal-body button:hover .button-text {
    color: #fff;
  }
  </style>
  
  