// Función para acceder a la interfaz de Smart ECO.
function acceder(){
    let user = document.getElementById("u-input").value;         // Usuario.
    let password = document.getElementById("p-input").value;     // Contraseña.
    let mensaje = document.getElementById("mensaje");            // Mensaje de error.

    if (user == "ECO-0001" && password == "tryhard143"){
        // Si el usuario y contraseña son correctos, redireccionar a esta páginas. 
        window.location.replace("interfaz.html");
    } else {
        // Si uno o ambos son incorrectos, mostrar un mensaje de error.
        mensaje.innerHTML = '<b>ERROR:</b> El usuario y/o la contraseña no están registrados.';
    }
}