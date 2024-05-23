import React from 'react'

function Contacts() {
  return (
    <div className=''>
      <footer className='p-3 bg-dark'>
        <div className='  d-flex justify-content-center '>
        <a href="">
          <button className='btn btn-outline-warning mx-2'>
            Email me
          </button>
        </a>
        <a href="">
          <button className='btn btn-outline-primary'>
            Linkdin
          </button>
        </a>
        <a href="">
          <button className='btn btn-outline-danger  mx-2'>
            GitHub
          </button>
        </a>
        <a href="">
          <button className='btn btn-outline-success'>
            Twitter
          </button>
        </a>
        </div>
        
      </footer>
    </div>
  )
}

export default Contacts