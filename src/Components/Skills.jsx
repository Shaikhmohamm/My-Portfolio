import React from 'react';
import { FaHtml5, FaBootstrap, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { DiJqueryLogo } from "react-icons/di";
import { SiRedux, SiNextdotjs, SiNodedotjs } from "react-icons/si";
import logo from "../assets/icons8-express-js-50.png";
import { GrMysql } from "react-icons/gr";
import { DiMongodb } from "react-icons/di";
import render from '../assets/render.jpg';
import vercel from '../assets/vercel.svg';
import netlify from '../assets/netlify.png';
import heroku from '../assets/heroku.png';

function Skills() {
  return (
    <div className='font-serif w-full min-h-screen bg-gray-900 text-white p-8'>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-2 mt-5 px-5 justify-items-center'>
        {/* Front-end */}
        <div className='rounded-lg p-6'>
          <h2 className='text-2xl font-semibold mb-4'>Front-end</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center'>
              <FaHtml5 className='text-4xl mr-2' />
              <p>HTML</p>
            </div>
            <div className='flex items-center'>
              <FaBootstrap className='text-4xl mr-2' />
              <p>Bootstrap</p>
            </div>
            <div className='flex items-center'>
              <RiTailwindCssFill className='text-4xl mr-2' />
              <p>Tailwind CSS</p>
            </div>
            <div className='flex items-center'>
              <DiJqueryLogo className='text-4xl mr-2' />
              <p>jQuery</p>
            </div>
            <div className='flex items-center'>
              <FaReact className='text-4xl mr-2' />
              <p>React.js</p>
            </div>
            <div className='flex items-center'>
              <SiRedux className='text-4xl mr-2' />
              <p>Redux</p>
            </div>
            <div className='flex items-center'>
              <SiNextdotjs className='text-4xl mr-2' />
              <p>Next.js</p>
            </div>
          </div>
        </div>

        {/* Back-end */}
        <div className='rounded-lg p-6'>
          <h2 className='text-2xl font-semibold mb-4'>Back-end</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center'>
              <SiNodedotjs className='text-4xl mr-2' />
              <p>Node.js</p>
            </div>
            <div className='flex items-center'>
              <img src={logo} alt="express.js" className='bg-white w-10 h-10 rounded-full mr-2' />
              <p>Express.js</p>
            </div>
          </div>
        </div>

        {/* Others (Database & Deployment) */}
        <div className='rounded-lg p-6'>
          <h2 className='text-2xl font-semibold mb-4'>Others</h2>
          <div className='flex flex-col gap-4'>
            <div className='flex items-center'>
              <GrMysql className='text-4xl mr-2 rounded-md' />
              <p>MySQL</p>
            </div>
            <div className='flex items-center'>
              <DiMongodb className='text-4xl bg-white text-green-500 rounded-full mr-2' />
              <p>MongoDB</p>
            </div>
            <div className='flex items-center'>
              <img src={render} alt="" className='w-10 h-10 rounded-full mr-2' />
              <p>Render</p>
            </div>
            <div className='flex items-center'>
              <img src={vercel} alt="" className='bg-white w-10 h-10 rounded-full mr-2' />
              <p>Vercel</p>
            </div>
            <div className='flex items-center'>
              <img src={netlify} alt="" className='w-10 h-10 rounded-full mr-2' />
              <p>Netlify</p>
            </div>
            <div className='flex items-center'>
              <img src={heroku} alt="" className='w-12 h-16 rounded-md mr-2' />
              <p>Heroku</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills;
