import React from 'react';
import Features from './Features';
import { facial } from './AttendanceData';

function Attendance() {
  return (
    <>
      <Features {...facial} />
      
    </>
  );
}

export default Attendance;