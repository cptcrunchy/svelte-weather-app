<svelte:head>
	<title>Svelte Weather</title>
</svelte:head>

<script>
	import Header from '$lib/Header.svelte';
	import CardGrid from '$lib/CardGrid.svelte';
	import { Map, Marker, Geocoder, controls } from '../../node_modules/@beyonk/svelte-mapbox'
	import forecastStore from '../data/forecast-store'
	
	const weatherKey = import.meta.env.VITE_WEATHER_KEY
	const mapboxToken = import.meta.env.VITE_MAPBOXGL_ACCESS_TOKEN
	const { GeolocateControl, NavigationControl } = controls
	
	if(typeof window !== 'undefined') {
		window.global = {}
	}
	$: place = null
	$: center = { lat: 29.39, lng: -98.39 }
	let zoom = 11.15
	let mapComponent;
	
	if(JSON.stringify($forecastStore) != JSON.stringify({})){
		place = $forecastStore.location.name
		center = { lat: $forecastStore.location.lat, lng: $forecastStore.location.lon}
	}
	
	function placeChanged(e){
		const { result } = e.detail
		console.log(result)
		place = result.place_name;
		const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${result.place_name}&days=5&aqi=no&alerts=no`
		
		fetch(weatherUrl).then(res => {
			if(!res.ok) throw new Error("An error ocurred.")
			return res.json()
		}).then(data => {
			// console.log(data)
			forecastStore.setForecast(data)
			mapComponent.setCenter(result.center, 14)
		}).catch(console.error)
	}

	function handleRecenter(e){
		console.log(e.detail)
		const [lng, lat ] = e.detail.center
		center = { lat, lng}
	}

</script>

<Header location={place} />

<main class="flex flex-col">
	<Geocoder accessToken={mapboxToken} on:result={placeChanged} />
	<CardGrid />
	<div class="w-full map-wrap">
		<Map bind:this={mapComponent} bind:zoom	{center} on:recentre={handleRecenter} accessToken={mapboxToken} >
			<NavigationControl />
			<GeolocateControl />
			<Marker lat={center.lat} lng={center.lng} />
		</Map>
	</div>
</main>


<style style lang="postcss">
	main {
		@apply px-4;
		@apply py-2;
		@apply mx-auto;
		height: 90vh;
		justify-content: space-between;
		align-items: stretch;
	}

	.map-wrap {
		width: 100%;
		height: 300px;
		align-self: flex-end;
	}	
</style>
