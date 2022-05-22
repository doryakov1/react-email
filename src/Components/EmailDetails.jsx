import React from 'react';
import './EmailDetails.css';
import { Link } from 'react-router-dom';

export default function EmailDetails(props) {
  console.log(props)
  return (
    <div className='email-details'>
      <Link className='link' to='/react-email'><span>Back</span></Link>
      <div className='email-header'>
       <span className='email-date'>{props.date}</span>
       <div className='email-header-to-from'>
       <span className='email-to'>{props.to}</span>
       {/* <span className='email-from'>{props.from}</span> */}
       </div>
      </div>
      <span className='email-title'>{props.subject}</span>
      <span className='email-body'>{props.message}</span>
    </div>
  )
}
