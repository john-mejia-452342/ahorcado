<template>
  <div class="container">
    <div class="container_letras">
      <div v-for="(item, i) in letras" :key="i" class="container-items">
        <div v-for="(letra, j) in item" :key="j" class="container-letras">
          <button
            :value="letra"
            @click="seleccionarLetra(letra)"
            :disabled="letrasSeleccionadas.includes(letra) || mensaje"
          >
            {{ letra }}
          </button>
        </div>
      </div>
    </div>
    <div class="container-ahorcado">
      <div class="ahorcado">
        <div class="base2" v-show="intentosFallidos >= 1">
          <img src="src/assets/base2.png" alt="">
        </div>
        <div class="base3" v-show="intentosFallidos >= 2">
          <img src="src/assets/base3.png" alt="">
        </div>
        <div class="soga" v-show="intentosFallidos >= 3">
          <img src="src/assets/soga.png" alt="">
        </div>
        <div class="cabeza" v-show="intentosFallidos >= 4">
          <img src="src/assets/cabeza1.png" alt="">
        </div>
        <div class="cuerpo" v-show="intentosFallidos >= 5">
          <img src="src/assets/cuerpo.png" alt="">
        </div>
        <div class="brazo-izq" v-show="intentosFallidos >= 6">
          <img src="src/assets/brazo-izq.png" alt="">
        </div>
        <div class="brazo-der" v-show="intentosFallidos >= 7">
          <img src="src/assets/brazo-der.png" alt="">
        </div>
        <div class="pierna-izq" v-show="intentosFallidos >= 8">
          <img src="src/assets/pierna-izq.png" alt="">
        </div>
        <div class="pierna-der" v-show="intentosFallidos >= 9">
          <img src="src/assets/pierna-der.png" alt="">
        </div>
        <div class="base1" v-show="intentosFallidos >= 10">
          <img src="src/assets/base1.png" alt="">
        </div>
        <div class="base" v-show="intentosFallidos >= 11">
          <img src="src/assets/base.png" alt="">
        </div>
      </div>
      <div class="container-letras-ahorcado">
        <div class="letra" v-for="(letra, index) in palabraOculta" :key="index">
          <input
            type="text"
            :value="letra === ' ' ? ' ' : letrasSeleccionadas.includes(letra) ? letra : ''"
            :disabled="letra !== '_' && letra !== ' '"
          />
        </div>
      </div>
      <div class="mensaje" v-if="mensaje">
        <p>{{ mensaje }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      letras: [
        ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
        ["A", "S", "D", "F", "G", "H", "J", "K", "L", "Ñ"],
        [ "Z", "X", "C", "V", "B", "N", "M", ],
      ],
      frutas: [
        "Manzana",
        "Plátano",
        "Naranja",
        "Uva",
        "Fresa",
        "Sandía",
        "Kiwi",
        "Melocoton",
        "Mango",
        "Papaya",
        "Limón",
        "Cereza",
        "Arandano",
        "Pera",
        "Frambuesa",
      ],
      palabraSeleccionada: "",
      intentosFallidos: 0,
      letrasSeleccionadas: [],
      mensaje: "",
    };
  },
  computed: {
    palabraOculta() {
      const palabra = this.palabraSeleccionada.toUpperCase();
      let palabraOculta = "";
      let primeraLetra = true;

      for (const letra of palabra) {
        if (letra.match(/[A-Z]/)) {
          if (primeraLetra) {
            palabraOculta += letra;
            primeraLetra = false;
          } else {
            palabraOculta += "_";
          }
        } else {
          palabraOculta += letra;
        }
      }

      return palabraOculta;
    },
  },
  created() {
    this.iniciarJuego();
  },
  methods: {
    iniciarJuego() {
      this.palabraSeleccionada =
        this.frutas[Math.floor(Math.random() * this.frutas.length)];
      this.intentosFallidos = 0;
      this.letrasSeleccionadas = [];
      this.mensaje = "";
    },
    seleccionarLetra(letra) {
      if (!this.letrasSeleccionadas.includes(letra)) {
        this.letrasSeleccionadas.push(letra);

        if (this.palabraSeleccionada.toUpperCase().includes(letra)) {
          // La letra está en la palabra, actualiza palabraOculta
          const palabraArray = this.palabraSeleccionada.split("");
          const nuevaPalabraOculta = palabraArray.map((letraPalabra) => {
            if (letraPalabra.toUpperCase() === letra) {
              return letraPalabra;
            } else {
              return this.palabraOculta[palabraArray.indexOf(letraPalabra)];
            }
          });

          this.palabraOculta = nuevaPalabraOculta.join("");

          // Verifica si se ha completado la palabra y muestra el mensaje
          if (!this.palabraOculta.includes("_")) {
            this.mensaje = "¡Bien hecho!";
          }
        } else {
          // La letra no está en la palabra, incrementa los intentos fallidos
          this.intentosFallidos += 1;

          // Verifica si se ha perdido el juego y muestra el letrero
          if (this.intentosFallidos >= 11) {
            this.mensaje = "¡Perdiste!";
          }
        }
      }
    },
  },
};
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

