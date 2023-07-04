import React from 'react'
import Section from './common/Section'

const Contact = () => {
    return (
      <Section title="Contact Me!" subtitle="Feel free to reach out to me! Would love to hear from all of you!">
        <div className="p-2 text-left w-full flex items-center justify-center">
          <form action="https://getform.io/f/753c8cb0-8524-4693-ae87-0ebded12bf5c" method="POST">
            <div className="w-full">
              <div className="flex flex-col">
                <label className="capitalize text-sm py-2 font-extralight">Name</label>
                <input
                  type="text"
                  name="Name"
                  className="border-2 rounded-lg p-4 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                ></input>
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">Email</label>
                <input
                  type="text"
                  name="Email"
                  className="border-2 rounded-lg p-6 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white"
                ></input>
              </div>
              <div className="flex flex-col my-2">
                <label className="capitalize text-sm py-2 font-extralight">Message</label>
                <textarea
                  name="Message"
                  rows="10"
                  className="border-2 rounded-lg p-6 flex focus:outline-none border-gray-400 dark:bg-gray-900 dark:text-white resize-none"
                ></textarea>
                
              </div>
            </div>
            <div className="flex items-center justify-center">
                <button className="my-8 bg-black text-white px-6 py-3 font-bold uppercase rounded-md tracking-wider cursor-pointer hover:scale-105 duration-200">
                    Submit 
                </button>
            </div>
          </form>
        </div>
      </Section>
    );
  };


export default Contact
