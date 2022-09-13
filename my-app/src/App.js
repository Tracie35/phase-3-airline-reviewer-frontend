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
import Slider from "./components/slider";
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
        <Slider
        imageSrc={image2}
        title={"Be an explorer."}
        subtitle={
          "Our platform offers a wide variety of quality airlines!"
        }
      />
      <Slider
        imageSrc={image3}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
       <Slider
        imageSrc={image4}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
       <Slider
        imageSrc={image5}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
      <Slider
        imageSrc={image6}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
      <Slider
        imageSrc={image7}
        title={"Memories for a lifetime."}
        subtitle={"Your dream vacation is only a few clicks away."}
        flipped={true}
      />
    </div>
    </>
  )
}


export default App