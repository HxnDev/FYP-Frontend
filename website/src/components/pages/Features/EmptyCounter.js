import React from 'react';
import Features from './Features';
import { empty } from './EmptyCounterData';

function EmptyCounter() {
  return (
    <>
      <Features {...empty} />
      
    </>
  );
}

export default EmptyCounter;