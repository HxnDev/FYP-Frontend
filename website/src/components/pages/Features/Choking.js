import React from 'react';
import Features from './Features';
import { choking } from './ChokingData';

function Choking() {
  return (
    <>
      <Features {...choking} />
      
    </>
  );
}

export default Choking;