'use client'
import React, { useState, useEffect } from 'react';
import './top.css';
import axios from 'axios';

export default function Alldata() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchdata() {
        const response = await axios.get('http://localhost:3000/api/showcase');
        setData(response.data);
    }
    fetchdata();}, []);

  const all = []

  function getalldata() {
    for (let index = 0; index < data.length; index++) {
      const rand = Math.floor(Math.random() * 2000)
      all.push(
      <div key={index} className='item_frame'>
        <img src={data[index].url} className='img'></img>
        <div className='temp'>
        <p className='plant_name'>{data[index].common_name}</p>
        <p className='plant_details'>{data[index].use}</p>
        </div>
        <button className='plant_cont'>
        <p className='plant_price'>₹{rand}</p>
        </button>
      </div>
      )
    }
    return all
  }

  return (
    <div className='data_container'>
      <div className='inner_container'>
        <p className='top_seller'>Top Seller ⭐</p>
        <div className='itemcontainer'>
        {getalldata()}
        </div>
      </div>
    </div>
  )
}