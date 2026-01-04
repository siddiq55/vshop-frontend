import React from 'react'
import './footer.css'
import footerlogo from '../Assets/logo_big.png'
import instagramIcon from '../Assets/instagram_icon.png'
import pintesterIcon from '../Assets/pintester_icon.png'
import whatsappIcon from '../Assets/whatsapp_icon.png'


export const Footer = () => {
  return (
    <div className='footer'>
<div className="footer-logo">
    <img src={footerlogo} alt="" />
    <p>VSHOP</p>

</div>
<ul className='footer-links'>
    <li>Company</li>
    <li>Products</li>
    <li>Offices</li>
    <li>About</li>
    <li>Contact</li>
</ul>
<div className="footer-social-icons">
    <div className="footer-social-icon-container">
<img src={instagramIcon} alt="" />
    </div>
    <div className="footer-social-icon-container">
<img src={pintesterIcon} alt="" />
    </div>
    <div className="footer-social-icon-container">
<img src={whatsappIcon} alt="" />
    </div>
   
    
</div>
<div className="footer-copywrite">
    <hr />
    <p>© 2024 VSHOP. All rights reserved.</p>

</div>
    </div>
  )
}
