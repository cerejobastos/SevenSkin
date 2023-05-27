import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import store from './Reducers';
import { BaseComponent, NetworkChecker } from "./Components"
import "./Styles/Styles.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <NetworkChecker>
        <BaseComponent />
      </NetworkChecker>
    </Provider>
  </React.StrictMode>
);