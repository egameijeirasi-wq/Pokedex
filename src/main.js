import * as models from "./models.js";
import * as utils from "./utils.js";
// ==========================================================
// EXERCICI 1: Llistar els 151 Pokémon
// ==========================================================
// TODO: Implementa la lògica de l'exercici 1 seguint els requisits
const btn_show_all = document.getElementById("btn-show-all");
export const pokemonList = document.getElementById("pokemon-list");
export const mapaPokemon = new Map();
let mapaVisible = mapaPokemon;
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
        mapaPokemon.clear();
        document.querySelectorAll("#type-filter-container .btn-type")
            .forEach((boto) => {
            boto.classList.remove("active");
        });
        for (const item of data.results) {
            const pokemon = new models.BasePokemon(item);
            mapaPokemon.set(pokemon.id, pokemon);
        }
        mapaVisible = mapaPokemon;
        utils.renderitzarLlistaNoms(mapaVisible, pokemonList);
        utils.netejarCercador();
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
const searchInput = document.getElementById("search-input");
searchInput.addEventListener("input", () => {
    const text = searchInput.value.trim().toLowerCase();
    const items = document.querySelectorAll("#pokemon-list li");
    const esNumeric = /^\d+$/.test(text);
    items.forEach((li) => {
        const id = Number(li.dataset.id);
        const pokemon = mapaVisible.get(id);
        if (!pokemon)
            return;
        let visible;
        if (text === "") {
            visible = true;
        }
        else if (esNumeric) {
            visible = id === Number(text);
        }
        else {
            visible = pokemon.name.toLowerCase().includes(text);
        }
        li.classList.toggle("hidden", !visible);
    });
});
const cachePokemon = new Map();
document.getElementById("pokemon-list")?.addEventListener("click", (event) => {
    const target = event.target;
    const li = target.closest("li");
    if (!li || !li.dataset.id)
        return; // ignora el mensaje "placeholder"
    utils.marcarItemActiu(target);
    const pokemon = mapaVisible.get(Number(li.dataset.id));
    if (pokemon) {
        carregarDetallPokemon(pokemon.id, pokemon.url);
    }
});
async function carregarDetallPokemon(id, url) {
    try {
        let detall = cachePokemon.get(id);
        if (!detall) { // solo hace fetch si no está en la cache
            utils.mostrarEstat("Carregant el detall del Pokémon...", "loading");
            const resposta = await fetch(url);
            if (!resposta.ok)
                throw new Error(`Error ${resposta.status}`);
            const data = (await resposta.json());
            detall = new models.DetailedPokemon(data, url);
            cachePokemon.set(id, detall);
        }
        utils.renderitzarDetallCard(detall);
        utils.amagarEstat();
    }
    catch (error) {
        const missatge = error instanceof Error ? error.message : "Error desconegut";
        utils.mostrarEstat(`No s'ha pogut carregar el detall: ${missatge}`, "error");
    }
}
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
const typeFilterContainer = document.getElementById("type-filter-container");
typeFilterContainer.addEventListener("click", (event) => {
    const target = event.target;
    const button = target.closest("button.btn-type");
    if (!button || !button.dataset.type)
        return;
    // Segundo clic sobre el botón activo: se desmarca y se restaura la lista completa
    if (button.classList.contains("active")) {
        button.classList.remove("active");
        restaurarLlistaCompleta();
        return;
    }
    typeFilterContainer.querySelectorAll(".btn-type")
        .forEach((element) => element.classList.remove("active"));
    button.classList.add("active");
    carregarPokemonPerTipus(button.dataset.type);
});
function restaurarLlistaCompleta() {
    // Si nunca se cargó la lista (se filtró antes de pulsar el botón), hay que pedirla
    if (mapaPokemon.size === 0) {
        carregarLlistaPokemon();
        return;
    }
    mapaVisible = mapaPokemon;
    utils.renderitzarLlistaNoms(mapaVisible, pokemonList);
    utils.netejarCercador();
    utils.netejarDetallCard();
}
async function carregarPokemonPerTipus(tipus) {
    utils.mostrarEstat("Carregant Pokémon del tipus seleccionat...", "loading");
    try {
        const respuesta = await fetch(`https://pokeapi.co/api/v2/type/${tipus}`);
        if (!respuesta.ok) {
            throw new Error(`Error HTTP: ${respuesta.status}`);
        }
        const dato = await respuesta.json();
        const pokemonFiltrats = new Map();
        for (const item of dato.pokemon) {
            const pokemon = new models.BasePokemon(item.pokemon);
            if (pokemon.id <= 151) {
                pokemonFiltrats.set(pokemon.id, pokemon);
            }
        }
        mapaVisible = pokemonFiltrats; // el master no se toca
        utils.renderitzarLlistaNoms(mapaVisible, pokemonList);
        utils.netejarCercador();
        utils.netejarDetallCard();
        utils.amagarEstat();
    }
    catch (error) {
        const mensaje = error instanceof Error ? error.message : "Error desconegut";
        utils.mostrarEstat(`Error carregant el tipus: ${mensaje}`, "error");
    }
}
//# sourceMappingURL=main.js.map