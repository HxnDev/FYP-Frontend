import React from 'react';
import Models from './Models';
import Webcam from './Webcam';
import Log from './Log';
import './Surveillance.css';

function Surveillance() {
  return (
    <>
    <div className='main-container'>
      <div className='left-container'>
        <Webcam />
      </div>
      <div className='right-container'>
        <Log />
      </div>
    </div>
    <div>
      <Models />
    </div>

    </>
  );
}

export default Surveillance;
