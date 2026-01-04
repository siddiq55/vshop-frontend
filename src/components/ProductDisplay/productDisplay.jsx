import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import "./productDisplay.css";
import star_icon from "../Assets/star_icon.png";
import star_dull_icon from "../Assets/star_dull_icon.png";

export const ProductDisplay = (props) => {
  const { product } = props;

 const { addToCart } = useContext(ShopContext);

  return (
    <div className="productdisplay">
      <div className="productdisplay-left">
        <div className="productdisplay-image-list">
          <img src={product.imageUrl} alt="" />
          <img src={product.imageUrl} alt="" />
          <img src={product.imageUrl} alt="" />
          <img src={product.imageUrl} alt="" />
        </div>

        <div className="productdisplay-image">
          <img
            className="productdisplay-main-image"
            src={product.imageUrl}
            alt=""
          />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_icon} alt="" />
          <img src={star_dull_icon} alt="" />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className="productdisplay-right-oldprice">
            ${product.old_price}
          </div>
          <div className="productdisplay-right-newprice">
            ${product.new_price}
          </div>
          <div className="productdisplay-right-discription">
             A ligthweight, usually knitted, pullover shirt, close-fitting and typically having a high, round neckline and short sleevws, worn as an undergarment or on its own in warm weather. 
          </div>
          <div className="productdisplay-right-size">
            <h1>Select</h1>
            <div className="productdisplay-right-size">
                <div>S</div>
                <div>M</div>
                <div>L</div>
                <div>XL</div>

            </div>
          </div>
          <button className="productdisplay-right-addtocart" onClick={()=>{addToCart(product.id)}}>Add to Cart</button>
          <div />
        </div>
      </div>
    </div>
  );
};
