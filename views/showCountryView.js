import { country, city } from "../src/domSelection.js";

export const showCountry = function (data) {
  country.textContent = data.country;
  city.textContent = data.name;
};
