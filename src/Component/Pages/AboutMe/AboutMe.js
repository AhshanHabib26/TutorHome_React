import React from 'react';
import MyImg from '../../../Images/myImg.png'
import './AboutMe.css'

const AboutMe = () => {
    return (
        <div className='container text-center'>
            <h1 className='text-center mt-5 mb-3 text-muted'>About Me</h1>
            <div className="image_container">
                <img src={MyImg} alt="" />
            </div>
            <div className="info_details mt-3">
                <h1>Ahshan Habib</h1>
                <p>I am Ahshan Habib. Working As A Professional Web Design And Developer in Bangladesh Having 3+ Years Experience. I Have Experience In All Expect In Web Design And Development Using Language And FrameWork. I Have Skilled In HTML5, CSS3, Bootstrap, Tailwind, Javascript, React JS And Wordpress Themes Customization.</p>
               
               <p><small>I'm Self-motivated, Hardworking, Committed, And Able To Take Any Kind Of Professional Chellenge.</small></p>


                <div className="scl_link mt-5">
                    <li><a href={'https://www.linkedin.com/in/ahshanhabib26/'}>Linkedin</a></li>
                    <li><a href={'https://github.com/AhshanHabib26'}>Github</a></li>
                </div>
             
             


            </div>
        </div>
    );
};

export default AboutMe;