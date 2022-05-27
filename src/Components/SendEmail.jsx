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
        <span className='email-alert'>{props.emailAlert}</span>
       <input onChange={(e)=>setTo(e.target.value)} type='email' name='to' placeholder='To' />
      <input onChange={(e)=>setFrom(e.target.value)} type='email' name='from' placeholder='From' />
        <input onChange={(e)=>setSubject(e.target.value)} type='text' name='subject' placeholder='Subject' />
        <textarea onChange={(e)=>setMessage(e.target.value)} rows='4' cols='14' placeholder='Message' />
        <button onClick={()=>{props.sendAddaEmail(to , from ,subject , message)}}>Send</button>
        </div>
      </div>
      <label className='send-email-button' for="checkbox-button-email">{sendChar}</label>
    </div>
  )
}