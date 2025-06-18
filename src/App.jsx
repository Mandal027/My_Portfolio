import React from 'react'
import Hero from './sections/Hero'
import ShowcaseSection from './sections/ShowcaseSection'
import NavBar from './components/NavBar'
import LogoSection from './sections/LogoSection'
import FeatureCards from './sections/FeatureCards'
import ExperienceSection from './sections/ExperienceSection'
import TechStack from './sections/TechStack'
import Footer from './sections/Footer'

const App = () => {
  return (
    <>
      <NavBar />
      <Hero />
      <ShowcaseSection />
      
      <LogoSection />

      <FeatureCards />
      <ExperienceSection />
      <TechStack />
      <Footer />

      
      {/* <section className='footer'>
        <div className='inner'>
          <p>© 2023 Nilesh Mandal. All rights reserved.</p>
          <p>Made with ❤️ in India</p>
        </div>
      </section> */}
    </>
  )
}

export default App
