const guardar = document.getElementById("save");
const mostrar = document.getElementById("show");
const fabricant = document.getElementById("fabricant");
const model = document.getElementById("model");
const temps = document.getElementById("temps");
const text = document.getElementById("text");
const vehicles = [];
guardar.addEventListener("click", () => {
    vehicles.push("Fabricant" + fabricant + " model " + model + " temps " + temps);
});
mostrar.addEventListener("click", () => {
    for (v of vehicles) {
        text.innerHTML += v;
    }
});
export {};
//# sourceMappingURL=main.js.map