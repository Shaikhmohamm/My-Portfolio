import React from 'react'

const Form = () => {
  return (
    <div className='flex flex-col justify-center gap-10 lg:flex-row w-full h-3/4 text-white p-4 mt-5'>
        {/* Left Section */}
        <div className='w-full lg:w-1/2 h-full p-8 rounded-lg'>
          <h1 className='text-3xl font-bold mb-2'>Let's discuss</h1>
          <h1 className='text-3xl font-semibold mb-6'>something cool together!</h1>
          <div className='mt-10'>
            <h1 className='mb-2 text-xl'>I'm interested in ..</h1>
            <div className='mt-5 flex flex-wrap gap-5'>
              <button className='font-serif p-3 bg-red-500 rounded-md hover:bg-red-800 transition-all transition-duration-300'>
                Javascript
              </button>
              <button className='font-serif p-3 bg-red-500 rounded-md hover:bg-red-800 transition-all transition-duration-300'>
                Front-end
              </button>
              <button className='font-serif p-3 bg-red-500 rounded-md hover:bg-red-800 transition-all transition-duration-300'>
                Back-end
              </button>
              <button className='font-serif p-3 bg-red-500 rounded-md hover:bg-red-800 transition-all transition-duration-300'>
                Landing page
              </button>
              <button className='font-serif p-3 bg-red-500 rounded-md hover:bg-red-800 transition-all transition-duration-300'>
                Database basics
              </button>
              <button className='font-serif p-3 bg-red-500 rounded-md hover:bg-red-800 transition-all transition-duration-300'>
                Others
              </button>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className='w-full lg:w-1/4 h-3/4 bg-white p-8 rounded-lg shadow-lg flex flex-col justify-center'>
          <h2 className='text-3xl font-bold text-center text-gray-800 mb-3'>Contact Me</h2>
          <form className='space-y-6'>
            <div>
              <label htmlFor='name' className='sr-only'>Your Name</label>
              <input
                id='name'
                name='name'
                type='text'
                required
                className='w-full p-2 border h-8 border-gray-300 rounded-lg'
                placeholder='Your Name'
              />
            </div>
            <div>
              <label htmlFor='email' className='sr-only'>Your Email</label>
              <input
                id='email'
                name='email'
                type='email'
                required
                className='w-full p-2 h-8 border border-gray-300 rounded-lg'
                placeholder='Your Email'
              />
            </div>
            <div>
              <label htmlFor='message' className='sr-only'>Your Message</label>
              <textarea
                id='message'
                name='message'
                rows='2'
                required
                className='w-full p-2 border border-gray-300 rounded-lg'
                placeholder='Your Message'
              ></textarea>
            </div>
            <div>
              <button
                type='submit'
                className='w-full p-3 bg-red-500 text-white rounded-lg font-bold hover:bg-red-700 transition duration-300'
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
  )
}

export default Form