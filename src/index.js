import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import App from './App';
import { Provider } from 'react-redux'; // Import the correct Provider

import store from './app/store'; // Import your Redux store configuration

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <body>
        <Provider store={store}>
          <App />
        </Provider>
      </body>
    </BrowserRouter>
  </React.StrictMode>
);
