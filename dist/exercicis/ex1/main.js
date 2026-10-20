"use strict";
const numIntroduit = document.getElementById("numInput");
const button = document.getElementById("valida");
const text = document.getElementById("textResult");
button.addEventListener("click", () => {
    // Convertimos el valor del input a número
    const val = Number(numIntroduit.value);
    // Comprobamos si es menor o igual a 0 (o si no es un número válido)
    if (isNaN(val) || val <= 0) {
        text.textContent = "No es poden introduir numeros inferiors a 1!!";
        return;
    }
    // Generamos un número aleatorio entre 1 y 99
    const nRand = Math.floor(Math.random() * 99) + 1;
    // Evaluamos si el número introducido es menor que el número aleatorio
    if (val < nRand) {
        text.textContent = "El numero " + val + " es troba en el interval de 1 a " + nRand;
    }
    else {
        text.textContent = "El numero " + val + " es major o igual al numero aleatori " + nRand;
    }
});
//# sourceMappingURL=main.js.map