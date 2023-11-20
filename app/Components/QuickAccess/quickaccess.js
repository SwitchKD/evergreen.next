import './quickaccess.css'
import { FaArrowLeft } from "react-icons/fa";

export default function quickaccess() {
  return (
    <>
    <div className='quickaccess_parent'>
    <h3 id='h31'>Quick Access</h3>
        <div className='quickaccess_container'> 
            <a href='/profile' ><p className='qa_link'><FaArrowLeft /></p></a>
            <a href='/postblog' ><p className='qa_link'>Post Blog</p></a>
            <a href='/listing'><p className='qa_link'>Post Listing</p></a>
            <a href='/myblogs' ><p className='qa_link'>My Blogs</p></a>
            <a ><p className='qa_link'>Orders</p></a>
        </div>
    </div>
    </>
  )
}
