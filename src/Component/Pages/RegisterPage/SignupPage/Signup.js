import React, { useState } from "react";
import Google from "../../../../Images/google.png";
import Github from "../../../../Images/github.png";
import { Link, useNavigate} from "react-router-dom";
import auth from "../../../../app_firebase_init";
import {  useCreateUserWithEmailAndPassword, useSendEmailVerification, useSignInWithGithub, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const [createUserWithEmailAndPassword,  user] = useCreateUserWithEmailAndPassword(auth);
  const [sendEmailVerification, sending, error] = useSendEmailVerification(auth);
  const [signInWithGoogle,  GoUser] = useSignInWithGoogle(auth);
  const [signInWithGithub,  GitUser] = useSignInWithGithub(auth);
 const navigate = useNavigate()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleEmail = (e) => {
    const inputValue = e.target.value;
    setEmail(inputValue);
  };
  const heandlePassword = (e) => {
    const passValue = e.target.value;
     setPassword(passValue);
  };
  if(error){
    toast('Please Provide Valid Email')
  }
  

  const handleSubmit = (e) => {
    createUserWithEmailAndPassword(email, password);
    e.preventDefault();
  };

  const handleGoogleSignUp = () =>{
    signInWithGoogle()
  }

  const handleGithubSignUp = () =>{
    signInWithGithub()
  }

  if(user){
    sendEmailVerification()
    toast('Email Verification Sent')
  }

  if(user || GitUser || GoUser){
    navigate('/home')
  }


  return (
    <div className="container w-75 mx-auto mt-5">
      <h2 className="text-center my-5 fw-bold text-success">
        Welcome To Register Page
      </h2>
      <div className="input_wrap">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="input_items">
            <label>
              Your Name <span>*</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              required
            />
          </div>
          <div className="input_items">
            <label>
              Your Email <span>*</span>
            </label>
            <input
              onBlur={handleEmail}
              type="email"
              placeholder="Email"
              required
            />
          </div>
          <div className="input_items">
            <label>
              Your Password <span>*</span>
            </label>
            <input
              onBlur={heandlePassword}
              type="password"
              placeholder="Password"
            />
          </div>
          <div className="input_txt">
            <p>
              You Have an Account? <Link to="/login">Login</Link>
            </p>
          </div>
          <div className="input_items">
            <button type="submit">Register </button>
          </div>
          <ToastContainer />
        </form>
        <div className="hr_line d-flex justify-content-center w-50 mx-auto my-5">
          <span>Or</span>
        </div>
        <div className="d-flex justify-content-center my-3">
          <button onClick={handleGoogleSignUp} className="d-flex align-items-center me-3 btn btn-light text-success w-25 justify-content-center p-2">
            {" "}
            <img
              style={{ width: "30px", marginRight: "5px" }}
              src={Google}
              alt=""
            />{" "}
            Google
          </button>
          <button onClick={handleGithubSignUp} className="d-flex align-items-center btn btn-light text-success w-25 justify-content-center p-2">
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

export default Signup;
