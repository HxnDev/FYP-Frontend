import React from 'react';
import Features from './Features';
import { drowsiness } from './DrowsinessDetectionData';

function DrowsinessDetection() {
  return (
    <>
      <Features {...drowsiness} />
      
    </>
  );
}

export default DrowsinessDetection;