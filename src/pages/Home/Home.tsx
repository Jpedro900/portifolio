import NavBar from "../../components/NavBar/NavBar"
import About from "./About/About"
import ContactMe from "./ContactMe/ContactMe"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"
import { useState, useEffect } from "react"

const Home = () => {

    const [isMobile, setIsMobile] = useState(false)

    useEffect(() => {
        if (window.innerWidth < 960) {
            setIsMobile(true)
        } else {
            setIsMobile(false)
        }
    }, [])

    return (
      <>
        {!isMobile && <NavBar />}
        <Hero />
        <About />
        <Projects />
        <ContactMe />
        <Footer />
      </>
    )
  }
  
  export default Home
  