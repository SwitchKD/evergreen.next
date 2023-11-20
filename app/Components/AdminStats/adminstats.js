'use client'
import './adminstats.css';

export default function adminstats(props) {

  return (
    <>
      <div className='admin_stats_container'>
        <h3>Admin Dashboard</h3>
        <h4>Welcome {props.admin_name}</h4>

        <div className='stats_container'>
          <div className='stats'>
            <p className='stat_title'>User</p>
            <p>{props.total_users}</p>
          </div>

          <div className='stats'>
            <p className='stat_title'>Blog</p>
            <p>{props.total_blogs}</p>
          </div>
        </div>
      </div>
    </>
  );
}
