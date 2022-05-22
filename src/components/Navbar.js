import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import NavItems from './NavItems';
import { useLocation } from "react-router-dom";

const Navbar = ({title, navList}) => {

  const location = useLocation();
  const nav = useRef();


  useEffect(() => {
    if (location.pathname === '/guides' && !nav.current.classList.contains('solid')) {
      nav.current.classList.add('solid')
    }
    else if (location.pathname !== '/guides' && nav.current.classList.contains('solid')) {
      nav.current.classList.remove('solid')
    }
  }, [location]);
  

  return (
    <nav className='sticky' ref={nav}>
    <div className="container">
      <div className="nav-content">
        <h1>{title}</h1>
        <input type="checkbox" id="check-btn"/>
        <label for="check-btn" class="ham-btn">
          <i class="fa-solid fa-bars"></i>
        </label>
        <NavItems title = {title} navList={['Home', 'Guides']}/>
      </div>
    </div>    
    
  </nav>
  )
}

Navbar.defaultProps = {
  title: 'FitWith Remi'
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired
}

export default Navbar