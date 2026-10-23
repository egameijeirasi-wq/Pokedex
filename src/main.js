import * as models from "./models.js";
import * as utils from "./utils.js";
// ==========================================================
// EXERCICI 1: Llistar els 151 Pokémon
// ==========================================================
// TODO: Implementa la lògica de l'exercici 1 seguint els requisits
const btn_show_all = document.getElementById("btn-show-all");
export const pokemonList = document.getElementById("pokemon-list");
export const mapaPokemon = new Map();
//llama a la lista de pokemons y comprueba si ha la ha devuelto y se la pasa a la funcion create_all_pokemos para crear los objetos BasePokemon
async function carregarLlistaPokemon() {
    utils.mostrarEstat("Carregant...", "loading");
    try {
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        if (!resposta.ok) {
            console.log(resposta.status);
            throw new Error(`Error HTTP: ${resposta.status}`);
        }
        const data = await resposta.json();
        for (const item of data.results) {
            const pokemon = new models.BasePokemon(item);
            mapaPokemon.set(pokemon.id, pokemon);
        }
        utils.renderitzarLlistaNoms(mapaPokemon, pokemonList);
        utils.amagarEstat();
    }
    catch (error) {
        utils.mostrarEstat(`Error carregant Pokémon: ${error}`, "error");
    }
}
//boton con el listener para emepezar a ejecutar todas las funciones para crear la lista
btn_show_all.addEventListener("click", carregarLlistaPokemon);
// ==========================================================
// EXERCICI 2: Cercador en temps real
// ==========================================================
// TODO: Implementa la lògica de l'exercici 2 seguint els requisits
// ==========================================================
// EXERCICI 3: Detall del Pokémon, cache i crit
// ==========================================================
// TODO: Implementa la lògica de l'exercici 3 seguint els requisits
// ==========================================================
// EXERCICI 4: Botons de filtre per tipus
// ==========================================================
// TODO: Implementa la lògica de l'exercici 4 seguint els requisits
window.onload = () => {
    utils.generarBotonsTipus();
};
// ==========================================================
// EXERCICI 5: Filtrar la llista per tipus
// ==========================================================
// TODO: Implementa la lògica de l'exercici 5 seguint els requisits
//# sourceMappingURL=main.js.map