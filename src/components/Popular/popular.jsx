import React from 'react'
import { useEffect, useState } from 'react'
import './popular.css'
import {Item} from '../Item/item.jsx'
import { BASE_URL } from '../../api.js'


export const Popular = () => {

const [popular_in_men, setPopular_in_men] = useState([]);


useEffect(()=>{
  fetch(`${BASE_URL}/products/popular-in-men`)
  .then(res=>res.json())
  .then(data=>setPopular_in_men(data))
},[])










  return (
    <div className='popular'>
<h1>POPULAR IN MEN</h1>
<hr/>
<div className="popular-item">
    {popular_in_men.map((item,i)=>{
           return < Item key={i} id={item.id} name={item.name} image={item.imageUrl} new_price={item.new_price} old_price={item.old_price} />  
    })}
</div>
    </div>
  )
}
