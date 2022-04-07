import React from 'react';
import Features from './Features';
import { faint } from './FaintingData';

function Fainting() {
  return (
    <>
      <Features {...faint} />
      
    </>
  );
}

export default Fainting;