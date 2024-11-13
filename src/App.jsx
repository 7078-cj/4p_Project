import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import './App.css'
import HeroPage from './pages/HeroPage'
import LogIn from './pages/LogIn'

function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<HeroPage/>} />
        <Route path='/login' element={<LogIn/>} />

      </Routes>

    </Router>
     
    </>
  )
}

export default App
