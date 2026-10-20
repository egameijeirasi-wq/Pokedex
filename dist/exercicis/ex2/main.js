const textIntroduit = document.getElementById("textInput");
const button = document.getElementById("valida");
const text = document.getElementById("textResult");
const tipusDada = document.getElementById("tipusDada");
button.addEventListener("click", () => {
    text.textContent = "";
    const temp = parseFloat(textIntroduit.value);
    if (tipusDada.value === "Celsius") {
        const fahrenheit = (temp * 1.8) + 32;
        text.textContent = "Total de graus en farenheit: " + fahrenheit.toFixed(2);
    }
    else if (tipusDada.value === "Fahrenheit") {
        const celsius = (temp - 32) / 1.8;
        text.textContent = "Total de graus en Celsius: " + celsius.toFixed(2);
    }
});
export {};
//# sourceMappingURL=main.js.map