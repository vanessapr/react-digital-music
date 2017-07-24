import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './configureStore';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'foundation-sites/dist/css/foundation.css';
import 'foundation-sites/dist/css/foundation-prototype.css';
import 'material-design-iconic-font/dist/css/material-design-iconic-font.css';
import './index.css';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
