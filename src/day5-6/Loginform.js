import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Loginform() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  function loginHandle(e) {
    e.preventDefault();

    if (!email || !password) {
      setErr("Please enter required fields");
      return;
    }

    alert("Login Successfully!"); 
    setErr("");
  }

  return (

    <div>      <nav>

    <Link to='/'>HOME</Link>
    <Link to='/About'>About</Link>
    <Link to='/Contact'>Contact</Link>
    <Link to='/LoginForm'>LoginForm</Link>
    </nav>
    <div className='loginC'>
      <h1>Login Form</h1>
      <form onSubmit={loginHandle}>
        <input 
          type='email' 
          placeholder='Enter Email Id' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />
        <br /><br />
        
        <input 
          type='password' 
          placeholder='Enter Password' 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <br /><br />
        
        {err && <p className="err">{err}</p>}
        <button type='submit'>Login</button>
      </form>
    </div>
    </div>
  );
}

export default Loginform;