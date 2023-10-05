import React, { useRef } from 'react';
import './LoginScreen.css';
import netflixLogo from '../img/netflix-logo.png';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';


export default function SignUp() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const passwordConfirmRef = useRef(null);
  const navigate = useNavigate();


  const signUp = (e) => {
    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return alert("Passwords do not match");
    }
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((userCredential) => {
        navigate("/Netblix");
        console.log(userCredential.user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorCode, errorMessage);
      });
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
              <h1 class="sign-in-h1">Sign Up Now</h1>
              <input className="sign-in-input" ref={emailRef} placeholder="Email" type="email" />
              <input className="sign-in-input" ref={passwordRef} placeholder="Password" type="password" />
              <input className="sign-in-input" ref={passwordConfirmRef} placeholder="Password Confirm" type="password" />
              <div className="blank-between-inputs-and-btn"></div>
              <button className="sign-in-btn" type="button" onClick={signUp}>
                Create Account
              </button>
            </form>

          </div>
        </main>
      </div>
    </div>
  );
}