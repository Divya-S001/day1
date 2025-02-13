import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/LoginForm'>LoginForm</Link>
      </nav>

      <div className='Pcontent'>
        <h1>Contact Us</h1>
        <p>Email: zzzzz@example.com</p>
        <p>Phone: 00000000000</p>
      </div>
    </div>
  );
}

export default Contact;