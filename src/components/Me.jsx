import React from 'react';
import {FaTwitter, FaLinkedin, FaGithub, FaArrowDown} from "react-icons/fa";
import img from "../Assets/img.jpg";

const Me = () => {
    const SOCIAL = [
        {
            id : 1,
            link:"https://https://twitter.com/ChrisKMin1",
            icon: <FaTwitter />,
        },
        {
            id : 2,
            link:"https://www.linkedin.com/in/christopher-min/",
            icon: <FaLinkedin/>,
        },
        {
            id : 3,
            link:"https://github.com/chriskmin",
            icon: <FaGithub/>,
        },
    ];
  return  <section>
    <h2>Chris Min</h2>
    <h3>CS Student @ Boston University</h3>
    <p>
        Hello! Welcome to my website! I'm currently a junior at Boston University studying computer science with a minor in business administration. 
        I'm currently interested in AI/ML and embedded systems so I am working on a couple projects regarding these interests.
        As for hobbies, I like to play basketball or lift, and so you'll often find me in the gym!
    </p>
  </section>;
};

export default Me
