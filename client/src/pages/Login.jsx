import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { loginCall } from '../authContext/apiCalls';
import { AuthContext } from '../authContext/AuthContext';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { dispatch } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    loginCall({ email, password }, dispatch);
  };

  return (
    <div className='login'>
      <div className='top'>
        <div className='wrapper'>
          <Link to='/'>
            <img
              src={require('../images/Netflix_2015_logo.svg.png')}
              alt='Netflix logo'
              className='logo'
            />
          </Link>
        </div>
      </div>
      <div className='container'>
        <form action=''>
          <h1>Sign In</h1>
          <input
            type='email'
            placeholder='Email or phone number'
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className='loginButton' onClick={handleLogin}>
            Sign In
          </button>
          <span>
            New to Netflix?{' '}
            <Link to='/register' className='signUpLink'>
              Sign up now
            </Link>
            .
          </span>
          <small>
            This page is protected by Google reCAPTCHA to ensure you're not a
            bot.{' '}
            <a
              href='https://www.google.com/recaptcha/about/'
              target='_blank'
              rel='noreferrer'
            >
              Learn more.
            </a>
          </small>
        </form>
      </div>
    </div>
  );
}

export default Login;
