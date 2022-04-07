import React from 'react';
import Features from './Features';
import { choking } from './Choking DetectionData';

function ChokingDetection() {
  return (
    <>
      <Features {...choking} />
      
    </>
  );
}

export default ChokingDetection;