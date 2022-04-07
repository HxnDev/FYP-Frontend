import React from 'react';
import Features from './Features';
import { weapon } from './WeaponData';

function Weapon() {
  return (
    <>
      <Features {...weapon} />
      
    </>
  );
}

export default Weapon;