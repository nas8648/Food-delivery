import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
                <h1 className='logo'>EpicureXpress</h1>
            {/* <img src={assets.logo} alt="" /> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime, adipisci unde nostrum ad aspernatur facere enim. Sit molestias deserunt illo.</p>
            <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>8574123069</li>
                    <li>contact@epicurexpress.com</li>
                </ul>
            </div>
        </div>
<hr />
<p className="footer-copyright">Copyright 2025 © EpicureXpress.com - All Rights Reserved.</p>
    </div>
  )
}

export default Footer