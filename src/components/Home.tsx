import { h, FunctionalComponent } from "/web_modules/preact.js";

import Fetch from "./Fetch.js";
import Resources from "./Resources.js";

const Home: FunctionalComponent = () => {
  return (
    <div>
      <Fetch />
      <Resources />
    </div>
  );
};

export default Home;
