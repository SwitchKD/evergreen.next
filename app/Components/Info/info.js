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
    <div className=''>
      <div className='info_cont'>
        <div className='info_left'>
          <div className='pinfo_cont'>
            <p className='user_info'>{props.fname} {props.lname}</p>
            <p className='user_info'>{props.email}</p>
          </div>
            <div className='user_rating'>{rating(props.rating)}</div>
          </div>
        </div>
    </div>
    </>
  )
}
