'use client'
import './id.css'
import { useState, useEffect, Suspense } from "react";
import { usePathname } from 'next/navigation'
import axios from 'axios'

export default function page() {

  const pathname = usePathname()
  const id = pathname.replace('/blog/', '');

  const [showLikeButton, setShowLikeButton] = useState(true) 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/blogID?id="+id, {
          headers: {
            'Cache-Control': 'max-age=3600',
          },
        });

        setBlog(response.data); // Assuming the response contains a list of blog data
      } catch (error) {
        console.error('Error fetching blog list:', error);
      }
    };

    fetchData(); // Call the fetchData function when the component mounts

    // Optionally, you can clean up the effect (e.g., cancel the request) if the component unmounts
    return () => {
      // Your cleanup logic here, if needed
    };
  }, [id]);

  function handleLike(e) {
    if (showLikeButton) {
    setShowLikeButton(!showLikeButton);
    var blogid = e.target.value
    var updatedLike = blog.blog_rating + 1

    var likeData = {
      BLOG_ID: blogid,
      BLOG_UPDATELIKE: updatedLike,
    }

    axios.post('http://localhost:3000/api/updateLikeBlog', likeData)
            .then(response => {
              console.log("Post request successful:", response.data);
            })
            .catch(error => {
              console.error("Error posting user:", error);
            })
            .finally(() => {
              setTimeout(function () {
                window.location.href = '/blog';
              }, 700);
            });

  }
}

  const [Blog, setBlog] = useState({
    "blog": {
      "blog_title": "",
      "blog_content": "",
      "blog_rating": 0
    },
    "_id": "",
    "blogCreator_name": "",
    "blogCreator_id": "",
    "__v": 0
  })

  const { blog, _id, blogCreator_name, __v } = Blog

  return (
    <>
      <Suspense>
        <div className='id_container'>
          <div className='content'>
            <h1>{blog.blog_title}</h1>
            <h3>{blogCreator_name}.</h3>
            <p>{blog.blog_content}.</p>

            <div className='interact_container'>
              {showLikeButton && (
                <button onClick={handleLike} id='like_button' value={_id}>Like</button>
              )}
              <h4>Like: {blog.blog_rating}</h4>
            </div>
          </div>

          <div id='blob1' className='design'></div>
          <div id='blob2' className='design'></div>
        </div>
      </Suspense>
    </>
  )
}
