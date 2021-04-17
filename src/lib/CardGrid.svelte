<script>
    import forecastStore from '../data/forecast-store'
    import Card from '$lib/Card.svelte';

    $:console.log($forecastStore)

</script>


<div class="flex sm:flex-row flex-col gap-y-4 gap-x-4 mt-6 justify-center items-center sm:items-start">
    {#each [1,2,3,4,5] as id}
	    <Card />
    {/each}
	
</div>