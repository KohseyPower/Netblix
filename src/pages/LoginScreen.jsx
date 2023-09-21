import React, { useRef } from 'react';
import './LoginScreen.css';
import netflixLogo from '../img/netflix-logo.png';
import { auth } from '../firebase';

export default function LoginScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const signIn = (e) => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(emailRef.current.value, passwordRef.current.value)
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login-screen">
      <div className="login-up">
        <img src={netflixLogo} alt="Netflix-logo" />
      </div>
      <div className="login-main-container">
        <main className="login-main">
          <div className="signup-form-container">
            <form>
              <h1 class="sign-in-h1">Sign In</h1>
              <input className="sign-in-input" ref={emailRef} placeholder="Email" type="email" />
              <input className="sign-in-input" ref={passwordRef} placeholder="Password" type="password" />
              <div className="blank-between-inputs-and-btn"></div>
              <button className="sign-in-btn" type="button" onClick={signIn}>
                Sign In
              </button>
            </form>
            <div className="signup-text">
              <p>
                New to Netflix? <span className="signup-link">Sign up now.</span>
              </p>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="signup-link">Learn more.</span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}