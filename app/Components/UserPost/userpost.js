import './userpost.css'
import axios from 'axios'
export default function userpost(props) {

   const postlooparray = []

   var postId = null

  const deletePOST = async (event) => {
    postId = event.target.value; // Get the _id value from the button's value attribute

    // Perform your delete operation or other logic here
    await axios.post('http://localhost:3000/api/deletePost', {postId})
    window.location.reload()
  };

   function POST()
   {
   for (let index = 0; index < props.postdata.length; index++) {
        postlooparray.push(
        <div key={index} className='post_item_container'>
        <p className="post_item">{props.postdata[index].post.plant_name}</p>
        <p className="post_item">{props.postdata[index].post.plant_quantity}X</p>
        <button onClick={deletePOST} value={props.postdata[index]._id} className='delete_post'>X</button>
        </div>
        )
   }
   return postlooparray
}

  return (
    <>
    <div className='post_parent'>
        <p>Your listing's</p>
        <div className='post_container1'>
            {POST()}
        </div>
    </div>
    </>
  )
}
