import React from "react";
import Google from "../../../../Images/google.png";
import Github from "../../../../Images/github.png";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="container w-50 mx-auto mt-5">
      <h2 className="text-center my-5 fw-bold text-success">
        Welcome To Register Page
      </h2>
      <div className="input_wrap">
        <h1>Register</h1>
        <form action="">
          <div className="input_items">
            <label>
              Your Name <span>*</span>
            </label>
            <input type="text" placeholder="Name" required />
          </div>
          <div className="input_items">
            <label>
              Your Email <span>*</span>
            </label>
            <input type="email" placeholder="Email" required />
          </div>
          <div className="input_items">
            <label>
              Your Password <span>*</span>
            </label>
            <input type="password" placeholder="Password" />
          </div>
          <div className="input_items">
            <label>
              Confirm Password <span>*</span>
            </label>
            <input type="password" placeholder="Password" />
          </div>

          <div className="input_txt">
            <p>
              You Have an Account? <Link to="/login">Login</Link>
            </p>
            <strong>Forgot Password?</strong>
          </div>
          <div className="input_items">
            <button type="submit">Register </button>
          </div>
        </form>
        <div className="hr_line d-flex justify-content-center w-50 mx-auto my-5">
          <span>Or</span>
        </div>
        <div className="d-flex justify-content-center my-3">
          <button className="d-flex align-items-center me-3 btn btn-danger w-25 justify-content-center p-2">
            {" "}
            <img
              style={{ width: "30px", marginRight: "5px" }}
              src={Google}
              alt=""
            />{" "}
            Google
          </button>
          <button className="d-flex align-items-center btn btn-success w-25 justify-content-center p-2">
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
