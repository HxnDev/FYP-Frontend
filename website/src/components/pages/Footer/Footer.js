import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function Footer() {
  return (
    <div className='footer-container'>
      <section className='social-media'>
        <div className='social-icons'>
          <Link
            className='social-icon-link'
            to='/'
            target='_blank'
            aria-label='Facebook'
          >
            <FaFacebook />
          </Link>
          <Link
            className='social-icon-link'
            to='/'
            target='_blank'
            aria-label='Instagram'
          >
            <FaInstagram />
          </Link>
          <Link
            className='social-icon-link'
            to='/'
            target='_blank'
            aria-label='Twitter'
          >
            <FaTwitter />
          </Link>
          <Link
            className='social-icon-link'
            to='/'
            target='_blank'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </Link>
        </div>

        <div className='social-media-wrap'>
          <small className='website-rights'>THINK VISION © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
