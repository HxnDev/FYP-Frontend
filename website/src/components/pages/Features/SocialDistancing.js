import React from 'react';
import Features from './Features';
import { sd } from './SocialDistancingData';

function SocialDistancing() {
  return (
    <>
      <Features {...sd} />
      
    </>
  );
}

export default SocialDistancing;