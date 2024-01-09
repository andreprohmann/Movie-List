import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.scss'
import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from './pages/Home/Home.jsx';
import MovieDetail from './pages/MovieDetail/MovieDetail.jsx';





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
