import Navbar from "./Navbar"
import Airline from "./components/Airline"
import Home from "./components/Home"
import Reviews from "./components/Reviews"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
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