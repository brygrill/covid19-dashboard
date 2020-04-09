import { h } from "/web_modules/preact.js";

import Fetch from "./Fetch.js";
import Resources from "./Resources.js";

const Search = ({ state }: { state: string }) => {
  return (
    <div>
      <Fetch search={state.toUpperCase()} />
      <Resources />
    </div>
  );
};

export default Search;
