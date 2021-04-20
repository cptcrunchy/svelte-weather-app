<script>
    export let location = "";
</script>

<header class="bg-teal-400">
    <nav class="flex justify-between w-full bg-blue-500 text-white p-4">
        <a href="/"><span class="font-semibold text-xl tracking-tight">Svelte Weather</span></a>
        <div class="md:items-center md:w-auto flex">
            <div class="md:flex hidden">
                <p class="block md:text-white mr-4">Current Location: {location}</p>
            </div>
        </div>
    </nav>
</header>