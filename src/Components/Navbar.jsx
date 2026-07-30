import React from 'react'
import styles from '../Styles/Navbar.module.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
     <nav className={styles.nav}>
      {/* Logo styling */}
      <div className={styles.logo}>Dreamy Treats</div>
      
      {/* Links container styling */}
      <div className={styles.navLinks}>
        <Link to={'/home'}>Home</Link>
        <Link to={'/Menu'}>Menu</Link>
        <Link to={'/OrderSection'}>Orders</Link>
        <Link to={'/FeedbackSection'}>FeedBack</Link>
      </div>
    </nav>
    </div>
  )
}

export default Navbar