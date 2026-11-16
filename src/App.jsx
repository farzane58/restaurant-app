
import Navbar from  "./components/Navbar"
import Hero  from './components/Hero'
import About from './components/About'
import Dishes from "./components/Dishes"
import Features from "./components/Features"


import BookingProcess from "./components/BookingProcess"
import Timing from "./components/Timing"
import TestimonialSection from "./components/TestimonialSection"
import FAQs from './components/FAQs'
import Stats from  './components/Stats'
import CTA from './components/CTA'
import Footer from './components/Footer'



export default function App(){



  return(
    <>

        <Navbar/>
        <Hero/>
        <About/>
        <Stats/>
        <Dishes/>
        <Features/>
        <BookingProcess/>
        <Timing/>
        <TestimonialSection/>
        <FAQs/>
        <CTA/>
        <Footer/>
      
      


      
    </>
  )

}