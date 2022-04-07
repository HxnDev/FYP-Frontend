import React from 'react';
import Features from './Features';
import { smoking } from './SmokingData';

function Smoking() {
  return (
    <>
      <Features {...smoking} />
      
    </>
  );
}

export default Smoking;