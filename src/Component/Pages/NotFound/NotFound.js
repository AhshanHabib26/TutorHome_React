import React from 'react';
import { Link } from 'react-router-dom';
import NotFoundImg from '../../../Images/NotFound.png'
import './NotFound.css'

const NotFound = () => {
    return (
        <div className='container my-5 text-center'>
            <img src={NotFoundImg} alt="" />
            <div className='my-5 notfoundLink'>
            <Link to='/'>Go To Homepage</Link>
            </div>
            
        </div>
    );
};

export default NotFound;