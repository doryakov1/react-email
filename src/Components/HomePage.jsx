import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import Header from './Header';
import SendEmail from './SendEmail';
import {  Trash } from 'grommet-icons';
import { Confirm } from 'react-st-modal';
export default function HomePage(props) {
      const onClick = async () => {
    const isConfirm = await Confirm(
      'You cannot undo this action',
      'Are you sure you want to delete the entry?'
    );
  
    if (isConfirm) {
      props.deleteEmail(props.idx);
    }
  };
    const showComponent = () => {
        if (props.showComp == true) {
          return <SendEmail sendAddaEmail={props.sendAddEmail} emailAlert={props.emailAlert}  />
        }
      }
    const sliceDate = (text) => {
        if(text == undefined) return;
        if (text.length > 9) {
            return text.slice(0, 9);
        } else {
            return text;
        }
    }
    const sliceFrom = (text) => {
        if(text == undefined) return;
        if (text.length > 15) {
            return text.slice(0, 15)+'...';
        } else {
            return text;
        }
    }
    const sliceSubject = (text) => {
        if(text == undefined || text.length == 0) return 'Subject is empty';
        if (text.length > 50) {
            return text.slice(0, 50) + '...';
        } else {
            return text;
        }
    }
    const sliceMessage = (text) => {
        if(text == undefined || text.length == 0) return 'Message is empty';
        if (text.length > 90) {
            return text.slice(0, 90) + '...';
        } else {
            return text;
        }
    }
    return (
        <div className='home-page'>
            <Header filterEmails ={props.filterEmails}/>
            {props.emails.map((email,idx) => {
                return (
                    <div className='email-content'>
                    <Link className='link' to={'/react-email/emaildetails' + email.to}>
                         <div className='email'>
                        <div className='header-email'>
                            <span className='email-date'>{email.date}</span>
                            <span className='email-from'>{sliceFrom(email.to)}</span></div>
                        <div className='buttom-email'>
                            <span className='email-title'>{sliceSubject(email.subject)}</span>
                            <span className='email-body'>{sliceMessage(email.message)}</span>
                            </div>
                    </div>
                    </Link>
                    <button onClick={onClick} className='email-delete'>{<Trash/>}</button>
                    </div>)
            })}
           {showComponent()}
        </div>
    )
}
