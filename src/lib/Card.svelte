<script>
    export let forecast = null;
    export let locationInfo = null;

    let isMetric = false;
    
</script>



<div class="flex flex-col bg-gray-100 rounded p-4 w-full max-w-xs shadow-lg">
    <div class="font-bold text-xl">{locationInfo.name}, {locationInfo.region}</div>

    <div class="text-sm text-gray-500">{new Date(forecast.date).toDateString()}</div>
    <div class="mt-6 text-6xl self-center inline-flex items-center justify-center rounded-lg text-indigo-400 h-24 w-24">
        <img src={forecast.day.condition.icon} alt={forecast.day.condition.text} />
    </div>
    <div class="flex flex-row items-center justify-center mt-6">
        <div class="font-medium text-6xl">{isMetric ? Math.floor(forecast.day.avgtemp_c) : Math.floor(forecast.day.avgtemp_f)}&deg;</div>
        <div class="flex flex-col items-center ml-6">
            <div>{forecast.day.condition.text}</div>
            <div class="mt-1">
                <span class="text-sm"><i class="far fa-long-arrow-up"></i></span>
                <span class="text-sm font-light text-gray-500">High: {isMetric ? Math.floor(forecast.day.maxtemp_c) : Math.floor(forecast.day.maxtemp_f)}&deg;{isMetric ? "C" : "F"}</span>
            </div>
            <div>
                <span class="text-sm"><i class="far fa-long-arrow-down"></i></span>
                <span class="text-sm font-light text-gray-500">Low: {isMetric ? Math.floor(forecast.day.mintemp_c) : Math.floor(forecast.day.mintemp_f)}&deg;{isMetric ? "C" : "F"}</span>
            </div>
        </div>
    </div>
    <div class="flex flex-row justify-between mt-6">
        <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Wind</div>
            <div class="text-sm text-gray-500">{forecast.day.maxwind_kph}k/h</div>
        </div>
        <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Humidity</div>
            <div class="text-sm text-gray-500">{forecast.day.avghumidity}%</div>
        </div>
        <div class="flex flex-col items-center">
            <div class="font-medium text-sm">Visibility</div>
            <div class="text-sm text-gray-500">{forecast.day.avgvis_km}km</div>
        </div>
    </div>
</div>