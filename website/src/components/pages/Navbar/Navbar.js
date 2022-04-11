import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import {FaBars, FaTimes} from  'react-icons/fa'
import { Button } from '../Button';
import './Navbar.css'
import { IconContext } from 'react-icons/lib';
import Login from '../Login/Login'

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
        <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            <h3><span>THINK </span>VISION</h3>
        </Link>
            <div className='navbar-container ncontainer'>
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

                  <li className='btn-item'>
                      <Link to='/Login' className='btn-links'>
                          Login
                      </Link>
                  </li>
                </ul>
            </div>
        </div>
    </IconContext.Provider>
    </>
  );
}

export default Navbar;
