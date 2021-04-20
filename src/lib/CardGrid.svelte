<script>
    import Card from '$lib/Card.svelte';
    import forecastStore from '../data/forecast-store'   
</script>


<div class="flex sm:flex-row flex-col gap-y-4 gap-x-4 mt-6 justify-center items-center sm:items-start">
    {#if $forecastStore.forecast}
        {#each $forecastStore.forecast.forecastday as forecast}
            <Card {forecast} locationInfo={$forecastStore.location} />
        {/each}
    {:else}      
        <p>Search for weather in your area</p>
    {/if}
</div>