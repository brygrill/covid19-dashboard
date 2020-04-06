import { h, render } from '/web_modules/preact.js';
import App from './components/App.js';

const Layout = () => (
  <div>
    <nav class="navbar navbar-light bg-light">
      <a class="navbar-brand" href="/">
        COVID-19 Meta Dashboard
      </a>
    </nav>
    <div class="container p-3"><App /></div>
  </div>
);

const appMount = document.querySelector('#app');
if (appMount) render(<Layout />, appMount);

export default App;
