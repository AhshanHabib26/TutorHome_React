import React from 'react';
import { Link } from 'react-router-dom';
import SupportImg from '../../../Images/Support.png'
import './Support.css'

const Support = () => {
    return (
        <div className='container my-5'>
            <div className="support_container my-5">
                <div className="support_info">
                    <h1 className='mb-5'>We Support  You! <br /> Learn While Staying <br /> Home</h1>
                    <Link  to='/login'>Get Started</Link>
                </div>
                <div className="support_img">
                    <img src={SupportImg} alt="" />
                </div>
            </div>
           
        </div>
    );
};

export default Support;