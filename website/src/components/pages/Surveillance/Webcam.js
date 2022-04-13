import React, {useEffect} from 'react'
import './Webcam.css';
import axios from 'axios';

function Webcam() {
  useEffect(()=>{
    // this runs when react page loads
    axios.get('http://localhost:5000/init').then(response => {
      console.log("SUCCESS", response)
    }).catch(error => {
      console.log(error)
    })

  }, [])

  return (
    <>

        <div className='webcam-container'>
            <header>
                <img src={'http://127.0.0.1:5000/stream'} className="webcam" alt="camera not readable" />
            </header>
        </div>
    </>
  );
}

export default Webcam;