import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import axios from 'axios'
import { Provider } from 'react-redux'
import {configureStore} from "@reduxjs/toolkit"
import rootReducer from "./Redux/rootReducer.js"
import './index.css'
import { BrowserRouter } from 'react-router-dom'

axios.defaults.baseURL = "http://localhost:3001/asImpresiones"

const store = configureStore({
  reducer: rootReducer
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>,
)
