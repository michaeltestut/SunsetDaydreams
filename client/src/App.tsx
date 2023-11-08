
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import AdminLogin from './pages/AdminLogin'
import Header from './components/Header'

function App() {


  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element ={<Home />} />
          <Route path='/adminlogin' element={<AdminLogin />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App