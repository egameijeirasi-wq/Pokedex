const registrar = document.getElementById("registre");
const afegirStock = document.getElementById("afegirStock");
const mostrarInventari = document.getElementById("mostrarInventari");
const text = document.getElementById("text");
const producte = document.getElementById("producte");
const inventari = new Map();
registrar.addEventListener("click", () => {
    const nomProducte = producte.value.trim();
    if (!nomProducte) {
        text.innerHTML = "Si us plau, indica el nom d'un producte.";
        return;
    }
    if (inventari.has(nomProducte)) {
        text.innerHTML = `El producte <b>${nomProducte}</b> ja està registrat.`;
    }
    else {
        inventari.set(nomProducte, 0);
        text.innerHTML = `Producte <b>${nomProducte}</b> registrat amb 0 unitats d'estoc.`;
    }
});
afegirStock.addEventListener("click", () => {
    const nomProducte = producte.value.trim();
    if (inventari.has(nomProducte)) {
        const quantitatActual = inventari.get(nomProducte);
        const novaQuantitat = quantitatActual + 1;
        // Només cal fer .set per actualitzar el valor
        inventari.set(nomProducte, novaQuantitat);
        text.innerHTML = `Incrementat l'estoc de <b>${nomProducte}</b>. Estoc actual: ${novaQuantitat}.`;
    }
    else {
        text.innerHTML = `El producte <b>${nomProducte}</b> no existeix a l'inventari. Registra'l primer.`;
    }
});
mostrarInventari.addEventListener("click", () => {
    text.innerHTML = "";
    if (inventari.size === 0) {
        text.innerHTML = "L'inventari està buit.";
        return;
    }
    for (const [nom, quantitat] of inventari) {
        text.innerHTML += `<b>${nom}</b>: ${quantitat} unitats<br>`;
    }
});
export {};
//# sourceMappingURL=main.js.map