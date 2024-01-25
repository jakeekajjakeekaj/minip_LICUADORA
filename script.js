"use strict";

let estadoLicuadora = false;
const licuadora = document.getElementById("blender");
const blenderButton = document.getElementById("blender-button").addEventListener("click", ()=> {
    // console.log("hola");
    controlarLicuadora();
    // licuadora.classList.toggle("active");    // De esta manera nos ahorramos la función grande de abajo, pero para practicar cosas seguiremos con procesos mas largos
});
const sonidoLicuadora = document.getElementById("blender-sound");
const botonLicuadora = document.getElementById("blender-button-sound");


let controlarLicuadora = ()=> {
    if(estadoLicuadora) {
        estadoLicuadora = false;    //APAGAR LICUADORA
        botonLicuadora.play();
        licuadora.classList.remove("active");
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
        console.log("Licuadora apagada");
    } else {
        estadoLicuadora = true; //ENCENDER LICUADORA
        botonLicuadora.play();
        setTimeout(()=> {
            licuadora.classList.add("active");
            sonidoLicuadora.play();
            console.log("Licuadora encendida");
        }, 200);
    }
};
//--- Lo de abajo es una manera más larga, preferí usar otro método ---
let reproducirSonidos = ()=> {
    if(sonidoLicuadora.paused) {    // De esta manera se verifica si el sonido está pausado, dando un valor de true si está pausado y false si se está reproduciendo
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;    // De esta manera se resetea el sonido de reproducción para que al volver a dar click, el sonido empiece desde el segundo 0
    }
}