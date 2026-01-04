import React, { useState, createContext, useEffect } from "react";
import { BASE_URL } from "../../api.js";

export const ShopContext = createContext("");

const ShopContextProvider = (props) => {
  const [all_product, setAll_product] = useState([]);
  const [cartItems, setCartItems] = useState({}); 

  useEffect(() => {
    fetch(`${BASE_URL}/allproducts`)
      .then((response) => response.json())
      .then((data) => setAll_product(data))
      .catch((error) => console.error("Error fetching products:", error));

    if (localStorage.getItem('auth-token')) {
      fetch(`${BASE_URL}/products/getcart`, {
        method: "POST",
        headers: {
          Accept: "application/form-data",
          "Content-Type": "application/json",
          'auth-token': `${localStorage.getItem('auth-token')}`,
        },
        body:"",
      })
        .then((response) => response.json())
        .then((data) => setCartItems(data));
    }

  }, []);

  const addToCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,  [itemId]: (prev[itemId] || 0) + 1 
    }));
    
    if (localStorage.getItem('auth-token')) {
      fetch(`${BASE_URL}/products/addtocart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'auth-token': localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    }
  }

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({
      ...prev,  [itemId]: Math.max((prev[itemId] || 0) - 1, 0) }));

      if(localStorage.getItem('auth-token')) {
fetch(`${BASE_URL}/products/removefromcart`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          'auth-token': localStorage.getItem('auth-token'),
        },
        body: JSON.stringify({ "itemId": itemId }),
      })
        .then((response) => response.json())
        .then((data) => console.log("Success:", data))
        .catch((error) => console.error("Error:", error));
    }


      }
    


    
  

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = all_product.find((product) => product.id === Number(item));
        if (itemInfo) {
          totalAmount += itemInfo.new_price * cartItems[item];
        }
      }
    }
    return totalAmount;
  }

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        totalItem += cartItems[item];
      }
    }
    return totalItem;
  }

  const contextValue = {
    all_product, 
    cartItems, 
    addToCart, 
    removeFromCart, 
    getTotalCartAmount, 
    getTotalCartItems
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  )
};

export default ShopContextProvider;