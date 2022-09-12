import Navbar from "./Navbar"
import Airline from "./components/Airline"
import Home from "./components/Home"
import Reviews from "./components/Reviews"
import { Route, Routes } from "react-router-dom"
import './App.css'
import image1 from "./images/image1.jpg"
import Hero from "./components/Hero"
function App() {
  return (
    <>
    
      <Navbar />
      <div className="container">
      <Hero imageSrc={image1} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/airline" element={<Airline />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </div>
    </>
  )
}


export default App