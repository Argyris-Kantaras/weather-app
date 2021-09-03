import astroview from "../views/astroview.js";
import currWeatherView from "../views/currentWeatherView.js";
import {
  btnAstro,
  locationForm,
  btnWeather,
  btn3DaysForecast,
  forecasts,
  forecastContainer,
  btnToday,
  closeForecasts,
  overlay,
  btnHourly,
  astroMainContainer,
  astroContainer,
  btnSearch,
  // btnLocation,
} from "./domSelection.js";
import forecastView from "../views/14DaysForecastView.js";
import { createHourlyObj, days3Forecast } from "./model.js";
import hourlyView from "../views/hourlyForecastView.js";

export const querySubmit = function (handler) {
  locationForm.addEventListener("submit", function (e) {
    astroContainer.innerHTML = "";
    forecasts.innerHTML = "";
    e.preventDefault();
    handler();
  });
};
export const submitButton = function (handler) {
  astroContainer.innerHTML = "";
  forecasts.innerHTML = "";
  btnSearch.addEventListener("click", function () {
    handler();
  });
};

export const showAstroResults = function () {
  btnAstro.addEventListener("click", function () {
    astroMainContainer.classList.remove("hidden");
    astroContainer.innerHTML = "";
    overlay.style.display = "none";
    astroview.render();
  });
};

export const showWeatherResults = function (data) {
  btnWeather.addEventListener("click", function () {
    forecasts.innerHTML = "";
    overlay.style.display = "inherit";
    astroMainContainer.classList.add("hidden");
    overlay.style.backgroundImage = 'url("./images/weather images/rainy.jpg")';
    forecastContainer.classList.remove("hidden");
    currWeatherView.render();
  });
};

export const displayTodaysForecast = function (data) {
  btnToday.addEventListener("click", function () {
    forecasts.innerHTML = "";
    forecastView.render(days3Forecast(data[0]));
  });
};

export const display3DaysForecast = function (data) {
  btn3DaysForecast.addEventListener("click", function () {
    forecasts.innerHTML = "";
    data.forEach((obj) => {
      forecastView.render(days3Forecast(obj));
    });
  });
};

export const closeForecastContainer = function () {
  closeForecasts.addEventListener("click", function () {
    astroMainContainer.classList.remove("hidden");
    astroContainer.innerHTML = "";
    forecasts.innerHTML = "";
    overlay.style.display = "none";
    forecastContainer.classList.add("hidden");
    overlay.style.backgroundImage = "none";
  });
};

export const displayHourlyForecasts = function (data) {
  btnHourly.addEventListener("click", function () {
    forecasts.innerHTML = "";
    data.forEach((obj) => {
      const newObj = obj.hour;
      newObj.forEach((obj) => {
        hourlyView.render(createHourlyObj(obj));
      });
    });
  });
};

// export const getCurrLocation = function (handler) {
//   btnLocation.addEventListener("click", function () {
//     handler();
//   });
// };
