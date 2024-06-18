import NavBar from "../../components/NavBar/NavBar"
import About from "./About/About"
import ContactMe from "./ContactMe/ContactMe"
import Footer from "./Footer/Footer"
import Hero from "./Hero/Hero"
import Projects from "./Projects/Projects"

const Home = () => {

    return (
      <>
        <NavBar />
        <Hero />
        <About />
        <Projects />
        <ContactMe />
        <Footer />
      </>
    )
  }
  
  export default Home
  