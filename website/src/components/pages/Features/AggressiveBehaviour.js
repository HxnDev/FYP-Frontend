import React from 'react';
import Features from './Features';
import { aggressive } from './AggressiveBehaviourData';

function AggressiveBehaviour() {
  return (
    <>
      <Features {...aggressive} />
      
    </>
  );
}

export default AggressiveBehaviour;