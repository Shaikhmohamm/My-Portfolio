import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-900 min-h-screen w-screen flex flex-col items-center">
      <div className="max-w-4xl mx-auto px-4 py-4">
        <h1 className="text-4xl font-bold text-white mb-6 text-center">
          ABOUT ME
        </h1>
        <p className="text-lg text-white mb-8 text-center">
          Born and raised in Mumbai, India, I'm a versatile web developer proficient in both front-end and back-end development. With a strong foundation in the MERN stack, I bring fresh perspectives, enthusiasm, and a pragmatic problem-solving approach to the tech industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="bg-black shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Frontend
            </h2>
            <p className="text-white">
              Front-end expertise includes React.js from basic to advanced levels, along with essential CSS frameworks like Bootstrap and Tailwind CSS. Proficient in key JavaScript concepts such as Redux and API fetching etc.
            </p>
          </div>
          <div className="bg-black shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Backend
            </h2>
            <p className="text-white">
              Back-end expertise includes Node.js and Express.js, enabling the development of robust and scalable server-side applications. Proficient in creating RESTful APIs, handling database interactions & implementing authentication.
            </p>
          </div>
          <div className="bg-black shadow-lg p-6 rounded-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold text-white mb-4">
              Database
            </h2>
            <p className="text-white">
              Proficient in database management with experience in both SQL and NoSQL databases. Skilled in MySQL for relational database design and complex querying, and in MongoDB for handling unstructured data and building scalable applications.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
