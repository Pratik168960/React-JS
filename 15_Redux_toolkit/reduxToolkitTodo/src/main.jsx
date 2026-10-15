import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import {store} from './app/store'

ReactDOM.createRoot(document.getElementById('root')).render(
  // NOTE: Similar to Context API, the entire App must be wrapped in a Provider
  // However, Redux uses a prop strictly named "store" to pass the global state down
  <Provider store={store}>
    <App />
  </Provider>,
)