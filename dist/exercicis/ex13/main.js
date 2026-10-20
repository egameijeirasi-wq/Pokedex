const cuadrat = document.getElementById("cuadrat");
const toggle = document.getElementById("alternar");
const text = document.getElementById("text");
toggle.addEventListener("click", () => {
    if (cuadrat.classList.contains("cuadratAlternar1")) {
        cuadrat.classList.replace("cuadratAlternar1", "cuadratAlternar2");
    }
    else {
        cuadrat.classList.replace("cuadratAlternar2", "cuadratAlternar1");
    }
});
export {};
//# sourceMappingURL=main.js.map