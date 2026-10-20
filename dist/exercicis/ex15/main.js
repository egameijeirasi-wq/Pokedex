"use strict";
const llocs = [];
let map;
window.addEventListener("DOMContentLoaded", () => {
    map = L.map("map").setView([41.54633, 2.10589], 14);
    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    const inputNom = document.getElementById("nom");
    const inputLat = document.getElementById("latitud");
    const inputLon = document.getElementById("longitud");
    const btnAfegir = document.getElementById("btnAfegir");
    const btnHistoric = document.getElementById("btnHistoric");
    const missatgeMap = document.getElementById("missatge_map");
    const llistaHistoric = document.getElementById("llista");
    const missatgeHist = document.getElementById("missatge_hist");
    btnAfegir.addEventListener("click", () => {
        const nom = inputNom.value.trim();
        const latitud = parseFloat(inputLat.value);
        const longitud = parseFloat(inputLon.value);
        if (!nom || isNaN(latitud) || isNaN(longitud)) {
            missatgeMap.textContent = "S'han d'omplir tots els camps amb valors vàlids.";
            missatgeMap.style.color = "red";
            return;
        }
        const nouLloc = [nom, latitud, longitud];
        llocs.push(nouLloc);
        // Afegir marcador al mapa
        const marcador = L.marker([latitud, longitud]).addTo(map);
        marcador.bindPopup(`<b>${nom}</b><br>Lat: ${latitud}<br>Lon: ${longitud}`).openPopup();
        map.setView([latitud, longitud], 15);
        missatgeMap.textContent = `Lloc "${nom}" afegit correctament.`;
        missatgeMap.style.color = "green";
        inputNom.value = "";
        inputLat.value = "";
        inputLon.value = "";
    });
    btnHistoric.addEventListener("click", () => {
        llistaHistoric.innerHTML = "";
        if (llocs.length === 0) {
            missatgeHist.textContent = "No hi ha cap lloc registrat a l'històric.";
            return;
        }
        missatgeHist.textContent = "";
        llocs.forEach(([nom, lat, lon]) => {
            const li = document.createElement("li");
            li.textContent = `${nom} -> Latitud: ${lat}, Longitud: ${lon}`;
            llistaHistoric.appendChild(li);
        });
    });
});
//# sourceMappingURL=main.js.map