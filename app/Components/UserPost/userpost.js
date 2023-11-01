import './userpost.css'
export default function userpost(props) {

   const postlooparray = []

   function POST()
   {
   for (let index = 0; index < props.postdata.length; index++) {
        postlooparray.push(
        <div key={index} className='post_item_container'>
        <p className="post_item">{props.postdata[index].post.plant_name}</p>
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
