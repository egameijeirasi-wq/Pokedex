// Se selecciona con el ID correcto y tipo HTMLTextAreaElement
const textIntroduit = document.getElementById("textInput");
const button = document.getElementById("valida");
const text = document.getElementById("textResult");
button.addEventListener("click", () => {
    let espais = 0;
    let punts = 0;
    let comas = 0;
    const cadena = textIntroduit.value;
    for (const char of cadena) {
        if (char === " ") {
            espais++;
        }
        else if (char === ".") {
            punts++;
        }
        else if (char === ",") {
            comas++;
        }
    }
    text.textContent = "Resultat del recompte: Punts: " + punts + " | Comes: " + comas + " | Espais: " + espais;
});
export {};
//# sourceMappingURL=main.js.map