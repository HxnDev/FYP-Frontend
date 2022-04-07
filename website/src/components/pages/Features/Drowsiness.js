import React from 'react';
import Features from './Features';
import { drowsiness } from './DrowsinessData';

function Drowsiness() {
  return (
    <>
      <Features {...drowsiness} />
      
    </>
  );
}

export default Drowsiness;