const textIntroduit = document.getElementById("textInput");
const button = document.getElementById("valida");
const textResult = document.getElementById("textResult");
button.addEventListener("click", () => {
    const paraules = textIntroduit.value.split(" ");
    let resultat = "";
    for (const phrase of paraules) {
        if (phrase.length > 0) {
            const palabraCapitalizada = phrase.charAt(0).toUpperCase() + phrase.slice(1);
            resultat += palabraCapitalizada + " ";
        }
    }
    textResult.textContent = resultat.trim();
});
export {};
//# sourceMappingURL=main.js.map