import { h } from "/web_modules/preact.js";
import { useState, useEffect } from "/web_modules/preact/hooks.js";

import Stats from "./Stats.js";

const initialState = {
  status: "loading",
  data: {
    positive: "...",
    recovered: "...",
    death: "...",
    lastModified: null,
  },
};

const Fetch = ({
  search = null,
}: {
  search?: string | null;
}) => {
  console.log(search);
  const [covidData, setCovidData] = useState(initialState);

  const fetchData = () => {
    fetch("https://covidtracking.com/api/v1/us/current.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setCovidData({ status: "has-data", data: data[0] });
      })
      .catch(() => {
        setCovidData({ status: "error", data: initialState.data });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <Stats data={covidData.data} />;
};

export default Fetch;
