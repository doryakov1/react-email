import React, { useState } from 'react';
import './EmailDetails.css';
import { useNavigate ,Link} from 'react-router-dom';
import validator from 'validator';
import { Add , Trash } from 'grommet-icons';
import { Confirm } from 'react-st-modal';

export default function EmailDetails(props) {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [from, setFrom] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [alert, setAlert] = useState();
  const formvalid = () => {
    if (!(validator.isEmail(from))) {
      setAlert(<span className='email-alert'>Invalid email address</span>)
    }
    else if(subject.length == 0 && message.length == 0){
      setAlert(<span className='email-alert'>Please fill the form</span>)
    }else{
      setAlert()
      props.sendAddaEmail(props.to , from, subject, message);
    }
  }
  const formModal = () => {
    if (openModal == true) {
      return (<div className='send-email-form'>
        <h1>New email to {props.to}</h1>
        <span className='email-alert'>{props.emailAlert}</span>
        {alert}
        <input onChange={(e) => setFrom(e.target.value)} type='email' name='from' placeholder='From' />
        <input onChange={(e) => setSubject(e.target.value)} type='text' name='subject' placeholder='Subject' />
        <textarea onChange={(e) => setMessage(e.target.value)} rows='50' cols='21' name='message' placeholder='Message' />
        <button onClick={formvalid}>Send</button>
      </div>)
    }
  }
 
  const onClick = async () => {
    const isConfirm = await Confirm(
      'You cannot undo this action',
      'Are you sure you want to delete the entry?'
    );
  
    if (isConfirm) {
      props.deleteEmail(props.idx);
      navigate('/react-email');
    }
  };
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
          <button onClick={()=>setOpenModal(!openModal)}>{<Add/>}</button>
          <button onClick={onClick} className='button-delete'>{<Trash/>}</button>
      </div>
    </div>
  )
}
