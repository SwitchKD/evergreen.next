import './info.css'
import { VscStarFull } from 'react-icons/vsc';

export default function Info(props) {

    const rats = []

    function rating(score)
    {
      for (let index = 0; index < score; index++) {
        rats.push(
          <VscStarFull key={index} className='temp_p'/>
        )
      }
      return rats
    }
  return (
    <>
    <div className='info_cont'>
        <div className='cont'>
            <div className='img_cont'> 
            <img className='user_img' src={props.img_url} alt=''></img>
            </div>
            <div className='in_cont'>
              <p className='user_name'>{props.fname} {props.lname}</p>
              <p className='user_name'>{props.email}</p>
              <p className='user_name'>{props.phone}</p>
            
              <div className='user_rating'>{rating(props.rating)}</div>
            </div>
        </div>
    </div>
    </>
  )
}
