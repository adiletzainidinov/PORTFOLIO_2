import React from 'react';
import Header from '../../components/home-page-components/header/Header';
import IntroductionCard from '../../components/home-page-components/introductioncard/IntroductionCard';
import AboutMe from '../../components/home-page-components/aboutMe/AboutMe';
import FindMe from '../../components/home-page-components/findMe/FindMe';
import Footer from '../../components/home-page-components/footer/Footer';

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
  );
};

export default AppRouter;
