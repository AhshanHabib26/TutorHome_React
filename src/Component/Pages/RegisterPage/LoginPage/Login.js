import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import Google from "../../../../Images/google.png";
import Github from "../../../../Images/github.png";
import { useAuthState, useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../../../app_firebase_init";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const [signInWithEmailAndPassword, user1, loading, error] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, SPRerror] = useSendPasswordResetEmail(auth);
  const [signInWithGoogle] = useSignInWithGoogle(auth);
  const [signInWithGithub] = useSignInWithGithub(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user] = useAuthState(auth);
  const location = useLocation()
  const navigate = useNavigate()

  const from = location.state?.from?.pathname || "/";

  if(user){
    navigate(from, { replace: true });
  }

  if(error || SPRerror){
   toast('Please Provide Valid Information') 
  }

  if(user1){
    navigate('/checkout')
  }

  if(loading){
    toast('Wait a Few Minute')
  }

  if(sending){
    toast('Password Reset Link Sent')
  }
  

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };
  const heandlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSignInSubmit = (e) => {
    signInWithEmailAndPassword(email, password)
    e.preventDefault();
  };


  const handleGoogleSignIn = () =>{
    signInWithGoogle()
  }

  const handleGithubSignIn = () =>{
    signInWithGithub()
  }
  const handlePasswordReset = async () =>{
    await sendPasswordResetEmail(email);
  }

  return (
    <div className="container w-75 mx-auto mt-5">
      <h2 className="text-center my-5 fw-bold text-success">
        Welcome To Login Page
      </h2>
      <div className="input_wrap">
        <h1>Log in</h1>
        <form onSubmit={handleSignInSubmit}>
          <div className="input_items">
            <label>
              Your Email <span>*</span>
            </label>
            <input onBlur={handleEmail} type="email" placeholder="Email" required />
          </div>
          <div className="input_items">
            <label>
              Your Password <span>*</span>
            </label>
            <input onBlur={heandlePassword} type="password" placeholder="Password" />
          </div>

          <div className="input_txt">
            <p>
              You Have Not a Account? <Link to="/signup">Sign Up</Link>
            </p>
            <strong onClick={handlePasswordReset}>Forgot Password?</strong>
          </div>
          <div className="input_items">
            <button type="submit"> Login</button>
          </div>
          <ToastContainer />
        </form>

        <div className="hr_line d-flex justify-content-center w-50 mx-auto my-5">
          <span>Or</span>
        </div>

        <div className="d-flex justify-content-center my-3">
          <button onClick={handleGoogleSignIn} className="d-flex align-items-center me-3 btn btn-light text-success w-25 justify-content-center p-2">
            {" "}
            <img
              style={{ width: "30px", marginRight: "5px" }}
              src={Google}
              alt=""
            />{" "}
            Google
          </button>
          <button onClick={handleGithubSignIn} className="d-flex align-items-center btn btn-light text-success w-25 justify-content-center p-2">
            {" "}
            <img
              style={{ width: "30px", marginRight: "5px" }}
              src={Github}
              alt=""
            />{" "}
            Github
          </button>
        </div>
        <div className="inner_input">
          <li>Privacy Policy</li>
          <li>Terms & Conditions</li>
        </div>
      </div>
    </div>
  );
};

export default Login;
