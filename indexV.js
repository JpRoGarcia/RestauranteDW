//1. Identifiacar eo contenedor que va a usar vue
//2. Crear la app de vue en el contenedor del paso 1
//3. Crear estructura del framework vue

const appVue = {
    // COntrolar los componentes del DOM
    data() {
        return{
            //document.getElementById("txtCorreo").value = ""
            alerta:"",
            usuario:{
                Correo:null
            }

        }

    },
    // Metodos y funciones que voy a utilizar en el aplicacion
    method: {
        obtenerValoresFormulario(){
            console.log(this.usuario)
            this.usuario={}
        }
    }
}

Vue.createApp(appVue).mount('#app-vue')