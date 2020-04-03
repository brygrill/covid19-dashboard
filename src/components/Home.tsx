import { h, FunctionalComponent } from "/web_modules/preact.js";
import { html } from "/web_modules/htm/preact.js";

const resources = [
  {
    title: "JHU Dashboard",
    link(mobile?: boolean) {
      return mobile
        ? "https://www.arcgis.com/apps/opsdashboard/index.html#/85320e2ea5424dfaaa75ae62e5c06e61"
        : "https://gisanddata.maps.arcgis.com/apps/opsdashboard/index.html#/bda7594740fd40299423467b48e9ecf6";
    },
  },
  {
    title: "Bing Dashboard",
    link() {
      return "https://www.bing.com/covid";
    },
  },
  {
    title: "NYT Interactive",
    link() {
      return "https://www.nytimes.com/interactive/2020/us/coronavirus-us-cases.html";
    },
  },
  {
    title: "STAT Dashboard",
    link() {
      return "https://www.statnews.com/2020/03/26/covid-19-tracker/";
    },
  },
  {
    title: "The COVID Tracking Project",
    link() {
      return "https://covidtracking.com/";
    },
  },
  {
    title: "COVID-19 Projections",
    link() {
      return "https://covid19.healthdata.org/";
    },
  },
];
const Home: FunctionalComponent = (props) => {
  console.log(props);

  return html`<div>
    <ul class="list-group">
      ${resources.map((i) => {
        return (
          <li class="list-group-item">
            <a href={i.link(window.innerWidth <= 800)} target="_blank">
              {i.title}
            </a>
          </li>
        );
      })}
    </ul>
  </div>`;
};

export default Home;
