import About from "./components/About"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footers/Footer"
import Hero from "./components/Hero"
import Services from "./components/Services"

const Home = () => {
  return (
    <>
        <Hero/>
        <About/>
        <Services/>
        <ContactUs/>
        <Footer/>
    </>
  )
}

export default Home