import { h } from '/web_modules/preact.js';
import App from './App.js';
import StateDrop from './StateDrop.js';

const Layout = () => (
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">
        COVID-19 Meta Dashboard
      </a>
      <StateDrop />
    </nav>
    <div class="container p-3"><App /></div>
  </div>
);

export default Layout;
