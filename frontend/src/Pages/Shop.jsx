import React, { useEffect, useState } from 'react'
import Hero from '../Components/Hero/Hero'
import Popular from '../Components/Popular/Popular'
import Offers from '../Components/Offers/Offers'
import NewCollections from '../Components/NewCollections/NewCollections'
import NewsLetter from '../Components/NewsLetter/NewsLetter'

const Shop = () => {

  const [popular, setPopular] = useState([]);
  const [newcollection, setNewCollection] = useState([]);

  const API_BASE = "https://shopper-rnec.onrender.com";

  const fetchInfo = () => { 
    fetch(`${API_BASE}/popularinwomen`) 
      .then((res) => res.json()) 
      .then((data) => setPopular(data));

    fetch(`${API_BASE}/newcollections`) 
      .then((res) => res.json()) 
      .then((data) => setNewCollection(data));
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div>
      <Hero/>
      <Popular data={popular}/>
      <Offers/>
      <NewCollections data={newcollection}/>
      <NewsLetter/>
    </div>
  )
}

export default Shop;
