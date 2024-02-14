import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  // para evitar el doble render podemos comentar, el modo strinco tanto de paertura y de cierre y solo dejar el App
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
