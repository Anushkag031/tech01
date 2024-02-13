import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './App.css'
import "./styles/App.scss"
import Header from './components/Header'
import Home from './components/Home'
import "./styles/header.scss"
import "./styles/home.scss"

function App() {
  
  return (
  <Router>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
    </Routes>
  </Router>
  )
}

export default App
