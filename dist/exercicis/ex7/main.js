const button = document.getElementById("valida");
const textResult = document.getElementById("textResult");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const imgAmp = document.getElementById("imgAmp");
function cambiarImagen(imgSeleccionada) {
    if (imgSeleccionada && imgAmp) {
        imgAmp.src = imgSeleccionada.src;
    }
}
img1?.addEventListener("click", () => cambiarImagen(img1));
img2?.addEventListener("click", () => cambiarImagen(img2));
img3?.addEventListener("click", () => cambiarImagen(img3));
export {};
//# sourceMappingURL=main.js.map