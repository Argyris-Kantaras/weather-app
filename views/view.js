import { locationInp } from "../src/domSelection.js";
import { state } from "../src/model.js";

export class View {
  _parentEl;
  _data;

  getQuery() {
    const query = locationInp.value;
    return (state.query = query);
  }

  render(data) {
    this._parentEl.insertAdjacentHTML("beforeend", this.generateMarkup(data));
  }

  clear() {
    this._parentEl.innerHTML = "";
  }
  renderErrorMessage(message) {
    const markup = `
    <h3 class = 'errMessage'>Sorry that's not a valid location ${message}</h1>
    `;
    this._parentEl.insertAdjacentHTML("afterbegin", markup);
  }
}
