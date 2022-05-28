import React, { useState } from 'react';
import './SendEmail.css';
import validator from 'validator';

export default function SendEmail(props) {
  const [to, setTo] = useState('');
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sendChar, setSendChar] = useState('➕')
  const [alert, setAlert] = useState();
  const formvalid = () => {
    if (!(validator.isEmail(to) && validator.isEmail(from))) {
      setAlert(<span className='email-alert'>Emails are not valid</span>)
    }
    else {
      setAlert('')
      props.sendAddaEmail(to, from, subject, message);
    }
  }
  return (
    <div className='send-email'>
      <input id='checkbox-button' onClick={() => {
        if (sendChar == '➕') {
          setSendChar('❌');
        } else {
          setSendChar('➕');
        }
      }} name='checkbox-button-email' type="checkbox" />
      <div className='send-email-form-postion'>
        <div className='send-email-form'>
          <h1>New message</h1>
          <span className='email-alert'>{props.emailAlert}</span>
          {alert}
          <input onChange={(e) => setTo(e.target.value)} type='email' name='to' placeholder='To' />
          <input onChange={(e) => setFrom(e.target.value)} type='email' name='from' placeholder='From' />
          <input onChange={(e) => setSubject(e.target.value)} type='text' name='subject' placeholder='Subject' />
          <textarea onChange={(e) => setMessage(e.target.value)} rows='6' cols='14' placeholder='Message' />
          <button onClick={formvalid}>Send</button>
        </div>
      </div>
      <label className='send-email-button' for="checkbox-button-email">{sendChar}</label>
    </div>
  )
}
