
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import Header from './components/Header'

function App() {


  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default App