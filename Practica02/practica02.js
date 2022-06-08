// Crear un juego que de numeros al azar donde devemos elejir un numero
// Colocar los numeros al azar
let num = Math.ceil(Math.random()*20)

// Manejador de eventos
document.getElementById("boton").addEventListener("click",function(){
// obtener informacion del id numero
    let dato = document.getElementById("numero").value
// Mostrar la respuesta de acuerdo a la condicion
    if (num == dato){
        alert("Felicitaciones ganaste el gran premio")
// Recarga la inforcaion
        location.reload()
    }
    else{
        alert(" Perdiste pero el numero era " + num + " si deseas puedes intentarlo otra vez ")
        location.reload()
    }
})