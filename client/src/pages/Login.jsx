function Login() {
  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <img
            src={require('../images/Netflix_2015_logo.svg.png')}
            alt='Netflix logo'
            className='logo'
          />
        </div>
      </div>
      <div className='container'>
        <form action=''>
          <h1>Sign In</h1>
          <input type='email' placeholder='Email or phone number' />
          <input type='password' placeholder='Password' />
          <button className='loginButton'>Sign In</button>
          <span>
            New to Netflix? <span>Sign up now</span>.
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot. <span>Learn more.</span>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
