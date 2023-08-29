import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import modalidad from './components/modalidad.vue'
import facil from './components/facil.vue'
import medio from './components/medio.vue'
import dificil from './components/modalidad.vue'



createApp(App).mount('#app')

document.querySelector('#btn-ir-modalidad').addEventListener('click',()=>{
    createApp(modalidad).mount('#app')
    
    document.querySelector('#easy').addEventListener('click',()=>{
        createApp(facil).mount('#app')
    })

    document.querySelector('#medio').addEventListener('click',()=>{
        createApp(medio).mount('#app')
    })

    document.querySelector('#hard').addEventListener('click',()=>{
        createApp(dificil).mount('#app')
    })

    
})



