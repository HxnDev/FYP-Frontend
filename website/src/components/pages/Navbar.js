import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from  'react-icons/fa'
import { Button } from './Button';


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

  window.addEventListener('resize', showButton);

  return (
      <>
    <div className='navbar'>
        <div className='navbar-container container'>
            <Link to='/' className='navbar-logo'>
                LAVISH
            </Link>
            <div className='menu-icon' onClick={handleClick}>
              {click ? <FaTimes/> : <FaBars/>}
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
              <li className='nav-item'>
                <Link to='/' className='nav-links'>
                  Home
                </Link>
              </li>

              <li className='nav-btn'>
                {
                  <Button buttonStyle='btn--outline' buttonSize='btn--mobile'>
                    <Link to='/login' className='btn-link'>
                     Log In
                    </Link>
                  </Button>
                }
              </li>
            </ul>
        </div>
    </div>
    </>
  );
}

export default Navbar