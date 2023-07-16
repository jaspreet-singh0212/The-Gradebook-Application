import React, { useState } from 'react';
 import './Signin.css';
 import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



function SignIn({ onSignIn ,props}) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    onSignIn(username, password);
  };

   return (
    <div className='background'>
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email"  className='label'><FontAwesomeIcon icon="fa-solid fa-user" size='xl' /> Username</label>
                <input value={username} onChange={(e) => setUsername(e.target.value)}type="text" placeholder="user" id="email" name="email"  className='input'/>
                <label htmlFor="password" className='label'><FontAwesomeIcon icon="fa-solid fa-key" size='xl'/> Password</label>
                <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="***" id="password" name="password" className='input'/>
                <button type="submit" className='button1'><FontAwesomeIcon icon="fa-solid fa-arrow-right-to-bracket" size='xl'/> &nbsp; Log In</button>
            </form>
        </div>
        </div>
    )}
   
            
export default SignIn;

   