import React from 'react';
import Features from './Features';
import { emptyparking } from './EmptyParkingData';

function EmptyParking() {
  return (
    <>
      <Features {...emptyparking} />
      
    </>
  );
}

export default EmptyParking;