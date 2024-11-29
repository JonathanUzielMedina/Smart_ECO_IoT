// Instanciar una conexión mediante Web Socket.
var webSocket = new WebSocket('ws://localhost:1880/data'); // Crear el websocket.

// Mandar datos a la página mientras esté conectada por Web Socket.
webSocket.onmessage = function(evento){
    var datos = JSON.parse(evento.data);                    // Procesar los datos de JSON.
    var temperatura = datos.temperature;                    // Dato de temperatura.
    var humedad = datos.humidity;                           // Porcentaje de humedad.
    var luz = datos.light;                                  // Porcentaje de luz.
    var altura = datos.distance;                            // Porcentaje de luz.
    var estatusAlarma = datos.alarm;                        // Porcentaje de luz.
    var sonidoAlarma = new Audio('./res/audio/alarm.mp3'); // Instanciar el sonido de la alarma.
    sonidoAlarma.play();

    // Mostrar los datos en la página.
    document.getElementById("valor-temperatura").innerHTML = temperatura + " °C";
    document.getElementById("valor-humedad").innerHTML = humedad + " %";
    document.getElementById("valor-luz").innerHTML = luz + " %";
    document.getElementById("valor-altura").innerHTML = altura + " cm";

    // Si la alarma está desactivada, ésta no suena en la página, cambia el estatus a "Desactivada" y el monitor mantiene su color.
    if (estatusAlarma == 0){
        document.getElementById("valor-alarma").innerHTML = "Desactivada";
        document.getElementById("monitor-alarma").style.backgroundColor = "#ffffffb0";
    }
    // Si la alarma está activada, ésta suena en la página, cambia el estatus a "Activada" y el monitor cambia de color.
    else {
        document.getElementById("valor-alarma").innerHTML = "Activada";
        document.getElementById("monitor-alarma").style.backgroundColor = "#ff7171b0";
    }
};

// Se confirma que se abrió la conexión WebSocket.
webSocket.onopen = function(){
    console.log("Se ha abierto la conexión WebSocket.");
};

// Se confirma que se cerró la conexión WebSocket.
webSocket.onclose = function(){
    console.log("Se ha cerrado la conexión WebSocket.");
};

// Se avisa si hay un error en la conexión WebSocket.
webSocket.onerror = function(error){
    console.log("ERROR: " + error);
};
