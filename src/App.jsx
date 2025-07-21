

import Navbar from "./components/Navbar"
import FlavorSection from "./sections/FlavorSection"
import HeroSections from "./sections/HeroSections"
import MessageSection from "./sections/MessageSection"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollSmoother, ScrollTrigger } from "gsap/all";
import NutritionSection from "./sections/NutritionSection"
import BenefitSection from "./sections/BenefitSection"
import TestimonialSection from "./sections/TestimonialSection"
import FooterSection from "./sections/FooterSection"

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const App = () => {

  useGSAP(() => {
    ScrollSmoother.create({
      smooth: 3,
      effects: true,
    })
  })

  return (

    <main>
      <Navbar />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <HeroSections />
          <MessageSection />
          <FlavorSection />
          <NutritionSection />

          <div>
            <BenefitSection />
            <TestimonialSection />
          </div>

          <FooterSection />
        </div>
      </div>

    </main>
  )
}

export default App