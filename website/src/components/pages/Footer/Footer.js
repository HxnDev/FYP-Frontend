import React from 'react';
import './Footer.css';
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
          <a
            className='social-icon-link'
            href = 'https://www.facebook.com/'
            target='_blank'
            aria-label='Facebook'
          >
            <FaFacebook />
          </a>
          <a
            className='social-icon-link'
            href = 'https://www.instagram.com/'
            target='_blank'
            aria-label='Instagram'
          >
            <FaInstagram />
          </a>
          <a
            className='social-icon-link'
            href = 'https://twitter.com/?lang=en'
            target='_blank'
            aria-label='Twitter'
          >
            <FaTwitter />
          </a>
          <a
            className='social-icon-link'
            target='_blank'
            href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ'
            aria-label='LinkedIn'
          >
            <FaLinkedin />
          </a>
        </div>

        <div className='social-media-wrap'>
          <small className='website-rights'>THINK VISION © 2022</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;
