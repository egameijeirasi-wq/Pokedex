const textIntroduit = document.getElementById("textInput");
const button = document.getElementById("valida");
const textResult = document.getElementById("textResult");
button.addEventListener("click", () => {
    let resultat = "";
    let lenght = textIntroduit.value.length;
    resultat += "Longitud : " + lenght + " \n";
    resultat += "Majuscules: " + textIntroduit.value.toUpperCase() + " \n";
    if (lenght >= 10) {
        resultat += "Més de 10 caracters: " + "Si \n";
    }
    else {
        resultat += "Més de 10 caracters: " + "No \n";
    }
    textResult.textContent = resultat.trim();
});
export {};
//# sourceMappingURL=main.js.map