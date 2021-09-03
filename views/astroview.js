import { View } from "./view.js";
import { astroContainer } from "../src/domSelection.js";
import illumination from "../images/astro images/moon phases/illumination.jpeg";
import firstQuarter from "../images/astro images/moon phases/first quarter.jpg";
import fullMoon from "../images/astro images/moon phases/full moon.jpg";
import lastQuarter from "../images/astro images/moon phases/last quarter.jpg";
import newMoon from "../images/astro images/moon phases/new moon.jpg";
import waningCrescent from "../images/astro images/moon phases/waning crescent.jpg";
import waningGibbous from "../images/astro images/moon phases/waning gibbous.jpg";
import waxingCrescent from "../images/astro images/moon phases/waxing crescent.jpg";
import waxingGibbous from "../images/astro images/moon phases/waxing gibbous.jpg";

class AstroView extends View {
  _parentEl = astroContainer;
  _data;

  generateMarkup() {
    let getMoonPhase = "";
    if (!this._data) return;
    console.log(this._data.moonPhase);

    if (this._data.moonPhase.toLowerCase() === "new moon")
      getMoonPhase = newMoon;
    if (this._data.moonPhase.toLowerCase() === "full moon")
      getMoonPhase = fullMoon;
    if (this._data.moonPhase.toLowerCase() === "waning crescent")
      getMoonPhase = waningCrescent;
    if (this._data.moonPhase.toLowerCase() === "waning gibbous")
      getMoonPhase = waningGibbous;
    if (this._data.moonPhase.toLowerCase() === "waxing crescent")
      getMoonPhase = waxingCrescent;
    if (this._data.moonPhase.toLowerCase() === "waxing gibbous")
      getMoonPhase = waxingGibbous;
    if (this._data.moonPhase.toLowerCase() === "first quarter")
      getMoonPhase = firstQuarter;
    if (this._data.moonPhase.toLowerCase() === "last quarter")
      getMoonPhase = lastQuarter;

    const markup = `
    <li class=" illumination">Illumination:${this._data.illumination}</li>
    <img class = 'illumination-img' src="${illumination}" alt="Illumination" />
    <li class="astro-el">moonrise: ${this._data.moonrise}</li>
    <li class="astro-el">moonset:${this._data.moonset}</li>
    <li class="astro-el">sunrise:${this._data.sunrise}</li>
    <li class="astro-el">sunset:${this._data.sunset}</li>
    <li class="moon-phase astro-el">Moon phase:${this._data.moonPhase}</li>
    <img class = 'phase-img' src ='${getMoonPhase}' alt ='moon phase'>
    `;
    return markup;
  }
}
export default new AstroView();
