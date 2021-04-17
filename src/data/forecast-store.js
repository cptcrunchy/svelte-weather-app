import { writable } from 'svelte/store'

const forecasts = writable([])


const forecastStore = {
    subscribe: forecasts.subscribe,
    setForecasts: forecastList => {
        forecasts.set(forecastList)
    },
    addForecast: forecastQuery => {
        forecasts.update(items => [forecastQuery,...items])
    }
}

export default forecastStore