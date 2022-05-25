import React, { useRef, useState } from 'react';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const emailRef = useRef();
  const passwordRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };

  const handleFinish = () => {
    setPassword(passwordRef.current.value);
  };

  return (
    <div className='register'>
      <div className='top'>
        <div className='wrapper'>
          <img
            src={require('../images/Netflix_2015_logo.svg.png')}
            alt='Netflix logo'
            className='logo'
          />
          <button className='loginButton'>Sign In</button>
        </div>
      </div>
      <div className='container'>
        <h1>Unlimited films, TV programmes and more.</h1>
        <h2>Watch anywhere. Cancel at any time.</h2>
        <p>
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        {!email ? (
          <div className='input'>
            <input type='email' placeholder='Email address' ref={emailRef} />
            <button className='registerButton' onClick={handleStart}>
              Get Started &nbsp;&nbsp;〉
            </button>
          </div>
        ) : (
          <form className='input'>
            <input type='password' placeholder='Password' ref={passwordRef} />
            <button className='registerButton' onClick={handleFinish}>
              Start
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default Register;
