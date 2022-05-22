import React from 'react';
import { Link } from 'react-router-dom';
import './Inbox.css';

export default function Inbox(props) {
    // const deleteDate = (text) => {
    //     if(text == undefined) return;
    // }
    const sliceFrom = (text) => {
        if(text == undefined) return;
        if (text.length > 25) {
            return text.slice(0, 25) + '...';
        } else {
            return text;
        }
    }
    const sliceSubject = (text) => {
        if(text == undefined) return;
        if (text.length > 25) {
            return text.slice(0, 25) + '...';
        } else {
            return text;
        }
    }
    const sliceMessage = (text) => {
        if(text == undefined) return;
        if (text.length > 60) {
            return text.slice(0, 60) + '...';
        } else {
            return text;
        }
    }
    return (
        <div className='inbox'>
            {props.emails.map((email) => {
                return (
                    <Link className='link' to={'/react-email/emaildetails' + email.from}> <div className='email'>
                        <div className='header-email'><span className='email-date'>{email.date}</span>
                            <span className='email-from'>{sliceFrom(email.to)}</span></div>
                        {/* <span className='email-from'>{sliceFrom(email.from)}</span> */}
                        <div className='buttom-email'>
                            {/* <span className='email-title'>{sliceSubject(email.subject)}</span> */}
                            <span className='email-body'>{sliceMessage(email.message)}</span></div>
                    </div></Link>)
            })}
        </div>
    )
}
