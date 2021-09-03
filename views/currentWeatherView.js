import { forecasts, overlay } from "../src/domSelection.js";
import { View } from "./view.js";
import cloudy from "../images/weather images/cloudy.jpg";
import rainy from "../images/weather images/rainy.jpg";
import snowy from "../images/weather images/snowy.jpg";
import sunny from "../images/weather images/sunny.jpg";

class CurrWeatherView extends View {
  _parentEl = forecasts;
  _data;

  generateMarkup() {
    let getWeatherImg = "";
    if (this._data.text.toLowerCase().includes("cloudy"))
      getWeatherImg = cloudy;
    if (this._data.text.toLowerCase().includes("rainy")) getWeatherImg = rainy;
    if (this._data.text.toLowerCase().includes("snowy")) getWeatherImg = snowy;
    if (this._data.text.toLowerCase().includes("clear")) getWeatherImg = sunny;
    console.log(this._data.text.toLowerCase().includes("clear"));

    overlay.style.backgroundImage = `url(${getWeatherImg})`;
    if (!this._data) return;
    const markup = `
    <h3 class="date">Updated: ${this._data.lastUpdated}</h3>
    
    <img crossorigin class = 'weather-icon' src = '${this._data.icon}' alt = 'weather-icon'>
    <li class="dat text"> ${this._data.text} </li>
    <li class="dat temp">Temperature: ${this._data.temp} &deg;</li>
    <li class="dat feels-like">Feels Like: ${this._data.feelsLike} &deg;</li>
    <li class="dat wind-spd">Wind Speed: ${this._data.windSpeed} km/h</li>
    <li class="dat wind-dir">Wind Direction: ${this._data.windDir}</li>
    <li class="dat humidity">Humidity: ${this._data.humidity}%</li>
    <li class="dat cloud">cloud: ${this._data.cloud}</li>
      `;
    return markup;
  }
}
export default new CurrWeatherView();
