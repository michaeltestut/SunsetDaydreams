import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './App.tsx'
import HomePage from './pages/Client/HomePage.tsx'
import './index.css'
import {
  createBrowserRouter,
  createRoutesFromElements,
  redirect,
  Route,
  RouterProvider,
} from "react-router-dom";
import ErrorPage from './pages/Client/ErrorPage.tsx'
import ProductPage from './pages/Client/ProductPage.tsx'
import axios from 'axios'
import { HelmetProvider } from 'react-helmet-async'
import { Provider } from "react-redux"
import { store } from './redux/store.ts'
import AdminLogin from './pages/Admin/AdminLogin.tsx'
import AdminHome from './pages/Admin/AdminHome.tsx'
import { onAuthStateChanged } from 'firebase/auth';
import { firebaseAuth } from './utils/firebase-config.ts'


axios.defaults.baseURL = process.env.NODE_ENV === 'development' ? 'http://localhost:8000' : '/'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />} >
      <Route index={true} element={<HomePage />} />
      <Route path='product/:url_slug' element={<ProductPage />} />
      <Route path='admin/login' element={<AdminLogin />} />
      <Route path='admin/home' element={<AdminHome />} />

    </Route>
  )
);



ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <Provider store={store}> */}
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
    {/* </Provider> */}
  </React.StrictMode>,
)
