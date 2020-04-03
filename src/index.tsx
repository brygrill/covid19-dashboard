import { h, render } from "/web_modules/preact.js";
import { html } from "/web_modules/htm/preact.js";
import App from "./components/App.js";

const appMount = document.querySelector("#app");
if (appMount) render(html`<div>${(<App />)}</div>`, appMount);

export default App;
