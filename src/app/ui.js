export class UI {
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.str = document.getElementById('weather-string');
        this.hum = document.getElementById('weather-humidity');
        this.wind = document.getElementById('weather-wind');
    }

    render(weather) {
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = `Desc:  ${weather.weather[0].description}`;
        this.str.textContent = `Temp: ${weather.main.temp} C`;
        this.hum.textContent = `Humidity: ${weather.main.humidity}%`;
        this.wind.textContent = `Wind: ${weather.wind.speed} m/s`;
    }

}