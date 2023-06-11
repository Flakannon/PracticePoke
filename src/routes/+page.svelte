<script>
	import { pokemon } from '../stores/pokestore.js';
    import  MonCard  from '../components/pokemonCard.svelte';

    let filterTerm = "";
    let filteredPokemon = [];
    $:{
        if(filterTerm) {
            filteredPokemon = $pokemon.filter(mon => mon.name.toLowerCase().includes(filterTerm.toLowerCase()) || mon.id.toString().includes(filterTerm));
        } else {
            filteredPokemon = [...$pokemon];
    }
}
</script>

<svelte:head>
    <title>PokeDex</title>
    <meta name="description" content="Pokemon">
</svelte:head>

<h1 class="text-4xl text-center my-8 uppercase">Poke</h1>

<input class="w-full rounded-md text-lg p-4 border-2 border-blue-700" type="text" bind:value={filterTerm} placeholder="Search Pokemon Name or Number">

<div class="py-4 grid gap-4 md:grid-cols-2 grid-cols 1">
{#each filteredPokemon as mon}
<MonCard mon={mon} />
{/each}
</div>

