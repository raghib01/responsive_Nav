import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home} from './web_dev/navbar/Navbar/src/App.jsx'

export const App = () => {
 <Router>
  <Routes>
      <Route path='/' element={<Home />} />
  </Routes>
 </Router>
}
