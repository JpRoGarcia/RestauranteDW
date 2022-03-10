/**
 * Obtener los valores del formulario de registro
 */
function obtenerValoresFormulario () {
    let celular = document.getElementById("txtCelular").value
    let nombre = document.getElementById("txtNombre").value
    let clave = document.getElementById("txtClave").value
    let direccion = document.getElementById("txtDireccion").value
    let correo = document.getElementById("txtCorreo").value

    if (correo == "") {
        document.getElementById("alertamarron").style.display = ""
        document.getElementById("alertamarron").innerText="Correo es obligatorio"
        return
    }
    
    // Forma de crear un Objeto
    //Inicializar un Obejto con propiedades
    let usuario = { celular, "clave":clave }
    
    //Agregar propiedadesa un JSON
    usuario.correo = correo
    usuario.direccion = direccion
    
    //Agregar propiedades con bracket notation ["key"]
    usuario["nombre"] = nombre

    document.getElementById("txtCelular").value  = ""
    document.getElementById("txtNombre").value = ""
    document.getElementById("txtClave").value = ""
    document.getElementById("txtDireccion").value = ""
    document.getElementById("txtCorreo").value = ""
    console.log(usuario);
}

function cargarPagina() {
    document.getElementById("alertamarron").style.display = "none"
}

cargarPagina()