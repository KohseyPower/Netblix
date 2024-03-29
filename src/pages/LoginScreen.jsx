import React, { useRef } from 'react';
import './LoginScreen.css';
import netflixLogo from '../img/netflix-logo.png';
import { auth } from '../firebase';
import { Link } from "react-router-dom";


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
      .catch((error) => document.querySelector(".sign-in-error-container").innerHTML = "<p><b>Invalid email or password.</b> Please try again or create a new account.<\p>");
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
              <div className="sign-in-error-container">
              </div>
              <input className="sign-in-input" ref={emailRef} placeholder="Email" type="email" />
              <input className="sign-in-input" ref={passwordRef} placeholder="Password" type="password" />
              <div className="blank-between-inputs-and-btn"></div>
              <button className="sign-in-btn" type="button" onClick={signIn}>
                Sign In
              </button>

            </form>
            <div className="signup-text">
              <p>
                New to Netflix? <span className="signup-link">
                  <a class="sign-up-now"  >< Link to="/signup" style={{ textDecoration: 'none', color: 'white' }} >
                    Sign up now
                  </Link ></a></span>. {/* go to page Signup*/}
              </p>
              <p>
                This page is protected by Google reCAPTCHA to ensure you're not a bot. <span className="signup-link signup-link-learn-more">Learn more.</span>
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}