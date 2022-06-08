// Juego de respuestas que nos den un resultado al final
// Array bidimensional donde se guardarán las preguntas junto a sus respuestas correctas correspondientes...


let lista = [
    ["¿Cuánto es 3^3?","27"],
    ["¿Qué color resulta al mezclar el azul con el amarillo?","Verde"],
    ["¿Cuántos jugadores hay en un partido de futbol?", "22"],
]
// Crear variables que usaré
let pregunta, respuesta
let formuladas = 0 //Cuantas preguntas daras
let acertadas = 0

hazpregunta();

// Creamos el evento a través

document.getElementById("boton").addEventListener("click",function(){
// Obtener información de la ID
    let entrada = document.getElementById("respuesta").value

    if (respuesta == entrada){
        acertadas++
    }
    if (formuladas < 3){ //Escribo cuantas preguntas le haré
        hazpregunta() //Metodo que creare aparte para hace runa accion

    }
    else{
        muestraresultado() //Frase si acerto o no mostrando el resultado
    }
})

function hazpregunta(){
    let e //variable interna
//Se extrae una pregunta al azar 
    e = lista.splice(numAlet(0,lista.length-1),1);
// Se guardan las preguntas y los datos
    pregunta = e[0][0];
    respuesta = e[0][1];

// Se muestre la pregunta
    document.getElementById("pregunta").innerHTML = pregunta;
// Se borra la pregunta anterior
    document.getElementById("respuesta").value="";
// Se van a contar las pregutas realizadas
    formuladas++
}

// Devolver un numero aleatorio entero entre min y max ambos inclusie
function numAlet(max,min){
    return Math.floor( Math.random() * (max - min + 1) ) + min;

}

function muestraresultado(){
    let resultado; // Variable auxiliar

    switch (acertadas) {
        case 0:
            resultado = "Estas bajo en cultura general"
            break;
        case 1:
            resultado = "Vas por buen camino pero aún necestias leer mas"
            break;
        case 2:
            resultado = "Estuviste cerca de ganar"
            break;
        case 3:
            resultado = "Exelente juega el valor de la verdad"
    }

    document.getElementById("salida").innerHTML=resultado

}

