import { h, FunctionalComponent } from '/web_modules/preact.js';
import { useState, useEffect } from '/web_modules/preact/hooks.js';
import moment from '/web_modules/moment.js';
import { html } from '/web_modules/htm/preact.js';

const resources = [
  {
    title: 'JHU Dashboard',
    link(mobile?: boolean) {
      return mobile
        ? 'https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61'
        : 'https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6';
    },
  },
  {
    title: 'Bing Dashboard',
    link() {
      return 'https://www.bing.com/covid';
    },
  },
  {
    title: 'NYT Interactive',
    link() {
      return 'https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html';
    },
  },
  {
    title: 'STAT Dashboard',
    link() {
      return 'https://www.statnews.com/2020/03/26/covid-19-tracker/';
    },
  },
  {
    title: 'The COVID Tracking Project',
    link() {
      return 'https://covidtracking.com/';
    },
  },
  {
    title: 'COVID-19 Hospital Projections',
    link() {
      return 'https://covid19.healthdata.org/';
    },
  },
];

const initialState = {
  status: 'loading',
  data: {
    positive: 'Loading...',
    recovered: 'Loading...',
    death: 'Loading...',
    lastModified: null,
  },
};

const Home: FunctionalComponent = () => {
  const [usData, setData] = useState(initialState);

  const sinceUpdate = (updateTime: string | null) => {
    if (updateTime) {
      // @ts-ignore
      const now = new moment();
      const then = moment(updateTime);
      const since = moment.duration(then.diff(now)).humanize(true);
      return since;
    }

    return null;
  };

  const fetchUS = () => {
    fetch('https://covidtracking.com/api/us')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(data);
        setData({ status: 'has-data', data: data[0] });
      })
      .catch(() => {
        setData({ status: 'error', data: initialState.data });
      });
  };
  useEffect(() => {
    fetchUS();
  }, []);

  return html`<div>
    <div class="pb-3">
      <h3>Latest US Numbers</h3>
      <div class="d-lg-flex justify-content-lg-center">
        <ul class="list-group list-group-horizontal-sm">
          <li class="list-group-item list-group-item-danger">
            Positive: ${usData.data.positive}
          </li>
          <li class="list-group-item list-group-item-success">Recovered: ${
            usData.data.recovered
          }</li>
          <li class="list-group-item list-group-item-secondary">Fatal: ${
            usData.data.death
          }</li>
        </ul>
      </div>
      <div class="py-2">
        <p class="text-lg-center font-weight-light" style="font-size: 10px;">Via <a href="https://covidtracking.com" target="_blank">The COVID Tracking Project</a>, last updated: ${sinceUpdate(
          usData.data.lastModified,
        )}</p>
      </div>
    </div>
    <div class="pb-3">
    <h3>Resources</h1>
    <div class="list-group">
      ${resources.map((i) => {
        return (
          // <li class="list-group-item">
          <a
            class="list-group-item list-group-item-action"
            href={i.link(window.innerWidth <= 800)}
            target="_blank"
          >
            {i.title}
          </a>
          // </li>
        );
      })}
    </div>
    </div>
  </div>`;
};

export default Home;
