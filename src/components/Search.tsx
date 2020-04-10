import { h } from "/web_modules/preact.js";

import Fetch from "./Fetch.js";
import Resources from "./Resources.js";

// @ts-ignore
const Search = (props) => {
  const { state } = props;
  return (
    <div>
      <Fetch search={state.toUpperCase()} />
      <Resources />
    </div>
  );
};

export default Search;
