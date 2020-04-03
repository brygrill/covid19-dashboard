import { h, FunctionalComponent } from "/web_modules/preact.js";
import Router from "/web_modules/preact-router.js";

import Home from "./Home.js";
import Search from './Search.js'

const App: FunctionalComponent = () => (
  <Router>
    <Home path="/" />
    <Search path="/:state/:county" />
  </Router>
);

export default App;
