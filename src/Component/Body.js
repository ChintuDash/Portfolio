import React from 'react';
import {useTypewriter,Cursor} from 'react-simple-typewriter';

import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiIndeed } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from 'react-icons/fa';

function Body(){   
        const [text] = useTypewriter({
            words: ['FullStack Developer','PhotoDesigner'],
            loop: {},
            typeSpeed:100,
            deleteSpeed:80,
        });
        return(
            <div className="Maindiv">
               <div className="div1">
                <img src={process.env.PUBLIC_URL+"/image/image.jpg"} alt="not found" id="mypic"/>
                <h4>Chintu Dash</h4>
                <h6>FullStack Web Developer</h6>
                <div className="icons">
                   <a href="https://linkedin.com/in/chintu-dash-851060314/" target="_blank" > <FaLinkedin /> </a>
                   <a href="https://github.com/ChintuDash" target="_blank"> <FaGithub />  </a>
                   <a href="https://profile.indeed.com/?hl=en_IN&co=IN&from=gnav-jobsearch--indeedmobile" target="_blank"> <SiIndeed /> </a>
                   <a href="https://www.facebook.com/dashchintu.dash/" target="_blank"> <FaFacebook />  </a>
                    <a href="https://www.instagram.com/chintu___dash/" target="_blank"> <FaInstagram /> </a>
                </div>
               </div>
               <div className="div2">
                 <h1 id="autobox">
                    I'm a {' '}
                    <span> {text} </span>
                    <span><Cursor cursorStyle='|'/></span>
                 </h1>
                <h5>Aspiring web developer with hands-on experience in front-end and back-end technologics. Proficient in JavaScript, React.js, and the MERN
                    stack. Seeking to leverage skills and knowledge in an entry-level role where I can grow and contribute to the development of user-friendly web applications.
                </h5>
               
               </div>
            </div>
        )

}
export default Body;