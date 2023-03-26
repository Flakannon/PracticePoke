import { writable } from "svelte/store";

export const pokemon = writable([]);

const fetchPokemon = async (num) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${num}`);
    const data = await response.json();
    // loop through the data and create a new array of objects
    const fetchedPokemon = data.results.map((data, index) => {
        const id = index + 1;
        const image = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`;
        return {
            id,
            name: data.name,
            image,
        };
    });
    pokemon.set(fetchedPokemon)
};

fetchPokemon(151);


// test reactivity of store and vars by changing the number of pokemon to fetch after 3 seconds
// setTimeout(() => {
//     fetchPokemon(10);
// }, 3000);