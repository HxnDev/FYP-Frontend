import React from 'react';
import Features from './Features';
import { facemask } from './FaceMaskData';

function FaceMask() {
  return (
    <>
      <Features {...facemask} />
      
    </>
  );
}

export default FaceMask;