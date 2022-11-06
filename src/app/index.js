const { Weather } = require('./weather');
const { UI } = require('./ui');
const { Store } = require('./store');

const store = new Store();
const { city,countryCode } = store.getLocationData();
const weather = new Weather(city, countryCode);
const ui = new UI();

require('../css/style.css');

async function fetchWeather() {
    const data = await weather.getWeather();
    console.log(data);
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e)=>{
    e.preventDefault();
    const city = document.getElementById('city').value
    const countryCode = document.getElementById('country-code').value;
    weather.changeLocation(city, countryCode);
    store.setLocationData(city, countryCode);
    fetchWeather();
    // const weather = new Weather(city, countryCode);
    // fetchWeather(weather);
    console.log(countryCode, city);
});

document.addEventListener('DOMContentLoaded', fetchWeather)