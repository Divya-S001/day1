import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <nav>
        <Link to='/'>HOME</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
        <Link to='/LoginForm'>LoginForm</Link>
      </nav>

      <div className='Pcontent'>
        <h1>Home Page</h1>
        <p>This is the main page</p>
      </div>
    </div>
  );
}

export default Home;