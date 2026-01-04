import React from 'react'
import './newsLetter.css'
export const NewsLetter = () => {
  return (
    <div className='newsletter'>
<h1>Get Exclusive Offers On Your Email</h1>
<p>Subscribe to our newsletter for the latest updates and exclusive deals.</p>
<div>
    <input type="email" placeholder='Your Email' />
    <button>Subscribe</button>
</div>
    </div>
  )
}
