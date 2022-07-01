import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { CookiesProvider } from "react-cookie";
import '../css/app.css';
import RootContents from './components/RootContents';
import store from './store/index';

ReactDOM.render(
  <React.StrictMode>
    <CookiesProvider>
      <Provider store={store}>
        <RootContents />
      </Provider>
    </CookiesProvider>
  </React.StrictMode>,
  document.getElementById('root')
);