import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import 'foundation-sites/dist/css/foundation.css';
import 'foundation-sites/dist/css/foundation-prototype.css';
import './index.css';

const store = createStore(function(action) {
  return 0;
});

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
