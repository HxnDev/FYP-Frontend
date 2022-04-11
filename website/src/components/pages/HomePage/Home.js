import React from 'react';
import HeroSection from './HeroSection';
import { homeObjOne, homeObjThree, homeObjTwo} from './Data';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <>
      <HeroSection {...homeObjOne} />
      <HeroSection {...homeObjTwo} />
      <HeroSection {...homeObjThree} />
      <Footer />
    </>
  );
}

export default Home;