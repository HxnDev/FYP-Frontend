import React from 'react'
import './Models.css';
import { IconContext } from 'react-icons/lib';

function Models() {
  return (
    
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='models__section'>
        <div className='models__wrapper'>
          <div className='models__container'>
            
            <button className='models__container-card' >
              <div className='models__container-cardInfo'>
                <h4>Face Mask</h4>
              </div>
            </button>
            
            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Social Distancing Monitoring</h4>
              </div>
            </button>
            
            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Empty Counter</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Empty Parking</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Fainting</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Choking</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Drowsiness</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Aggressive Behaviour</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Facial Attendance</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Smoking</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Weapon</h4>
              </div>
            </button>

            <button className='models__container-card'>
              <div className='models__container-cardInfo'>
                <h4>Isolation Ward</h4>
              </div>
            </button>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default Models