import React, { useState } from 'react';
import { FaPlayCircle, FaYoutube, FaBolt, FaGithub, FaLink } from 'react-icons/fa';
import flashcardImage from '../assets/flashcard.png'; // Replace with actual paths to your images
import youtubeImage from '../assets/youtubesubs.png';
import entertainmentImage from '../assets/Entertainment.png';

const projects = [
  {
    title: 'Flashcard Generator',
    description: 'A tool to create and manage flashcards for effective learning.',
    icon: <FaBolt className="text-4xl text-yellow-500" />,
    image: flashcardImage,
    link: 'https://flashcardgenerator1.netlify.app/',
    source: 'https://github.com/Shaikhmohamm/Capstone_FlashCard.git',
  },
  {
    title: 'YouTube Subscriber Tracker',
    description: 'Track your YouTube subscriber count in real-time.',
    icon: <FaYoutube className="text-4xl text-red-500" />,
    image: youtubeImage,
    link: 'https://capastone-get-youtube-subbscribers.onrender.com/',
    source: 'https://github.com/Shaikhmohamm/Capastone-Get-Youtube-Subbscribers.git',
  },
  {
    title: 'Entertainment App',
    description: 'An app to explore movies and TV series with personalized recommendations.',
    icon: <FaPlayCircle className="text-4xl text-green-500" />,
    image: entertainmentImage,
    link: 'https://full-stack-project-eosin.vercel.app/',
    source: 'https://github.com/Shaikhmohamm/Full_Stack_Project.git',
  },
];

const ProjectCard = ({ project }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md transform transition duration-300 hover:scale-105 relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex items-center justify-center mb-4">
        {project.icon}
      </div>
      <a href={project.link} target="_blank" rel="noopener noreferrer">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-40 object-fill rounded-lg mb-4"
        />
        <h2 className="text-2xl font-semibold text-gray-800 text-center">{project.title}</h2>
        <p className="text-gray-600 text-center mt-2">{project.description}</p>
      </a>
      {hovered && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-lg space-x-4">
          <a href={project.source} target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-4xl text-white" />
          </a>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            <FaLink className="text-4xl text-white" />
          </a>
        </div>
      )}
    </div>
  );
};

const Projects = () => {
  return (
    <div className="bg-gray-900 min-h-screen">
      <div className="max-w-6xl mx-auto py-6">
        <h1 className="text-4xl font-bold text-gray-100 mb-6 text-center">My Projects</h1>
        <h2 className="text-2xl text-gray-100 mb-8 text-center">Some things I've built so far...</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
