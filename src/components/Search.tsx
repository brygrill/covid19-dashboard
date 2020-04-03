import { h, FunctionalComponent } from "/web_modules/preact.js";
import { useState } from "/web_modules/preact/hooks.js";

const initialState = {
  status: "loading",
  data: [],
};

const Search: FunctionalComponent = (props) => {
  const [data, setData] = useState(initialState);
  console.log(props);
  console.log(data);

  return <div style="background-color: white">Search</div>;
};

export default Search;
