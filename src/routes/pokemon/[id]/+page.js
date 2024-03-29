export const load = ({ params, fetch }) => {

    const fetchPokemon = async (id) => {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
        const data = await response.json();
        return data;
    }

    return {
        pokemon: fetchPokemon(params.id)
    }
}
