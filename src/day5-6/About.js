import React from 'react';
import { Link } from 'react-router-dom';

function About() {
  return (
    <div>
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/LoginForm'>LoginForm</Link>
      </nav>

      <div className='Pcontent'>
        <h1>About Us</h1>
        <p>Here is about page</p>
      </div>
    </div>
  );
}

export default About;