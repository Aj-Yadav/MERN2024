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
          <li><NavLink exact to="/" activeClassName={styles.active}>Home</NavLink></li>
          <li><NavLink to="/about" activeClassName={styles.active}>About</NavLink></li>
          <li><NavLink to="/services" activeClassName={styles.active}>Services</NavLink></li>
          <li><NavLink to="/contact" activeClassName={styles.active}>Contact</NavLink></li>
          <li><NavLink to="/register" activeClassName={styles.active}>Sign up</NavLink></li>
          <li><NavLink to="/login" activeClassName={styles.active}>Login</NavLink></li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
