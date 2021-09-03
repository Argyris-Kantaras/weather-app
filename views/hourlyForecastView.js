import { forecasts } from "../src/domSelection.js";
import { View } from "./view.js";

class HourlyView extends View {
  _parentEl = forecasts;
  generateMarkup(data) {
    console.log(data);
    const markup = `
    <h3 class = 'hourly-time'>${data.time}</h3>
        <li class = 'hourly-forecast'><img crossorigin src = '${data.icon}'>${data.text},Temperature:${data.temp},Wind speed: ${data.windSpeed},${data.windDir} </li>
        `;
    return markup;
  }
}
export default new HourlyView();
