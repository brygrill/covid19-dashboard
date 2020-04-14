import { h, FunctionalComponent } from "/web_modules/preact.js";

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
    title: "AWS Data Lake Dashboard",
    link() {
      return "https://dj2taa9i652rf.cloudfront.net/dashboard.html?dashboardName=COVID-19";
    },
  },
  {
    title: "Bloomberg Graphics",
    link() {
      return "https://www.bloomberg.com/graphics/2020-coronavirus-where-is-the-us-on-the-curve/";
    },
  },
  {
    title: "COVID-19 Hospital Projections",
    link() {
      return "https://covid19.healthdata.org/";
    },
  },
];

const Resources: FunctionalComponent = () => {
  return (
    <div class="pb-3">
      <h3>
        Resources <i class="fas fa-external-link-square-alt"></i>{" "}
      </h3>
      <div class="list-group">
        {resources.map((i) => {
          return (
            <a
              class="list-group-item list-group-item-action"
              href={i.link(window.innerWidth <= 800)}
              target="_blank"
            >
              {i.title}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Resources;
