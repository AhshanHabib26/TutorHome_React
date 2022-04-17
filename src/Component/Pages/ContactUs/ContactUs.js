import React from "react";
import './ContactUs.css'
import phoneCallIcon from '../../../Images/phone-call.png'
import emailIcon from '../../../Images/email.png'
import locationIcon from '../../../Images/google-maps.png'

const ContactUs = () => {
  return (
    <div>
      <div className="contact_us_container container">
        <div className="contact_section">
          <h1>Get In Touch</h1>
          <p>Feel Free To Contact Us Any Time.</p>
        </div>
        <div className="contact_area">
          <div className="contact_details">
            <div className="phone_info">
              <div className="icons">
                <img src={phoneCallIcon} alt="" />
              </div>
              <div className="details">
                <h2>Phone Number</h2>
                <p>(+880)-1646418365</p>
              </div>
            </div>
            <div className="email_info">
              <div className="icons">
                <img src={emailIcon} alt="" />
              </div>
              <div className="details">
                <h2>Email Address</h2>
                <p>habib.net27@gmail.com</p>
              </div>
            </div>
            <div className="location_info">
              <div className="icons">
                <img src={locationIcon} alt="" />
              </div>
              <div className="details">
                <h2>Location</h2>
                <p>1212 - Dhaka, Bangladesh</p>
              </div>
            </div>
          </div>
          <div className="contact_input">
            <div className="input_box">
              <input type="text" placeholder="Enter Your Name" required />
              <input type="email" placeholder="Enter Your Email" required />
              <input type="tel" placeholder="Phone Number" required />
              <input type="text" placeholder="Subject" required />
            </div>
            <div className="text_area">
              <textarea name="textarea" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="submit_btn">
              <input type="submit" value="Send Message" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
