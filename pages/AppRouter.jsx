import React from 'react'
import Header from '../src/components/header/Header'
import IntroductionCard from '../src/components/introductioncard/IntroductionCard'
import AboutMe from '../src/components/aboutMe/AboutMe'
import FindMe from '../src/components/findMe/FindMe'
import Footer from '../src/components/footer/Footer'

const AppRouter = () => {
  return (
    <>
        <div style={{ color: 'white', height: '100%' }}>
        <Header />
        <IntroductionCard />
        <AboutMe />
        <FindMe />
        <Footer />
      </div>
    </>
  )
}

export default AppRouter