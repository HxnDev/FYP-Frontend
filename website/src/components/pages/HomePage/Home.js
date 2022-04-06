import React from 'react';
import HeroSection from './HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo} from './Data';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      
    </>
  );
}

export default Home;