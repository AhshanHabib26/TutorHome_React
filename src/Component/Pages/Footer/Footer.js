import React from 'react';
import {BsFacebook, BsGithub, BsFillTelephoneOutboundFill} from 'react-icons/bs'
import {FaLinkedinIn, FaRegCopyright} from 'react-icons/fa'
import {MdOutlineMarkEmailUnread} from 'react-icons/md'
import {ImLocation2} from 'react-icons/im'
import './Footer.css'

const date = new Date()
const year = date.getFullYear()


const Footer = () => {
    return (
        <div className='mt-5'>
            <div className="footer_container">
                <div className="about_section">
                    <h1>TutorHo<span className='titleSpan'>me</span> </h1>
                    <p>The more that you read, the more things you will know. The more that you learn, the more places you'll go.</p>
                    <div className="social_icons">
                        <li><BsFacebook/></li>
                        <li><FaLinkedinIn/></li>
                        <li><BsGithub/></li> 
                    </div>
                </div>
                <div className="Useful_links_section">
                    <li>About Us</li>
                    <li>Terms & Conditions</li>
                    <li>Privacy Policy</li>
                    <li>Student Analytics</li>
                </div>
                <div className="contact_us_section">
                    <div className="phone_info">
                    <BsFillTelephoneOutboundFill/>
                    <span className='phoneSpan'>(+880)- 1646418365</span>
                    </div>
                    <div className="email_info">
                        <MdOutlineMarkEmailUnread/>
                        <span className='emailSpan'>habib.net27@gmail.com</span>
                    </div>
                    <div className="address_info">
                        <ImLocation2/>
                        <span className='locationSpan'>Dhaka, Bangladesh</span>

                    </div>
                </div>
            </div>
            <div className="copyright_section">
                <p> <FaRegCopyright/> All Rights Resrved {year} - 2026 | Design By  <a href="https://www.linkedin.com/in/ahshanhabib26/">Ahshan Habib</a> </p>
            </div>
        </div>
    );
};

export default Footer;