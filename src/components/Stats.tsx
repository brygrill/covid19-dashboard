import { h } from '/web_modules/preact.js';
import moment from '/web_modules/moment.js';

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

const Stats = ({
  data,
  label,
}: {
  data: {
    positive: string;
    recovered: string;
    death: string;
    lastModified: string | null;
  };
  label: string;
}) => {
  return (
    <div class="pb-3">
      <h3>Latest {label} Numbers</h3>
      <div class="d-lg-flex justify-content-lg-center">
        <ul class="list-group list-group-horizontal-sm">
          <li class="list-group-item list-group-item-danger">
            Positive: {data.positive}
          </li>
          <li class="list-group-item list-group-item-success">
            Recovered: {data.recovered}
          </li>
          <li class="list-group-item list-group-item-secondary">
            Fatal: {data.death}
          </li>
        </ul>
      </div>
      <div class="py-2">
        <p class="text-lg-center font-weight-light" style="font-size: 10px;">
          Via {' '}
          <a href="https://covidtracking.com" target="_blank">
            The COVID Tracking Project
          </a>
          , updated {sinceUpdate(data.lastModified)}
        </p>
      </div>
    </div>
  );
};

export default Stats;
