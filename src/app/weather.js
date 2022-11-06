export class Weather {
    constructor(city, countryCode) {
        this.apiKey = "550bbbd3579685246936f3f9627e3d84"
        this.city = city;
        this.countryCode = countryCode;
    }

    async getWeather() {
        const uri = `https://api.openweathermap.org/data/2.5/weather?q=${this.city},${this.countryCode}&appid=${this.apiKey}&units=metric`
        return (await fetch(uri)).json();
    }

    changeLocation(city, codeCountry) {
        this.city = city;
        this.countryCode = codeCountry;
    }
}