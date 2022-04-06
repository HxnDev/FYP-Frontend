import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from  'react-icons/fa'
import { Button } from './Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960 ) {
      setButton(false)
    } else {
      setButton(true)
    }
  };

  useEffect (() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  return (
      <>
      <IconContext.Provider value={{color: '#fff'}}>
        <div className='navbar'>
            <div className='navbar-container container'>
                <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
                    THINK VISION
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                  {click ? <FaTimes/> : <FaBars/>}
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                  <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                      Home
                    </Link>
                  </li>

                  <li className='nav-item'>
                    <Link to='/products' className='nav-links' onClick={closeMobileMenu}>
                      Products
                    </Link>
                  </li>

                  <li className='nav-btn'>
                    { button ? (
                      <Link to='/log-in' className='btn-link'>
                        <Button buttonStyle='btn--outline'>
                          LOGIN
                        </Button>      
                      </Link>
                    ) : (
                      <Link to='/log-in' className='btn-link' onClick={closeMobileMenu}>
                        <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                          LOGIN
                        </Button>
                      </Link>
                    )
                    }
                  </li>
                </ul>
            </div>
        </div>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;