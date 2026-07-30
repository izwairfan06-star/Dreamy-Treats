import React from 'react'
import styles from '../Styles/Footer.module.css'
import { FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className={styles.footer}>
        <div className={styles.logo}>Dreamy Treats</div>
        <div style={{}}>
            <div style={{ color: "#5c3d2e", fontSize: "18px", fontWeight: "bold" }}>Address</div>
            <ul className={styles.list}>
            <li>Rehman Vilas Sataina Road.</li>
            <li>Faisalabad</li>
            <li>Pakistan</li>
            <li>+92 309 5666755</li></ul>
        </div>
        <div className={styles.socialContainer}>
      <h3 style={{ color: "#5c3d2e", marginBottom: "10px" }}>Social media</h3>
      
      <div className={styles.iconList}>
        {/* Facebook */}
        <a href="https://facebook.com" target="_blank" rel="noreferrer" className={styles.fbIcon}>
          <FaFacebook size={30} />
        </a>

        {/* Instagram */}
        <a href="https://instagram.com" target="_blank" rel="noreferrer" className={styles.instaIcon}>
          <FaInstagram size={30} />
        </a>

        {/* TikTok */}
        <a href="https://tiktok.com" target="_blank" rel="noreferrer" className={styles.tiktokIcon}>
          <FaTiktok size={30} />
        </a>
      </div>
    </div>
        <div>
    <div style={{ color: "#5c3d2e", fontSize: "18px", fontWeight: "bold" }}>Email Us</div>
    <a href="mailto:izwairfan@365gmail.com" className={styles.emailLink}>
        izwairfan@365gmail.com
    </a>
</div>
    </div>
  )
}

export default Footer