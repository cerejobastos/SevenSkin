import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Reducers';
import { BaseComponent } from "./Components"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BaseComponent />
    </Provider>
  </React.StrictMode>
);