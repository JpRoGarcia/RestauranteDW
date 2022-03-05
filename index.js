/**
 * Obtener los valores del formulario de registro
 */
function obtenerValoresFormulario () {
    let correo = document.getElementById("txtCorreo").value
    let nombre = document.getElementById("txtNombre").value
    let celular = document.getElementById("txtCelular").value
    let clave = document.getElementById("txtClave").value
    let direccion = document.getElementById("txtDireccion").value

    // Forma de crear un Objeto
    //Inicializar un Obejto con propiedades
    let usuario = { celular, "clave":clave }

    //Agregar propiedadesa un JSON
    usuario.correo = correo
    usuario.direccion = direccion

    //Agregar propiedades con bracket notation ["key"]
    usuario["nombre"] = nombre
    
    console.log(usuario);
}
