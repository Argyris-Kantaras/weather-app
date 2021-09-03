import { forecasts } from "../src/domSelection.js";
import { View } from "./view.js";

class ForecastView extends View {
  _parentEl = forecasts;
  _data;

  generateMarkup(data) {
    const markup = `
    <li class="new-list">
        <h3 class="date">Date: ${data.date}</h3>
        <img crossorigin class = 'weather-icon' src = '${data.icon}' alt = 'weather-icon'>
        <li class="dat text"> ${data.text} </li>
        <li class="dat temp">Temperature: ${data.minTemp} - ${data.maxTemp} &deg;</li>
        <li class="dat avrg-temp">Average Temperature: ${data.averageTemp} &deg;</li>
        <li class="dat wind-spd">Wind Speed: ${data.maxWindSpeed} km/h</li>
        <li class="dat humidity">Humidity: ${data.averageHumidity}%</li>
        <li class="dat rain">Chance of rain: ${data.chanceRain}</li>
        <li class="dat snow">Chance of snow: ${data.chanceSnow}</li>
        </li>
          `;
    return markup;
  }

  getId(data) {
    const id = data.date_epoch;
    return id;
  }
}
export default new ForecastView();
