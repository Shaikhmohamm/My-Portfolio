import React from 'react';
import './Home.css'
import Carousel1 from './Carousel1';
function Home() {
  
  return (

    <div className='m-0'>
      <Carousel1/>
      <div className='child'>
          <h1>
            <div className='text-center mb-2'>
              Hi i'm
            </div>
            <div className='text-center'>
              <strong className='text-center'>
                 Zaid Shaikh
              </strong> 
              <p className='animate fw-semibold fs-5 my-2 '>Web developer</p>  
              <p></p>          
              </div>
          </h1>
      </div>
    </div>
  );
}

export default Home;
