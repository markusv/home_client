import Inferno from 'inferno';
import App from './containers/app.jsx';
import store from './stores/home.js';
import { Provider } from 'inferno-redux';
import 'whatwg-fetch';
require("offline-plugin/runtime").install();

Inferno.render(
  <Provider store={ store }>
    <App/>
  </Provider>,
  document.getElementById('app')
);
