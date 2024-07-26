/* 1. Solicitar al usuário cuantas veces quiere Jugar */
/* 2. Solicitar la Jugada del Usuário */
/* 3. Solicitar la jugada de la máquina */
/* 4. Comparar las Jugadas */
/* 5. Dar respuesta de la Partida */


/**
var resultado;
var limiteVeces = prompt("Cuántas veces quiere Jugar?");
var limiteVeces = parseInt(limiteVeces);
 for (var i = 0; i < limiteVeces; i++) {  
     limiteVeces = prompt("Quiere Papel");


}


una opción: 1: Tijera, 2: Papel, 3: Tijera 

console.log(limiteVeces);

*/


var cantVeces;
var eleccionJugador;
var eleccionMaquina;
var piedra = 0;
var papel = 1;
var tijera = 0;

cantVeces = prompt("Ingrese la cantidad de veces que desea jugar");
for (var i; i < cantVeces; i ++) {
    eleccionJugador = prompt ("Elige entre piedra, papel o tijera");
    eleccionMaquina = Math.floor(Math.random() * 3);
    switch (eleccionJugador) {
        
    }
}