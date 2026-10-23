import * as models from "./models.js";
import * as utils from "./utils.js";
import {EstatTipus} from "./models.js";


// ==========================================================
// EXERCICI 1: Llistar els 151 Pokémon
// ==========================================================
// TODO: Implementa la lògica de l'exercici 1 seguint els requisits
const btn_show_all = document.getElementById("btn-show-all") as HTMLButtonElement;
export const pokemonList = document.getElementById("pokemon-list") as HTMLUListElement;
export const mapaPokemon = new Map<number, models.BasePokemon>();


//llama a la lista de pokemons y comprueba si ha la ha devuelto y se la pasa a la funcion create_all_pokemos para crear los objetos BasePokemon
async function carregarLlistaPokemon() {

    utils.mostrarEstat("Carregant...", "loading");

    try {
        const resposta: Response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");

        if (!resposta.ok) {
            console.log(resposta.status);
            throw new Error(`Error HTTP: ${resposta.status}`);
        }

        const data = await resposta.json() as models.IPokeApiListResponse;

        for (const item of data.results) {
            const pokemon = new models.BasePokemon(item);
            mapaPokemon.set(pokemon.id, pokemon);
        }

        utils.renderitzarLlistaNoms(mapaPokemon, pokemonList);
        utils.amagarEstat();

    } catch (error) {
        utils.mostrarEstat(`Error carregant Pokémon: ${error}`, "error");
    }
}

//boton con el listener para emepezar a ejecutar todas las funciones para crear la lista
btn_show_all.addEventListener("click", carregarLlistaPokemon);


// ==========================================================
// EXERCICI 2: Cercador en temps real
// ==========================================================
// TODO: Implementa la lògica de l'exercici 2 seguint els requisits



const cachePokemon = new Map<number, models.DetailedPokemon>();

document.getElementById("pokemon-list")?.addEventListener("click", (event) => {
    const target = event.target as HTMLElement;
    const li = target.closest("li");
    if (!li || !li.dataset.id) return;   // ignora el mensaje "placeholder"

    utils.marcarItemActiu(target);

    const pokemon = mapaPokemon.get(Number(li.dataset.id));
    if (pokemon) {
        carregarDetallPokemon(pokemon.id, pokemon.url);
    }
});

async function carregarDetallPokemon(id: number, url: string): Promise<void> {
    try {
        let detall = cachePokemon.get(id);

        if (!detall) {   // solo hace fetch si no está en la cache
            utils.mostrarEstat("Carregant el detall del Pokémon...", "loading");
            const resposta = await fetch(url);
            if (!resposta.ok) throw new Error(`Error ${resposta.status}`);
            const data = (await resposta.json()) as models.IPokeApiDetail;
            detall = new models.DetailedPokemon(data, url);
            cachePokemon.set(id, detall);
        }

        utils.renderitzarDetallCard(detall);
        utils.amagarEstat();
    } catch (error) {
        const missatge = error instanceof Error ? error.message : "Error desconegut";
        utils.mostrarEstat(`No s'ha pogut carregar el detall: ${missatge}`, "error");
    }
}

// ==========================================================
// EXERCICI 4: Botons de filtre per tipus
// ==========================================================
// TODO: Implementa la lògica de l'exercici 4 seguint els requisits



// ==========================================================
// EXERCICI 5: Filtrar la llista per tipus
// ==========================================================
// TODO: Implementa la lògica de l'exercici 5 seguint els requisits