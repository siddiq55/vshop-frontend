import React from 'react'
import { useState } from 'react'
import './newCollections.css'
import {Item} from '../Item/item.jsx'
import { useEffect } from 'react'
import { BASE_URL } from '../../../api.js'

export const NewCollections = () => {

const [new_collection, setNew_collection] = useState([]);


useEffect(()=>{
  fetch(`${BASE_URL}/products/new-collection`)
  .then(res=>res.json())
  .then(data=>setNew_collection(data))
},[])

  return (
    <div className='newCollections'>
<h1>NEW COLLECTIONS</h1>
<hr />
<div className="collections">
    {new_collection.map((item,i)=>{
return <Item  key={i} id={item.id} name={item.name} image={item.imageUrl} new_price={item.new_price} old_price={item.old_price}/>
    })}
</div>
    </div>
  )
}
