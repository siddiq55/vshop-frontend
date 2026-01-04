import React, { useContext } from 'react'
import { ShopContext } from '../../context/ShopContext'
import './cartItems.css'
import remove_icon from '../Assets/cart_cross_icon.png'

export const CartItems = () => {
  const {all_product, cartItems, removeFromCart, getTotalCartAmount} = useContext(ShopContext);


  if (!all_product || all_product.length === 0) {
    return (
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <p>Loading cart...</p>
      </div>
    );
  }

  return (
    <div className="cartitems">
      <div className="cartitems-formate-main">
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr />

      <div>
        {all_product.map((e) => {
          
          if (!cartItems[e.id] || cartItems[e.id] === 0) {
            return null;   
          }

          return (
            <div className="cartitems-formate" key={e.id}>
              <img src={e.imageUrl} alt="" className="carticon-product-icon" />
              <p>{e.name}</p>
              <p>${e.new_price}</p>
              <button className="cartitemquantity">{cartItems[e.id]}</button>
              <p>${e.new_price * cartItems[e.id]}</p>
              <img
                className="cartitems-remove-icon"
                src={remove_icon}
                onClick={() => removeFromCart(e.id)}
                alt="remove"
              />
            </div>
          );
        })}
        <hr />
      </div>
      
      <div className="cartitems-down">
        <div className="cartitems-total">
          <h1>Cart Totals</h1>
          <div className="cartitems-total-item">
            <p>Subtotal</p>
            <p>${getTotalCartAmount() || 0}</p>
          </div>
          <hr />
          <div className='cartitems-total-item'>
            <p>Shipping Fee</p>
            <p>Free</p>
          </div>
          <hr />
          <div className="cartitems-total-item">
            <h3>Total</h3>
            <h3>${getTotalCartAmount() || 0}</h3>
          </div>
        </div>
        <button>PROCEED TO CHECKOUT</button>
      </div>
    </div>
  )
}