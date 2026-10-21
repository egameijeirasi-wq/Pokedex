// ==========================================================
// EXERCICI 1: Llistar els 151 Pokémon
// ==========================================================
// TODO: Implementa la lògica de l'exercici 1 seguint els requisits


    const btn_show_all = document.getElementById("btn-show-all");
    //const mapaPokemon = new Map<number, models.BasePokemon>();
    //const create_all_pokemons = (datos) =>{
    //}
    const call_all_pokemons = async () => {
        const resposta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
        if (!resposta.ok) {
            console.log(resposta.status);
            throw new Error(`Error HTTP: ${resposta.status}`);
        }
        else {
            const datos = await resposta.json();
            console.log(datos);
            //create_all_pokemons(datos);
            return datos;
        }
    };
btn_show_all.addEventListener("click", call_all_pokemons);
export {};



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