'use client'
import React, { useState, useEffect } from 'react';
import './searchdata.css';
import axios from 'axios';

export default function Alldata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
        const response = await axios.get('http://localhost:3000/api/product');
        setData(response.data);
    }
    fetchdata();}, []);

  const all = []


  function getalldata() {
    for (let index = 0; index < data.length; index++) {
      const rand = Math.floor(Math.random() * (2000 - 300)) + 300
      // console.log("Updated Price");
      all.push(
      <div id={index} key={index} className='item_frame'>
      <a href=''>
      <img src={data[index].url} alt='' className='item_image'></img>
      <div className='item_text'>
      <p id={index}>{data[index].common_name}</p>
      <p id={index}>₹{rand}</p>
      </div>
      </a>
      <button>Add to Cart</button>
      </div>
      )
    }
    return all
  }

  return (
    <div className='data_container'>
        {getalldata()}
    </div>
  )
}