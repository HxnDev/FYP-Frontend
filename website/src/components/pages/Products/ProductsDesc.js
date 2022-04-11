import React from 'react';
import './ProductsDesc.css';
import { Button } from '../Button';
import { Link } from 'react-router-dom';

function ProductDesc({
  lightBg,
  lightText,
  lightTextDesc,
  description,
  buttonLabel,
  img,
  alt,
  imgStart
}) {
  return (
    <>

      <div
        className={lightBg ? 'product__hero-section' : 'product__hero-section darkBg'}
      >
        <div className='container'>
          <div
            className='row product__hero-row'
            style={{
              display: 'flex',
              flexDirection: imgStart === 'start' ? 'row-reverse' : 'row'
            }}
          >
            <div className='col'>
              <div className='product__hero-text-wrapper'>
                <h1 className={lightText ? 'product-heading' : 'product-heading dark'}>
                  HAWK'S <span>EYE</span>
                </h1>
                <p
                  className={
                    lightTextDesc
                      ? 'home__hero-subtitle'
                      : 'home__hero-subtitle dark'
                  }
                >
                  {description}
                </p>
                <Link to='/Login' className='get-started'>
                  <Button buttonSize='btn--wide' buttonColor='orange'>
                    {buttonLabel}
                  </Button>
                </Link>
              </div>
            </div>
            <div className='col'>
              <div className='product__hero-img-wrapper'>
                <img src={img} alt={alt} className='product__hero-img' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDesc;
