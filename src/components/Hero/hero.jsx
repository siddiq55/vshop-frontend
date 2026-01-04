import React from 'react'
import './hero.css'
import hero_img from '../Assets/hero2.png'
export const Hero = () => {
  return (
     <div className="hero">
      <div className="hero-left">
        <h2>NEW ARRIVALS ONLY</h2>
        <div>
          <div className="hero-hand-icon">
            <p>New</p>
            
          </div>
          <p>Collections</p>
          <p>for everyone</p>
        </div>
        <div className="hero-latest-btn">
          <div>Latest Collection</div>
          <span>→</span>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-image-container">
          <img 
            src={hero_img}
            alt="Hero" 
          />
        </div>
      </div>
    </div>
  )
}
