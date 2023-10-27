import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import { Provider } from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./redux/rootReducer.js"
import { Auth0Provider } from '@auth0/auth0-react';
import App from './App';

import './index.css';

axios.defaults.baseURL = "http://localhost:3001/asImpresiones"

const store = configureStore({
  reducer: rootReducer
})

const dominio=process.env.REACT_APP_DOMAINAUTH0
const id=process.env.REACT_APP_CLIENTIDAUTH0

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
    <Provider store={store}>
      <Auth0Provider
        domain={dominio}
        clientId={id}
        authorizationParams={
          {
            redirect_uri: window.location.origin
          }
        }
      >
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Auth0Provider>
    </Provider>
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
