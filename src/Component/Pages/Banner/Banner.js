import React from 'react';
import { Link } from 'react-router-dom';
import BannerImg from '../../../Images/Banner.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner_container'>
            <div className="image_container">
                <img className='img-fluid' src={BannerImg} alt="" />
                <div className="text_container">
                    <h1>A Learning Platform <br /> That Helps You To <br /> Learning Faster</h1>
                    <p>World-class training and development programs developed by top teachers</p>
                    <Link className='ex_button' to='/login'>Explore All Courses</Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;