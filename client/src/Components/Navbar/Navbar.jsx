import React from 'react';
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className={styles['logo-brand']}>
        <NavLink to="/">Ajay</NavLink>
      </div>
      <nav>
        <ul>
          <li><NavLink exact to="/" >Home</NavLink></li>
          <li><NavLink to="/about" >About</NavLink></li>
          <li><NavLink to="/services" >Services</NavLink></li>
          <li><NavLink to="/contact" >Contact</NavLink></li>
          <li><NavLink to="/register" >Sign up</NavLink></li>
          <li><NavLink to="/login" >Login</NavLink></li>
          {/* <li><NavLink to="/*" ></NavLink></li> */}
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
