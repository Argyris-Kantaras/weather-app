import * as model from "./model.js";
import { OBJECT_URL } from "./config.js";
import {
  submitButton,
  querySubmit,
  showAstroResults,
  // getCurrLocation,
  showWeatherResults,
  display3DaysForecast,
  displayTodaysForecast,
  closeForecastContainer,
  displayHourlyForecasts,
} from "./listeners.js";
import astroview from "../views/astroview.js";
import currWeatherView from "../views/currentWeatherView.js";
import { showCountry } from "../views/showCountryView.js";
import { city, country, welcomePage } from "./domSelection.js";

country.textContent = "";
city.textContent = "";

export const controlWelcomePage = function (sec) {
  setTimeout(function () {
    welcomePage.classList.add("opacity");
  }, 3000);
  setTimeout(function () {
    welcomePage.classList.add("hidden");
  }, 5200);
};

export const controlAstroData = async function (query) {
  try {
    query = astroview.getQuery();
    if (!query) return;
    await model.loadAstroData(query, OBJECT_URL);
    astroview._data = model.state.astronomy;
  } catch (err) {
    astroview.renderErrorMessage(err.message);
  }
};

export const controllWeatherData = async function (query) {
  try {
    query = currWeatherView.getQuery();

    if (!query) return;
    await model.loadWeatherData(query, OBJECT_URL);
    currWeatherView._data = model.state.currentWeather;
    display3DaysForecast(model.state.forecasts);
    displayTodaysForecast(model.state.forecasts);
    displayHourlyForecasts(model.state.forecasts);
    showCountry(model.state.location);
    console.log(model.state.location);
  } catch (error) {
    currWeatherView.renderErrorMessage(error.message);
  }
};

const controlLocationData = async function () {
  try {
    navigator.geolocation.getCurrentPosition(
      function (responce) {
        const { latitude } = responce.coords;
        const { longitude } = responce.coords;
        model.loadGeolocation(latitude, longitude);
      },

      function (reject) {
        console.error(reject);
      }
    );
  } catch (err) {
    currWeatherView.renderErrorMessage(error.message);
  }
};

const init = function () {
  controlWelcomePage();
  // getCurrLocation(controlLocationData);
  // getCurrLocation(controllWeatherData);
  closeForecastContainer();
  showWeatherResults(model.state.currentWeather);
  showAstroResults();
  querySubmit(controlAstroData);
  querySubmit(controllWeatherData);
  submitButton(controllWeatherData);
  submitButton(controlAstroData);
};
init();
