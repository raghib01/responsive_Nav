import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./Pages/Home.jsx"
import Service from "./Pages/Service.jsx"
import Product from "./Pages/product.jsx"
import Contact from "./Pages/Contacts.jsx"
import Nav from "./Components/navbar.jsx"


function App() {
  return (
    <div className="bg-slate-600">
      <Router>
      <Nav/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/service" element={<Service />} />
          <Route exact path="/product" element={<Product />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
