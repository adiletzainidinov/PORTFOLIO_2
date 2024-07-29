import React from 'react';
import IntroductionCard from '../../components/home-page-components/introductioncard/IntroductionCard';
import AboutMe from '../../components/home-page-components/aboutMe/AboutMe';
import FindMe from '../../components/home-page-components/findMe/FindMe';

const Home = () => {
  
  return (
    <>
      <div style={{ color: 'white', height: '100%' }}>
        <IntroductionCard />
        <AboutMe />
        <FindMe />
      </div>
    </>
  );
};

export default Home;
