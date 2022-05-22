import React, { useState } from 'react';
import './SendEmail.css';

export default function SendEmail(props) {
  const [to ,setTo] = useState('');
  const [from ,setFrom] = useState('');
  const [subject ,setSubject] = useState('');
  const [message ,setMessage] = useState('');
  const [sendChar,setSendChar] = useState('➕')

  return (
    <div className='send-email'>
      <input id='checkbox-button' onClick={()=>{
        if(sendChar == '➕'){
          setSendChar('❌');
        }else{
          setSendChar('➕');
        }
      }} name='checkbox-button-email' type="checkbox" />
      <div className='send-email-form-postion'>
        <div className='send-email-form'>
        <h1>New message</h1>
        <label for="to">To:<input onChange={(e)=>setTo(e.target.value)} type='email' name='to' /></label>
        <label for="from">From:<input onChange={(e)=>setFrom(e.target.value)} type='email' name='from' /></label>
        <label for="subject">Subject:<input onChange={(e)=>setSubject(e.target.value)} type='text' name='subject' /></label>
        <label for="message">Message:<input onChange={(e)=>setMessage(e.target.value)} type='textarea' name='message' /></label>
        <button onClick={()=>{props.sendAddaEmail(to , from ,subject , message)}}>Send</button>
        </div>
      </div>
      <label className='send-email-button' for="checkbox-button-email">{sendChar}</label>
    </div>
  )
}
