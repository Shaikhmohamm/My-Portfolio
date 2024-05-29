import React, { useState } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaEnvelope } from 'react-icons/fa';

const Contacts = () => {
  const [selectedTopic, setSelectedTopic] = useState('');

  const handleTopicClick = (topic) => {
    setSelectedTopic(topic);
  };

  return (
    <div className="flex flex-col justify-center items-center p-4 space-y-8 min-h-screen bg-amber-100">
      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-between items-center w-full max-w-screen-lg text-indigo-950 p-4 rounded-lg shadow-lg space-y-8 lg:space-y-0 lg:space-x-8">
        
        {/* Left Section */}
        <div className="w-full lg:w-1/2 h-full p-8 rounded-lg">
          <h1 className="text-4xl font-bold mb-2">Let's discuss</h1>
          <h1 className="text-2xl font-bold mb-6">something cool together!</h1>
          <h2 className="mb-2 text-xl font-bold">I'm interested in ..</h2>
          <div className="mt-5 flex flex-wrap gap-3">
            {['Javascript', 'Front-end', 'Back-end', 'Landing page', 'Database basics', 'Others'].map((topic) => (
              <button
                key={topic}
                onClick={() => handleTopicClick(topic)}
                className={`font-serif px-3 py-1 font-medium text-md rounded-md transition-all duration-300 border-2 border-indigo-950 ${
                  selectedTopic === topic
                    ? 'bg-indigo-950 text-white'
                    : ''
                }`}
              >
                {topic}
              </button>
            ))}
          </div>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-2/5 bg-amber-100 text-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-center mb-4">Contact Me</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="sr-only">Your Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="sr-only">Your Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="message" className="sr-only">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="3"
                required
                className="w-full p-2 border border-gray-300 rounded-lg"
                placeholder="Your Message"
              ></textarea>
            </div>
            <div>
              <button
                type="submit"
                className="w-full p-2 text-white rounded-lg font-bold bg-indigo-950 transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Media Bar */}
      <div className="flex justify-center w-full">
        <div className="bg-white w-full md:w-3/4 lg:w-2/3 xl:w-1/2 rounded-md flex flex-wrap gap-4 justify-center items-center p-4 shadow-lg">
          <button
            className="flex items-center rounded-lg p-2 border border-red-500 hover:bg-red-500 hover:text-white transition-all duration-300"
            onClick={() => window.location.href='mailto:zaids808@gmail.com'}
          >
            <FaEnvelope className="mr-2" /> Email Me
          </button>
          <button
            className="flex items-center rounded-lg p-2 border border-blue-700 hover:bg-blue-700 hover:text-white transition-all duration-300"
            onClick={() => window.open('https://www.linkedin.com/in/zaid-shaikh-37b1b6171/', '_blank')}
          >
            <FaLinkedin className="mr-2" /> LinkedIn
          </button>
          <button
            className="flex items-center rounded-lg p-2 border border-gray-800 hover:bg-gray-800 hover:text-white transition-all duration-300"
            onClick={() => window.open('https://github.com/Shaikhmohamm', '_blank')}
          >
            <FaGithub className="mr-2" /> GitHub
          </button>
          <button
            className="flex items-center rounded-lg p-2 border border-blue-500 hover:bg-blue-500 hover:text-white transition-all duration-300"
            onClick={() => window.open('https://twitter.com/your-profile', '_blank')}
          >
            <FaTwitter className="mr-2" /> Twitter
          </button>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
