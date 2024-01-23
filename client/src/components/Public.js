import React from 'react'
import { Link } from 'react-router-dom'

const Public = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="max-w-lg p-6 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
        <div>
          <h1 className='text-4xl text-center font-semibold mt-5'>Welcome to <span className="nowrap">D. D. Repairs!</span></h1>
        </div>
        <p 
          className="mt-5 mb-3 font-normal
                   text-gray-700 
                    dark:text-gray-400"
        >
          Welcome to our internal repair system! This system streamlines repairs for our oders which will maneged. Efficiently manage workflows,
           track inventory, and repair orders. Thank you for being a vital part of our repair shop team!
        </p>
        <main className='mb-2'>
            <address>
              D. D. Repairs <br />
              No 310/2, <br />
              Puttalam Road, <br />
              Kurunegala. <br />
              <a href="tel:+94375874849">(037) 587-4849</a>
          </address>
        </main>
        <hr></hr>
        <p className='m-5 text-red-700 font-semibold'>Note: This System Only for Our Current Employees!</p>
        <div  
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center
                       text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none 
                       focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 mt-5"
        >
            <Link to="/login">Employee Login</Link>
            <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </div>
    </div>
  </div>
  )
}

export default Public