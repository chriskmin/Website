import React from 'react';
import {FaTwitter, FaLinkedin, FaGithub, FaFileAlt, FaArrowDown} from "react-icons/fa";
import img from "../Assets/img.jpg";

const Me = () => {
    const SOCIAL = [
        {
            id : 1,
            link:"https://twitter.com/ChrisKMin1",
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
        {
            id : 4,
            link:"/Chris Min's Resume.pdf",
            icon: <FaFileAlt/>
        },
    ];

    window.addEventListener('scroll', function () {
        const downArrow = document.querySelector('.down-arrow');

        if (this.scrollY >= 90) downArrow.classList.add("hide-down-arrow");
        else downArrow.classList.remove("hide-down-arrow")

    })

  return  <section className="min-h-screen flex flex-col justify-start items-center p-5 text-center">
    <h2 className="text-5xl text-blue-500 uppercase font-bold">Chris Min</h2>
    <h3 className="py-3 text-2xl">CS Student @ Boston University</h3>
    <p className="max-w-xl font-light text-gray-600">
        Hello! Welcome to my website! I'm currently a junior at Boston University studying computer science with a minor in business administration. 
        I'm currently interested in AI/ML and embedded systems so I am working on a couple projects regarding these interests.
        As for hobbies, I like to play basketball or lift, and so you'll often find me in the gym!

    </p>

    <div className="py-4"></div>

    <div>
        <img 
        src={img} 
        alt="Me" 
        className="w-60 h-60 md:w-72 md:h-72 object-cover rounded-xl" 
        />
    </div>

    <div className="flex justify-evenly py-3 lg:py-16 text-4xl w-full md:w-1/3 ">
        {SOCIAL.map(({id, link, icon}) => (
            <a 
            href={link} 
            key={id} 
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer duration-300 hover:text-blue-600"
            >
                {icon}
            </a>
        ))}
    </div>  


    <div className="mt-10 down-arrow"> 
        <FaArrowDown className="text-gray-400 animate-bounce text-2xl"/>

    </div>
  </section>;
};

export default Me
