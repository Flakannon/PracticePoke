<script>
	import Carousel from 'svelte-carousel';
	export let data;
	let type = data.pokemon.types.map((type) => type.type.name).join(', ');
	const indexName = data.pokemon.name.charAt(0).toUpperCase() + data.pokemon.name.slice(1);
	let carousel
	const sprites = ['front_default', 'back_default']
	let colours = [];

	$:{
        data.pokemon.types.forEach(element => {
            colours.push(mapOfTypeToColour[element.type.name])
        });

		if (colours.length <=1) {
			colours.push(mapOfTypeToColour[type])
		}
    }

   const mapOfTypeToColour = {
        fire: "red",
        water: "blue",
		grass: "green",
		poison: "purple"
    };

</script>

<svelte:head>
	<title>{indexName} | PokeDex</title>
	<meta name="description" content="Poke" />
</svelte:head>


<div class="flex flex-col items-center border-4 border-x-{colours[0]}-500 border-y-{colours[1]}-500">
	<h1 class="text-4xl text-center my-8 capitalize">{data.pokemon.name}</h1>

	<p>
		Type: <strong>{type}</strong> | Height <strong>{data.pokemon.height}"</strong>
		| Weight <strong>{data.pokemon.weight}</strong>
	</p>

	<div class="w-1/3">
	<Carousel
		bind:this={carousel}
		autoplay
		autoplayDuration={2500}
	>
	{#each sprites as sprite}
		<img class="w-full inline-flex" src={data.pokemon.sprites[sprite]} alt={data.pokemon.name} />
	{/each}
	</Carousel>
</div>
</div>
