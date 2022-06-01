import React from 'react';
import './Header.css';

export default function Header(props) {
  return (
    <div className='header'>
    <input onChange={(e)=>{props.filterEmails(e.target.value)}} type='search' placeholder='Search'/>
    </div>
  )
}
