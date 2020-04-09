import { h } from "/web_modules/preact.js";
import { useState, useEffect } from "/web_modules/preact/hooks.js";

import Stats from "./Stats.js";

const initialState = {
  status: "loading",
  data: {
    positive: "...",
    recovered: "...",
    death: "...",
    state: undefined,
    lastModified: null,
  },
};

const Fetch = ({ search = null }: { search?: string | null }) => {
  console.log(search);
  const [covidData, setCovidData] = useState(initialState);

  const url = search
    ? "https://covidtracking.com/api/v1/states/current.json"
    : "https://covidtracking.com/api/v1/us/current.json";

  const filterData = (
    data: {
      positive: string;
      recovered: string;
      death: string;
      state: string;
      dateModified?: string;
      lastModified?: string;
    }[]
  ) => {
    if (search) {
      const found = data.filter((f) => {
        return f.state === search;
      })[0];

      return {
        positive: found.positive || "Unknown",
        recovered: found.recovered || "Unknown",
        death: found.death || "Unknown",
        state: found.state,
        lastModified: found.dateModified || found.lastModified || "Unknown",
      };
    }

    return data[0];
  };
  const fetchData = () => {
    fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        const d = filterData(data);
        console.log(d);
        setCovidData({ status: "has-data", data: d });
      })
      .catch(() => {
        setCovidData({ status: "error", data: initialState.data });
      });
  };
  useEffect(() => {
    fetchData();
  }, []);

  return <Stats data={covidData.data} label={search || "US"} />;
};

export default Fetch;
