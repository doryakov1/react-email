import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

export default function Header(props) {
  return (
    <div className='header'>
    <input onChange={(e)=>{props.filterEmails(e.target.value)}} type='search' placeholder='Search'/>
    <Link className='link' to={"/react-email"}><h4>Email app</h4></Link>
    </div>
  )
}
