import React, { useState } from 'react';
import './EmailDetails.css';
import { Link } from 'react-router-dom';

export default function EmailDetails(props) {
  // const [to ,setTo] = useState('');
  const [from, setFrom] = useState(props.from);
  const [subject, setSubject] = useState(props.subject);
  const [message, setMessage] = useState(props.message);
  return (
    <div className='email-details'>
      <Link className='link' to='/react-email'><span>🔙</span></Link>

      <div className='send-email-form'>
        <h1>New email to {props.to}</h1>
        <input onChange={(e) => setFrom(e.target.value)} type='email' name='from' placeholder='From' />
        <input onChange={(e) => setSubject(e.target.value)} type='text' name='subject' placeholder='Subject' />
      <textarea onChange={(e) => setMessage(e.target.value)}  rows='50' cols='21' name='message' placeholder='Message' />
        <button onClick={() => { props.sendAddaEmail(props.to, from, subject, message) }}>Send</button>
      </div>
      {props.emailHistory.map((email) => {
        return <div className='email'>
        <div className='header-email'>
            <span className='email-date'>{(email.date)}</span>
            <span className='email-to'>{(email.from)}</span>
             </div>
        <div className='buttom-email'>
            <span className='email-title'>{(email.subject)}</span>
            <span className='email-body'>{(email.message)}</span>
            </div>
    </div>

      })}
    </div>
  )
}
