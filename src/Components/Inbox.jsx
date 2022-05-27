import React from 'react';
import { Link } from 'react-router-dom';
import './Inbox.css';

export default function Inbox(props) {
    // const deleteDate = (text) => {
    //     if(text == undefined) return;
    // }
    const sliceDate = (text) => {
        if(text == undefined) return;
        if (text.length > 10) {
            return text.slice(0, 10);
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
        if(text == undefined) return;
        if (text.length > 15) {
            return text.slice(0, 15) + '...';
        } else {
            return text;
        }
    }
    const sliceMessage = (text) => {
        if(text == undefined) return;
        if (text.length > 35) {
            return text.slice(0, 35) + '...';
        } else {
            return text;
        }
    }
    return (
        <div className='inbox'>
            {props.emails.map((email) => {
                return (
                    <Link className='link' to={'/react-email/emaildetails' + email.to}>
                         <div className='email'>
                        <div className='header-email'>
                            <span className='email-date'>{sliceDate(email.date)}</span>
                            <span className='email-from'>{sliceFrom(email.to)}</span></div>
                        <div className='buttom-email'>
                            <span className='email-title'>{sliceSubject(email.subject)}</span>
                            <span className='email-body'>{sliceMessage(email.message)}</span>
                            </div>
                    </div>
                    </Link>)
            })}
        </div>
    )
}
