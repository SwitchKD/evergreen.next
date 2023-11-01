'use client'
import { useState, useEffect } from "react";
import axios from "axios";
import './products.css'
import { CiTempHigh } from 'react-icons/ci';
import { BsFillSunFill } from 'react-icons/bs';
import { GiWaterDrop, GiFlowerPot } from 'react-icons/gi';
import { CgCodeClimate } from 'react-icons/cg';


export default function Page() {

  const [Postdata, setPostData] = useState('')

  //fetch data
  useEffect(() => {
    async function fetchData() {

        const POSTresponse = await axios.get(`https://plantio.vercel.app/api/postList`, {
          headers: {
            'Cache-Control': 'max-age:30',
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
        <img className="post_image" src={Postdata[index].post.plant_image} alt=""></img>
        <div className="info_cont">
        <p className="post_info">{Postdata[index].post.plant_name}</p>
        <p className="post_info">₹{Postdata[index].post.plant_price}</p>
        </div>
        <div className="properties_cont">
        <p className="post_infi"><CiTempHigh/>{Postdata[index].post.plant_temp_minC} - {Postdata[index].post.plant_temp_maxC}</p>

        <p className="post_infi"><BsFillSunFill/>{Postdata[index].post.plant_light}</p>

        <p className="post_infi"><GiWaterDrop/>{Postdata[index].post.plant_water}</p>

        <p className="post_infi"><CgCodeClimate/>{Postdata[index].post.plant_climate}</p>

        <p className="post_infi"><GiFlowerPot/>{Postdata[index].post.plant_use}</p>
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
