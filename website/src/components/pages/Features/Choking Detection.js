import React from 'react';
import Features from './Features';
import { choking } from './ChokingDetectionData';

function ChokingDetection() {
  return (
    <>
      <Features {...choking} />
      
    </>
  );
}

export default ChokingDetection;