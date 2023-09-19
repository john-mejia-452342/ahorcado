import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import modalidad from './components/modalidad.vue'
import frutas from './components/frutas.vue'
import animales from './components/animales.vue'
import marcas from './components/marcas.vue'
import ciudades from './components/ciudades.vue'
import paises from './components/paises.vue'

createApp(App).mount('#app')

document.querySelector('#btn-ir-modalidad').addEventListener('click',()=>{
    createApp(modalidad).mount('#app')

    document.querySelector('#frutas').addEventListener('click',() =>{
        createApp(frutas).mount('#app')
        
    })
    document.querySelector('#animales').addEventListener('click',() =>{
        createApp(animales).mount('#app')
    })
    document.querySelector('#marcas-ropa').addEventListener('click',() =>{
        createApp(marcas).mount('#app')
    })
    document.querySelector('#ciudades').addEventListener('click',() =>{
        createApp(ciudades).mount('#app')
    })
    document.querySelector('#paises').addEventListener('click',() =>{
        createApp(paises).mount('#app')
    })
})




//Abrir modal inicio de pagina 
document.addEventListener('DOMContentLoaded', function () {
    var modal = new bootstrap.Modal(document.getElementById('exampleModal'));
    modal.show();
    function cerrarModal() {
    modal.hidden()
    }
    created()
});
