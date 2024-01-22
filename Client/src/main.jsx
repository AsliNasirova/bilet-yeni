import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import {BrowserRouter} from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async';
import WishlistProvider from './Context/WishlistContext.jsx'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    <HelmetProvider>
      <WishlistProvider>
            <App />
      </WishlistProvider>  
    </HelmetProvider>    
    </BrowserRouter>
  </React.StrictMode>,
)
