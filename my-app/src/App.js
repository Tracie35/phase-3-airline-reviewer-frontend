import Navbar from "./Navbar"
import Airline from "./components/Airline"
import Home from "./components/Home"
import Reviews from "./components/Reviews"
import { Route, Routes } from "react-router-dom"
import './App.css'
import image1 from "./images/image1.jpg"
import image2 from "./images/Alaska-Airlines.jpg"
import image3 from "./images/American-Airlines.jpg"
import image4 from "./images/Delta.jpg"
import image5 from "./images/JetBlue.jpg"
import image6 from "./images/Southwest-Airlines.jpg"
import image7 from "./images/United-Airlines.jpg"
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