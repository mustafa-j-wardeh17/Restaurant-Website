import { useState } from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import About from "./components/About"
import Menu from "./components/Menu"
import Chef from "./components/Chef"
import Footer from "./components/Footer"
import FindUs from "./components/FindUs"
import Video from "./components/Video"
import Gallery from "./components/Gallery"


function App() {
  const [isMobile, setisMobile] = useState(false)
  return (
    <div className=" w-full relative overflow-hidden">
      <div className="hero header w-full bg-black ">
        <Navbar />
        <Hero />
      </div>
      <About />
      <Menu/>
      <Chef/>
      <Video />
      <Gallery />
      <FindUs />
      <Footer/>

    </div>
  )
}

export default App
