import React, { useState } from 'react';
import './EmailDetails.css';
import { Link } from 'react-router-dom';
import validator from 'validator';

export default function EmailDetails(props) {
  const [starChar , setStarChar] = useState('☆')
  const [openModal, setOpenModal] = useState(false);
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const formModal = () => {
    if (openModal == true) {
      return (<div className='send-email-form'>
        <h1>New email to {props.to}</h1>
        <input onChange={(e) => setFrom(e.target.value)} type='email' name='from' placeholder='From' />
        <input onChange={(e) => setSubject(e.target.value)} type='text' name='subject' placeholder='Subject' />
        <textarea onChange={(e) => setMessage(e.target.value)} rows='50' cols='21' name='message' placeholder='Message' />
        <button onClick={formvalid}>Send</button>
      </div>)
    }
  }
  const formvalid = () => {
    if (validator.isEmail(from) && validator.isEmail(props.to)) {
      props.sendAddaEmail(props.to, from, subject, message);
    }
  }
  return (
    <div className='email-details'>
      <Link className='link' to='/react-email'><span>🔙</span></Link>
      {formModal()}
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
      <div className='buttons-email'>
          <button onClick={()=>setOpenModal(!openModal)}>➕</button>
          <button className='button-delete'>❌</button>
          <button onClick={()=>{
            if(starChar == '☆'){
              setStarChar('★')
            }else{
              setStarChar('☆')
            }
          }} className='button-star'>{starChar}</button>
          <button>🗑️</button>
      </div>
    </div>
  )
}
