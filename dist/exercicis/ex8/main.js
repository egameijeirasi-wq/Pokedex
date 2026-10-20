const cuadrat = document.getElementById("quadratMovil");
const amunt = document.getElementById("Amunt");
const avall = document.getElementById("Avall");
const esquerra = document.getElementById("Esquerra");
const dreta = document.getElementById("Dreta");
let posTop = 0;
let lat = 0;
amunt?.addEventListener("click", () => {
    if (posTop > 0) {
        posTop -= 50;
        cuadrat.style.marginTop = posTop + "px";
    }
});
avall?.addEventListener("click", () => {
    if (posTop < 550) {
        posTop += 50;
        cuadrat.style.marginTop = posTop + "px";
    }
});
esquerra?.addEventListener("click", () => {
    if (lat > 0) {
        lat -= 50;
        cuadrat.style.marginLeft = lat + "px";
    }
});
dreta?.addEventListener("click", () => {
    if (lat < 550) {
        lat += 50;
        cuadrat.style.marginLeft = lat + "px";
    }
});
export {};
//# sourceMappingURL=main.js.map