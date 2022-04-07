import React from 'react';
import Features from './Features';
import { isolation } from './IsolationWardData';

function IsolationWard() {
  return (
    <>
      <Features {...isolation} />
      
    </>
  );
}

export default IsolationWard;