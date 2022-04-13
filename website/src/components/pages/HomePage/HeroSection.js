import React from 'react';
import './HeroSection.css';

function HeroSection() {
  return (
    <>
    
      <div className='home__hero-section'>
        <div className='container'>
          <div className='row home__hero-row' style={{display: 'flex'}}>
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <h1 className='hero-heading dark'>
                  Creating <span>Smart Solutions</span>
                </h1>
                <p className= 'home__hero-subtitle dark'>
                  At Think Vision, we provide real-time monitoring and threat alerts using deep learning and video analytics.
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src='./images/ai.png' alt='Image not loaded' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='home__hero-section darkBg'>
        <div className='container'>
          <div className='row home__hero-row' style={{display: 'flex'}}>
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <h1 className='hero-heading'>
                  Watching out for your <span>Ease</span> and <span>Safety</span>
                </h1>
                <p className= 'home__hero-subtitle'>
                From aggressive behaviour to unauthorised people in restricted areas, our product can address any vulnerabiiity, threat or risk.
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src='images/security.png' alt='Image not loaded' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='home__hero-section'>
        <div className='container'>
          <div className='row home__hero-row' style={{display: 'flex'}}>
            <div className='col'>
              <div className='home__hero-text-wrapper'>
                <h1 className='hero-heading dark'>
                Keeping an eye out for anything <span>Alarming</span>
                </h1>
                <p className= 'home__hero-subtitle dark'>
                  So sit back and relax and let us take care of your security by providing efficient services.
                </p>
              </div>
            </div>
            <div className='col'>
              <div className='home__hero-img-wrapper'>
                <img src='images/eye-out.png' alt='Image not loaded' className='home__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default HeroSection;