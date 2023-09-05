<template>
  <div class="container">
    <!-- Modal -->
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h1 class="modal-title fs-5" id="exampleModalLabel">ELIGE UNA DIFICULTAD</h1>
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
      <div v-for="(item, i) in letras" :key="i" class="container-items">
        <div v-for="(letra, j) in item" :key="j" class="container-letras">
          <button class="delete-button">{{ letra }}</button>
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
  ["Z", "X", "C", "V", "B", "N", "M"]
])

document.addEventListener('DOMContentLoaded', function () {
  var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
  modal.show();
  function cerrarModal() {
  modal.hidden()
  }
});




// const modal = ref(false);

// const showModal = () => {
//   modal.value = true;
// };

// const chooseDifficulty = (difficulty) => {
//   // Realiza las acciones necesarias cuando se elige una dificultad
//   // Por ejemplo, puedes emitir un evento o realizar alguna acción específica aquí
//   console.log(`Dificultad elegida: ${difficulty}`);

//   // Cierra el modal después de realizar las acciones
//   modal.value = false;
// };



</script>
  
<style scoped>
.container {
  display: flex;
  padding: 0;
  width: 100vh;
  height: 100vh;
  align-items: center;
}

.container_letras {
  display: flex;
  flex-direction: column;
}

.container-items {
  display: flex;
  margin: 2px;
}

h1 {
  color: black;
}

.container_letras button {
  margin: 2px;
}

.container-ahorcado {
  background-color: white;
  height: 50%;
  width: 70%;
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

.delete-button {
  background-color: #f5f3f3;
  color: #fff;
  font-size: 14px;
  border: 0.5px solid rgba(255, 255, 255, 0.1);
  padding-bottom: 8px;
  width: 40px;
  height: 45px;
  border-radius: 15px 15px 12px 12px;
  cursor: pointer;
  position: relative;
  will-change: transform;
  transition: all .1s ease-in-out 0s;
  user-select: none;
  /* Add gradient shading to each side */
  background-image: linear-gradient(to right, rgba(255, 255, 255, 0.8), rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  background-position: bottom right, bottom right;
  background-size: 100% 100%, 100% 100%;
  background-repeat: no-repeat;
  box-shadow: inset -4px -10px 0px rgba(255, 255, 255, 0.4),
    inset -4px -8px 0px rgba(0, 0, 0, 0.3),
    0px 2px 1px rgba(0, 0, 0, 0.3),
    0px 2px 1px rgba(255, 255, 255, 0.1);
  transform: perspective(70px) rotateX(5deg) rotateY(0deg);
}

.delete-button::after {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to bottom, rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.5));
  z-index: -1;
  border-radius: 15px;
  box-shadow: inset 4px 0px 0px rgba(255, 255, 255, 0.1),
    inset 4px -8px 0px rgba(0, 0, 0, 0.3);
  transition: all .1s ease-in-out 0s;
}

.delete-button::before {
  content: '';
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0)),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0));
  background-position: bottom right, bottom right;
  background-size: 100% 100%, 100% 100%;
  background-repeat: no-repeat;
  z-index: -1;
  border-radius: 15px;
  transition: all .1s ease-in-out 0s;
}

.delete-button:active {
  will-change: transform;
  transform: perspective(80px) rotateX(5deg) rotateY(1deg) translateY(3px) scale(0.96);
  height: 34px;
  border: 0.25px solid rgba(0, 0, 0, 0.2);
  box-shadow: inset -4px -8px 0px rgba(255, 255, 255, 0.2),
    inset -4px -6px 0px rgba(0, 0, 0, 0.8),
    0px 1px 0px rgba(0, 0, 0, 0.9),
    0px 1px 0px rgba(255, 255, 255, 0.2);
  transition: all .1s ease-in-out 0s;
}

.delete-button::after:active {
  background-image: linear-gradient(to bottom,rgba(0, 0, 0, 0.5), rgba(255, 255, 255, 0.2));
}

.delete-button:active::before {
  content: "";
  display: block;
  position: absolute;
  top: 5%;
  left: 20%;
  width: 50%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.1);
  animation: overlay 0.1s ease-in-out 0s;
  pointer-events: none;
}

@keyframes overlay {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.delete-button:focus {
  outline: none;
}
</style>
  
  