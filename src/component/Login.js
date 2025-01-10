import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import ShoppingContext from '../Context/shopping/shoppingContext';
import './Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const shoppingContext = useContext(ShoppingContext);
  const { user } = shoppingContext;

  const navigate = useNavigate();

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        navigate('/'); // Navigate to home page on successful sign in
      })
      .catch((error) => alert(error.message)); // Handle errors
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate('/'); // Navigate to home page on successful sign in
        }
      })
      .catch((error) => alert(error.message)); // Handle errors
  };

  return (
    <div className='login'>
      <img
        src='/Assets/img/amazon-logo-transparent.png'
        alt='logo'
        className='logo'
      />
      <div className='login-container'>
        <h1>Sign In</h1>
        <form>
          <label>Email</label>
          <input
            type='text'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type='text'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button onClick={signIn} type='submit' className='login-button'>
            Sign In
          </button>
        </form>
        <p>
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </p>
        <button onClick={register} className='register-button'>
          Create Amazon Account
        </button>
      </div>
    </div>
  );
};

export default Login;
