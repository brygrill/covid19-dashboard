import { h, render } from "/web_modules/preact.js";
import { html } from "/web_modules/htm/preact.js";
import App from "./components/App.js";

const Layout = () => html`<div>
  <nav class="navbar navbar-light bg-light">
    <a class="navbar-brand" href="/">Covid-19 Resources</a>
  </nav>
  <div class="container p-3">
    ${(<App />)}
  </div>
</div>`;

const appMount = document.querySelector("#app");
if (appMount) render(html`<div>${(<Layout />)}</div>`, appMount);

export default App;
