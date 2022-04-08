import React from 'react';
import './Features.css';
import VideoPlayer from 'react-video-js-player'
function Features({
  lightBg,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  path,
  poster
}) {
  return (
    <>
    
      <div
        className={lightBg ? 'features__hero-section' : 'features__hero-section darkBg'}
      >
        <div className='features-container'>
          <div
            className='row features__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='features-col'>
              <div className='features__hero-text-wrapper'>
                <h1 className={lightText ? 'heading' : 'heading dark'}>
                  {headline}
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'features__hero-subtitle'
                      : 'features__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
              </div>
            </div>
            <div className='features-col'>
              <div className='features__hero-img-wrapper'>
                <img src={img} alt={alt} className='features__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    

      <div className='video-player'>
          
          <VideoPlayer 
            controls={true}
            src = {path}
            poster = {poster}
            width = '720'
            height = '420'
          />

      </div>
    </>
  );
}

export default Features;