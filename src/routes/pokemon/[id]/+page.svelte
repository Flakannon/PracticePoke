<script>
	export let data;
	let type = data.pokemon.types.map((type) => type.type.name).join(', ');
	const indexName = data.pokemon.name.charAt(0).toUpperCase() + data.pokemon.name.slice(1);
</script>

<svelte:head>
	<title>{indexName} | PokeDex</title>
	<meta name="description" content="Poke" />
</svelte:head>

<div class="flex flex-col items-center bg-blue-500"> // TODO remove fill and make div border dynamic based on type blue for water, red for fire, etc. Can gradient the border when multiple types
	<!-- h1 with mon name in -->
	<h1 class="text-4xl text-center my-8 capitalize">{data.pokemon.name}</h1>

	<p>
		Type: <strong>{type}</strong> | Height <strong>{data.pokemon.height}"</strong>
		| Weight <strong>{data.pokemon.weight}</strong>
	</p>

	// TODO front and back sprites to be in a Carousel svelte component
	<img
		class="w-60 h-60 inline-flex"
		src={data.pokemon.sprites['front_default']}
		alt={data.pokemon.name}
	/>
	<img
		class="w-60 h-60 inline-flex"
		src={data.pokemon.sprites['back_default']}
		alt={data.pokemon.name}
	/>
</div>
