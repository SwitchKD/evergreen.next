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
          <button value={Postdata[index].post.plant_price}>Add to Cart</button>
        </div>

        <Link href={`/products/${encodeURIComponent(Postdata[index]._id)}`}>link</Link>
        
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
