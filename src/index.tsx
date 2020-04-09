import { h, render } from '/web_modules/preact.js';
import Layout from './components/Layout.js';

const appMount = document.querySelector('#app');
if (appMount) render(<Layout />, appMount);

