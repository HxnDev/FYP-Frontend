import React from 'react';
import HeroSection from '../HeroSection';
import ServicesList from '../ServicesList';
import { homeObjOne, homeObjThree, homeObjTwo, homeObjFour } from './Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <ServicesList />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <HeroSection {...homeObjFour} />
      
    </>
  );
}

export default Home;