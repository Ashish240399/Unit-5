import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {ThemeContextProvider} from './contexts/themeContext'
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider> <App /></ThemeContextProvider>
   
  </React.StrictMode>
)