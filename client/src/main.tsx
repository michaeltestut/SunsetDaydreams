import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import HomePage from './pages/HomePage.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/ErrorPage.tsx'
import ProductPage from './pages/ProductPage.tsx'
import axios from 'axios'

axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '/'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />} >
      <Route index={true}  element={<HomePage />} />
      <Route path='product/:url_slug' element ={<ProductPage />} />
      
    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
