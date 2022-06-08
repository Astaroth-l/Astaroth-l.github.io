// // Crearemos un saludo interactivo pidiendo sus Datos y mostrandolo en la pantalla.
// // Seleccionar un Boton para que haga el evento

document.getElementById("boton").addEventListener("click",function(){
// // Extraer datos del Usuario
// // Obtener los datos con value
let nom = document.getElementById("nombre").value
let tel = document.getElementById("telefono").value
let ape = document.getElementById("apellido").value
let pai = document.getElementById("pais").value
let cor = document.getElementById("correo").value
// // Mostrar el resultado en la pantalla
document.getElementById("salida").innerHTML=" Hola " + nom  +  ape + " Hemos visto que eres del Pais de " + pai + " por eso hemos decidido premiarte con un sorteo patrocinado por nuestra empresa Gamming Zone recibiras el resto de la información al numero " + tel + " para decirte como participar y todos los pasos que debes de seguir para llevarte este GRANDIOSO PREMIO SORPRESA. " +

"Buena Suerte"
})

//Juego de preguntas que salgan al azar y nos de una calificación al final
// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...
