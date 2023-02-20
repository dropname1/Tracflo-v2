import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import  { store } from './modules/Store/Store'
import { Provider } from 'react-redux'


ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
