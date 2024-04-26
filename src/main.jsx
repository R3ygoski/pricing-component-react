import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'

import { PriceCycleProvider } from './context/PriceCylceContext.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PriceCycleProvider>
      <App />
    </PriceCycleProvider>
  </React.StrictMode>,
)
