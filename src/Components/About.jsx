import React from 'react'
import img1 from '../assets/img.webp'

function About() {
  return (
    <div className='about bg-primary-subtle z-index-100'>
      <h1 className='text-center bg-primary-subtle p-2 text-primary-emphasis'>
        ABOUT ME
      </h1>
      <div className='container-fluid text-center my-4 '>
        <div className='row'>
          <div className='col-6'>
            <img width='500' height='550' className='p-3' src={img1} alt="" />
          </div>
          <div className='col-6 '>
            <div className='align-items-start fs-5 mr-5 mt-3 p-3 text-primary-emphasis fw-semibold'>
                <p>
                I'm a Web developer with expertise of HTML, CSS, Javascript their library and frameworks. I have understanding of Bootstap, tailwind, Jquery and React.js
                </p>
                <p>
                  Currently learning Next.js and gaining in depth knowledge of Database.
                </p>
                <p>
                Im a hardworking programmer who loves to create new ideas and implement same in tech world. Currently living in Mumbai. I love learning new technologies.
                </p>
                <p>
                  Having in depth understanding of Front end development and gaining knowledge of Back end too.
                </p>
                <div className='d-flex justify-content-center p-4 '> 
                <div>
                  <a href="https://in.linkedin.com/">
                    <button className='btn btn-outline-primary'>
                      Linkdin
                    </button>
                  </a>
                </div> 
                <div className='mx-2'>
                  <a href="">
                    <button className='btn btn-outline-primary'>
                      Instagram
                    </button>
                  </a>
                </div> 
                <div>
                  <a href="">
                    <button className='btn btn-outline-primary'>
                      Gmail
                    </button>
                  </a>
                </div>
                <div className='mx-2'>
                  <a href="">
                    <button className='btn btn-outline-primary'>
                      Github
                    </button>
                  </a>
                </div> 
                </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default About