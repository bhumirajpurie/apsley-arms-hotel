import React, { useState } from 'react';
import styles from './Login.module.css';


export default function Login() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  return (
    <div className={styles.signupcontainer}>
    <div className={styles.slogan}>
      <h1>Apsley Arms Hotel</h1>
      <br />
      <h1>Connecting your needs......</h1>
    </div>
      <div className={styles.signupform}>
        <form>
          <h2>Create Account</h2>
          <div className={styles.formgroup}>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className={styles.formgroup}>
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          
          </div>
         
          <button type="submit" className={styles.submitbutton}>Create Account</button>
          <p> or </p>
          <a href="https://www.google.com">Sign up with Google</a>
          <a href="https://www.google.com">sign up with facebook</a>
          <div>Already have an account? <a href="/login">Login</a></div>
        </form>
       
      
      </div>
    </div>
  );
}
