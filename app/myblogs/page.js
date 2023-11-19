'use client'
import { useState, useEffect, Suspense } from "react";
import axios from "axios";
import './myblogs.css'

export default function page() {

const [blogsData, setblogData] = useState('')

  useEffect(() => {
      const fetchData = async () => {
        var uid = localStorage.getItem('uid')
        try {
            const response = await axios.get(`http://localhost:3000/api/blogByID?bcid=${uid}`, {
                headers: {
                  'Cache-Control': 'no-store',
                }
              });
          setblogData(response.data); // Assuming the response contains a list of blog data
        } catch (error) {
          console.error('Error fetching blog list:', error);
        }
      };
  
      fetchData(); // Call the fetchData function when the component mounts
  
      // Optionally, you can clean up the effect (e.g., cancel the request) if the component unmounts
      return () => {
        // Your cleanup logic here, if needed
      };
    }, []);
  
    var blog_array = []

    function deleteblog(e) {
        var blogid = e.target.value

        var deleteData = {
            blog_id: blogid
        }

        console.log(blogid);
        axios.post('http://localhost:3000/api/deleteBlog', deleteData)
            .then(response => {
              console.log("Post request successful:", response.data);
            })
            .catch(error => {
              console.error("Error posting user:", error);
            })
            .finally(() => {
              setTimeout(function () {
                window.location.href = '/myblogs';
              }, 200);
            });
    }
  
    function printBlogs(){
      for (let index = 0; index < blogsData.length; index++) {
          blog_array.push(
              <div className='blog_item' key={index}>
                <div>
                <p className='blog_link1'>{blogsData[index].blog.blog_title}</p>
                <p className='blog_link'>Likes {blogsData[index].blog.blog_rating}</p>
                </div>
                <div className="control_container">
                    <button onClick={deleteblog} value={blogsData[index]._id}>delete</button>
                </div>
              </div>
          )
      }
      return blog_array
    }
  return (
    <>
    <div className='blog_container'>
    <Suspense>
    {printBlogs()}
    </Suspense>
    </div>
    </>
  )
}
