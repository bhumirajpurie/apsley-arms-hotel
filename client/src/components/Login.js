
import React, { useState } from 'react';
import styles from './Signup.module.css';

export default function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 
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
          
         
          <button type="submit" className={styles.submitbutton}>Lets GO</button>
          <p> or </p>
         
          <div>Do you have an account? <a href="/login">Signup</a></div>
        </form>
       
      
      </div>
    </div>
  );
}
