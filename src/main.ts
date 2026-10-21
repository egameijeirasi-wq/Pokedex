import * as models from "./models.js";
import * as utils from "./utils.js";

// ==========================================================
// EXERCICI 1: Llistar els 151 Pokémon
// ==========================================================
// TODO: Implementa la lògica de l'exercici 1 seguint els requisits
const btn_show_all = document.getElementById("btn-show-all") as HTMLButtonElement;
export const pokemonList = document.getElementById("pokemon-list") as HTMLUListElement;
export const mapaPokemon = new Map<number, models.BasePokemon>();

//recibe los datos de la APIpokemon y crea uno por uno cada objeto pokemon y lo almacena en el mapaPokemon
//pasa el contenedor de la lista y el map con los objetos Pokemon al metodo renderitzarLlistaNoms de utils
const create_all_pokemons = (datos:models.IPokeApiListResponse) =>{
    for (const item of datos.results) {
        const pokemon = new models.BasePokemon(item);
        mapaPokemon.set(pokemon.id, pokemon);
    }
    utils.renderitzarLlistaNoms(mapaPokemon, pokemonList);

}

//llama a la lista de pokemons y comprueba si ha la ha devuelto y se la pasa a la funcion create_all_pokemos para crear los objetos BasePokemon
const call_all_pokemons = async () => {
    const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    if (!resposta.ok) {
        console.log(resposta.status);
        throw new Error(`Error HTTP: ${resposta.status}`);
    }
    else {
        const datos = await resposta.json();
        console.log(datos);
        create_all_pokemons(datos);
        return datos;
    }
};

//boton con el listener para emepezar a ejecutar todas las funciones para crear la lista
btn_show_all.addEventListener("click", call_all_pokemons);




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



// ==========================================================
// EXERCICI 5: Filtrar la llista per tipus
// ==========================================================
// TODO: Implementa la lògica de l'exercici 5 seguint els requisits