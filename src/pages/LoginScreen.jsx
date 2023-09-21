import React, { useRef } from 'react';
import './LoginScreen.css';
import netflixLogo from '../img/netflix-logo.png';
import { auth} from '../firebase';

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
              <h1>Sign In</h1>
              <input ref={emailRef} placeholder="Email" type="email" />
              <input ref={passwordRef} placeholder="Password" type="password" />
              <button type="button" onClick={signIn}>
                Sign In
              </button>
            </form>
          </div>
        </main>
      </div>
    </div>
  );
}