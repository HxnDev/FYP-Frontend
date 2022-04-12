import React from 'react'
import './ServicesList.css';
import { FaHeadSideMask, FaParking, FaHeadSideCough, FaBed, FaSmokingBan} from 'react-icons/fa';
import {MdSocialDistance, MdCountertops, MdOutlineFaceUnlock} from 'react-icons/md'
import { GiFalling, GiSleepy, GiHighPunch, GiPistolGun } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { Link, useNavigate } from 'react-router-dom';

function ServicesList() {
  const navigate = useNavigate();
  return (
    
    <IconContext.Provider value={{ color: '#fff', size: 64 }}>
      <div className='services__section'>
      <h1 className='services__heading'>Our Services</h1>
        <div className='services__wrapper'>
          <div className='services__container'>
            <Link to='/Aggressive' className='services__container-card' >
              <div className='services__container-cardInfo'>
                <div className='icon'>
                  <FaHeadSideMask />
                </div>
                <h4>Face Mask Detection</h4>
                <p>A fully trained model that can detect whether a person is wearing Face Mask or not.</p>
              </div>
            </Link>
            
            <Link to='/SocialDistancing' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <MdSocialDistance />
                </div>
                <h4>Social Distancing Monitoring</h4>
                <p>A fully trained model that generates an alert when people get closer to each other (i.e, violating social distancing SOPs).</p>
              </div>
            </Link>
            
            <Link to='/EmptyCounter' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <MdCountertops />
                </div>
                <h4>Empty Counter Detection</h4>
                <p>A fully trained model that generates an alert whenever a counter/reception is empty.</p>
              </div>
            </Link>

            <Link to='/Login' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <FaParking />
                </div>
                <h4>Empty Parking Detection</h4>
                <p>A fully trained model that detects the number of vanact parking spaces.</p>
              </div>
            </Link>

            <Link to='/Fainting' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <GiFalling />
                </div>
                <h4>Fainting Detection</h4>
                <p>A fully trained model that generates an alert whenever a person falls/faints.</p>
              </div>
            </Link>

            <Link to='/Choking' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <FaHeadSideCough />
                </div>
                <h4>Choking Detection</h4>
                <p>A fully trained model that generates an alert whenever a person starts choking.</p>
              </div>
            </Link>

            <Link to='/Login' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <GiSleepy />
                </div>
                <h4>Drowsiness Detection</h4>
                <p>A fully trained model that generates an alert whenever a person in reception yawns/sleeps.</p>
              </div>
            </Link>

            <Link to='/Aggressive' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <GiHighPunch />
                </div>
                <h4>Aggressive Behaviour Detection</h4>
                <p>A fully trained model that generates an alert whenever a fight is detected.</p>
              </div>
            </Link>

            <Link to='/Attendance' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <MdOutlineFaceUnlock />
                </div>
                <h4>Facial Attendance System</h4>
                <p>A fully trained model that marks attendance on basis of facial recognition.</p>
              </div>
            </Link>

            <Link to='/Smoking' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <FaSmokingBan />
                </div>
                <h4>Smoking Detection</h4>
                <p>A fully trained model that generates an alert whenever a person smoking is recognized.</p>
              </div>
            </Link>

            <Link to='/Weapon' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <GiPistolGun />
                </div>
                <h4>Weapon Detection</h4>
                <p>A fully trained model that generates an alert whenever a weapon is detected.</p>
              </div>
            </Link>

            <Link to='/Login' className='services__container-card'>
              <div className='services__container-cardInfo'>
              <div className='icon'>
                  <FaBed />
                </div>
                <h4>Isolation Ward Monitoring</h4>
                <p>A fully trained model that performs surveillance on the isolation ward.</p>
              </div>
            </Link>

          </div>
        </div>
      </div>
    </IconContext.Provider>
  );
}

export default ServicesList