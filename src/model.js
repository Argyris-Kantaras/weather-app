import { GEO_OBJECT } from "./config.js";
import { showCountry } from "../views/showCountryView.js";

export const state = {
  astronomy: {},
  currentWeather: {},
  forecasts: {},
  days3forecasts: [],
  query: "",
  location: {},
  currentLocation: {},
  viewData: {},
};

export const loadAstroData = async function (query, object_url) {
  try {
    const res = await fetch(
      `https://weatherapi-com.p.rapidapi.com/astronomy.json?q=${query}`,
      object_url
    );
    const data = await res.json();
    state.astronomy = createAstroObject(data.astronomy);
  } catch (err) {
    console.error(err);
  }
};

export const loadWeatherData = async function (query, object_url, days) {
  try {
    const res = await fetch(
      `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${query}&days=3`,
      object_url
    );
    const data = await res.json();
    console.log(data);
    state.currentWeather = createCurrentWeatherObj(data);
    console.log(data);
    state.forecasts = arrayForecastDay(data.forecast.forecastday);
    arrayForecastDays(data.forecast.forecastday);
    state.location = locationObj(data.location);
  } catch (error) {
    console.error(error);
  }
};

export const loadGeolocation = async function (lat, lng) {
  try {
    const res = await fetch(
      `https://forward-reverse-geocoding.p.rapidapi.com/v1/reverse?lat=${lat}&lon=${lng}&accept-language=en&polygon_threshold=0.0`,
      GEO_OBJECT
    );
    const data = await res.json();
    state.currentLocation = locationObj(data.address);
    state.viewData = {
      country: state.currentLocation.country,
      name: state.currentLocation.town,
    };

    showCountry(state.viewData);
  } catch (error) {
    console.error(error);
  }
};

export const createAstroObject = function (data) {
  const dataObj = data.astro;
  return {
    illumination: dataObj.moon_illumination,
    moonPhase: dataObj.moon_phase,
    moonrise: dataObj.moonrise,
    moonset: dataObj.moonset,
    sunrise: dataObj.sunrise,
    sunset: dataObj.sunset,
  };
};

export const createCurrentWeatherObj = function (data) {
  const dataObj = data.current;
  return {
    cloud: dataObj.cloud,
    icon: dataObj.condition.icon,
    text: dataObj.condition.text,
    feelsLike: dataObj.feelslike_c,
    humidity: dataObj.humidity,
    lastUpdated: dataObj.last_updated,
    temp: dataObj.temp_c,
    windSpeed: dataObj.wind_kph,
    windDir: dataObj.wind_dir,
  };
};

const arrayForecastDay = function (data) {
  return data;
};

const arrayForecastDays = function (data) {
  return data;
};
const locationObj = function (data) {
  return data;
};

export const days3Forecast = function (data) {
  return {
    id: data.date_epoch,
    date: data.date,
    text: data.day.condition.text,
    icon: data.day.condition.icon,
    averageTemp: data.day.avgtemp_c,
    averageHumidity: data.day.averageHumidity,
    chanceRain: data.day.daily_chance_of_rain,
    chanceSnow: data.day.daily_chance_of_snow,
    maxTemp: data.day.maxtemp_c,
    minTemp: data.day.mintemp_c,
    maxWindSpeed: data.day.maxwind_kph,
  };
};

export const createHourlyObj = function (data) {
  return {
    chanceRain: data.chance_of_rain,
    chanceSnow: data.chance_of_snow,
    cloud: data.cloud,
    icon: data.condition.icon,
    text: data.condition.text,
    temp: data.temp_c,
    time: data.time,
    windSpeed: data.wind_kph,
    windDir: data.wind_dir,
  };
};
