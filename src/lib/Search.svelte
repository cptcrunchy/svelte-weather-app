<script>
const weatherKey = import.meta.env.VITE_WEATHER_KEY
import forecastStore from '../data/forecast-store'

export let forecastQueryId = null;

let queryValue = ""

if(forecastQueryId){
    const unsubscribe = forecastStore.subscribe(items => {
        const selectedForecast = items.find( ({id}) => id === forecastQueryId);
        queryValue = selectedForecast.value
    })
    unsubscribe();
}




function handleSubmit(){
    const forecastQuery = {
        id: Math.floor(Math.random() * 181) + 1,
        query: queryValue
    }
    const weatherUrl = `https://api.weatherapi.com/v1/forecast.json?key=${weatherKey}&q=${queryValue}&days=5&aqi=no&alerts=no`
    fetch(weatherUrl).then(res => {
        if(!res.ok) throw new Error("An error ocurred.")
        return res.json()
    }).then(data => {
        forecastStore.addForecast({...forecastQuery, data})
    }).catch(console.error)
}


</script>



<form class="flex justify-content-start" on:submit|preventDefault={handleSubmit}>
    <span class="text-lg rounded-l px-4 py-2 whitespace-no-wrap">Place:</span>
    <input name="queryField"
        value={queryValue}
        on:input={e => queryValue = e.target.value}
        class="border border-2 rounded-l px-2 py-2 w-auto shadow ripple hover:shadow-lg"
        type="text"
        placeholder="Search for weather" />
    <button 
        type="submit"
        on:click={handleSubmit}
        class="inline-block py-2 px-4 text-xs text-lg text-center text-white uppercase bg-blue-700 rounded-r shadow ripple hover:shadow-lg hover:bg-blue-800 focus:outline-none"
    >Find</button>
</form>