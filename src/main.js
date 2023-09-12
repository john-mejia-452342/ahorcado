import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import modalidad from './components/modalidad.vue'
import frutas from './components/frutas.vue'
// import animales from './components/'

createApp(frutas).mount('#app')

// document.querySelector('#btn-ir-modalidad').addEventListener('click',()=>{
//     createApp(modalidad).mount('#app')

//     document.querySelector('#frutas').addEventListener('click',() =>{
//         createApp(frutas).mount('#app')
//     })
//     document.querySelector('#animales').addEventListener('click',() =>{
//         createApp(frutas).mount('#app')
//     })
//     document.querySelector('#marcas-ropa').addEventListener('click',() =>{
//         createApp(frutas).mount('#app')
//     })
//     document.querySelector('#ciudades').addEventListener('click',() =>{
//         createApp(frutas).mount('#app')
//     })
//     document.querySelector('#paises').addEventListener('click',() =>{
//         createApp(frutas).mount('#app')
//     })
// })





