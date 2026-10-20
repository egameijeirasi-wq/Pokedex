import { item } from "./item";
import { Inventari } from "./inventari";
const nom = document.getElementById("nom");
const descripcio = document.getElementById("desc");
const pes = document.getElementById("pes");
const capMax = document.getElementById("maxPes");
const btnAfegir = document.getElementById("afegir");
const btnMostrar = document.getElementById("mostrar");
const setCap = document.getElementById("selectCap");
const desc = document.getElementById("show");
btnAfegir.disabled = true;
btnMostrar.disabled = true;
let inventari;
setCap.addEventListener("click", () => {
    const capacitat = parseInt(capMax.value);
    if (!isNaN(capacitat) && capacitat > 0) {
        inventari = new Inventari(capacitat);
        setCap.disabled = true;
        capMax.disabled = true;
        btnAfegir.disabled = false;
        btnMostrar.disabled = false;
    }
});
btnAfegir.addEventListener("click", () => {
    const valorPes = parseInt(pes.value);
    if (nom.value.trim() !== "" && descripcio.value.trim() !== "" && !isNaN(valorPes)) {
        const nouItem = new item(nom.value, descripcio.value, valorPes);
        const afegit = inventari.afegirItem(nouItem);
        if (afegit) {
            nom.value = "";
            descripcio.value = "";
            pes.value = "";
        }
        else {
            alert("L'item supera la capacitat màxima de l'inventari!");
        }
    }
});
btnMostrar.addEventListener("click", () => {
    if (inventari) {
        desc.innerHTML = inventari.toString();
    }
});
//# sourceMappingURL=main.js.map