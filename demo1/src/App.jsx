import { useState } from 'react'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <Router>
    <Header/>
    <Routes>
      <Route/>
    </Routes>
  </Router>
  )
}

export default App