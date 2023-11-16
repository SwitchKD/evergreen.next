'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import './products.css'
import Link from "next/link";


export default function Page() {

  const [Postdata, setPostData] = useState('')

  //fetch data
  useEffect(() => {
    async function fetchData() {

        const POSTresponse = await axios.get(`http://localhost:3000/api/postList`, {
          headers: {
            'Cache-Control': 'no-store',
          },
        })
        setPostData(POSTresponse.data)
    }

    fetchData();
  }, []);

  var cart = [];

  function addtocart(e)
  {
    cart.push(e.target.value)

    localStorage.setItem('cart_items', cart)
  }


  //post array
  const post = []
  function printPost()
  {
    for (let index = 0; index < Postdata.length; index++) {
      post.push(
        <div key={index} className="post_container">
        <div className="info_cont">
        <img className="post_image" src={Postdata[index].post.plant_image} alt=""></img>
        <div>
        <p className="post_info">{Postdata[index].post.plant_name}</p>
        </div>
        </div>
        <div className="function_container">
          <p className="post_info">₹{Postdata[index].post.plant_price}</p>
          <button onClick={addtocart} value={Postdata[index]._id}>Add to Cart</button>
        </div>
        </div>
      )}
    return post
  }

  return (
    <div className="post_parent">
      {printPost()}
    </div>
  )
}
