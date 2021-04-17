import { writable } from 'svelte/store'

const forecast = writable({})

const forecastStore = {
    subscribe: forecast.subscribe,
    setForecast: forecastData => {
        forecast.set(forecastData)
    },
}

export default forecastStore