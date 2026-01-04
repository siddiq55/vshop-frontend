import React from 'react'
import { Hero } from '../components/Hero/hero.jsx'
import { Popular } from '../components/Popular/popular.jsx'
import {Offer} from '../components/Offer/offer.jsx'
import { NewCollections } from '../components/NewCollections/newCollections.jsx'
import { NewsLetter } from '../components/NewsLetter/newsLetter.jsx'
export const Shop = () => {
  return (
    <div>
        <Hero/>
        <Popular/>
        <Offer/>
        <NewCollections/>
        <NewsLetter/>
    </div>
  )
}
