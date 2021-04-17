<script>
	import Header from '$lib/Header.svelte';
	import Search from '$lib/Search.svelte';
	import CardGrid from '$lib/CardGrid.svelte';
	let weatherQuery = "";
	$:console.log(weatherQuery)
</script>

<svelte:head>
	<title>Svelte Weather</title>
</svelte:head>
<Header />
<main>
	<Search />
	<CardGrid />
</main>
<div class="w-full bg-gray-800">
	mapbox
</div>

<style style lang="postcss">
	main {
		@apply text-center;
		@apply p-4;
		@apply mx-auto;
	}

	
</style>
