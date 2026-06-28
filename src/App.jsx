import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ParticlesBackground from "./components/ParticlesBackground"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import CustomCursor from "./components/CustomCursor"
import ScrollProgress from "./components/ScrollProgress"
import Loader from "./components/Loader"
import FloatingIcons from "./components/FloatingIcons"
import Footer from "./components/Footer"
import About from "./components/About";

function App() {
  return (
    <div className="bg-black relative">

      <Loader />

      <ScrollProgress />

      <CustomCursor />

      <ParticlesBackground />

      <FloatingIcons />

      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Footer />

    </div>
  )
}

export default App