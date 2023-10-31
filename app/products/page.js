'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import './products.css'

export default function Page() {

  const [Postdata, setPostData] = useState('')

  //fetch data
  useEffect(() => {
    async function fetchData() {

        const POSTresponse = await axios.get(`http://localhost:3000/api/postList`, {
          headers: {
            'Cache-Control': 'max-age:30',
          },
        });
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
        <img className="post_image" src={Postdata[index].post.plant_image} alt=""></img>
        <p className="post_info">{Postdata[index].post.plant_name}</p>
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
