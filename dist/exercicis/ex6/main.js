const textIntroduit = document.getElementById("textInput");
const button = document.getElementById("valida");
const textResult = document.getElementById("textResult");
const cuadrat = document.getElementById("cuadrat");
const colorSeleccionat = document.getElementById("colorSeleccionat");
button.addEventListener("click", () => {
    cuadrat.style.backgroundColor = colorSeleccionat.value;
});
export {};
//# sourceMappingURL=main.js.map