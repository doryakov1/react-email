import React from 'react';
import './EmailDetails.css';

export default function EmailDetails(props) {
  console.log(props)
  return (
    <div className='email-details'>
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
