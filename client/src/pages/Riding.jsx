import React from 'react'
import { Link } from 'react-router-dom'

const Riding = () => {
  return (
    <div className='h-screen'>
        <Link to={'/home'} className='right-2  top-2 fixed h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className=" text-lg font-bold ri-home-4-line"></i>
        </Link>
        <div className='h-1/2'> 
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
        </div>

        <div className='h-1/2 p-4'>
        <div className='flex items-center justify-between'>
    <img className='h-12 border-3 ' src="https://imgs.search.brave.com/48wPD18LCP3Dp1gLGWWdWQsZIhnMVVmSTwoPxMPvhUw/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by92aXJhdC1rb2hs/aV8xMjAyMTg4LTE4/Ni5qcGc_c2VtdD1h/aXNfaHlicmlk" alt="" />
      <div className='text-right'>
        <h2 className='text-lg font-semibold'>Vansh Tyagi</h2>
        <h4 className='text-xl font-semibold -mt-1 -mb-1'>up 11k 3346</h4>
        <p className='text-md test-gray-600'>yamaha</p>
      </div>
    </div>
    
   <div className='flex gap-3 w-full rounded-xl mb-2 p-3 justify-between flex-col items-center'>
   <div className='w-full'>
    
      <div className='flex items-center gap-5 p-3 border-b-2'>
      <i className="text-lg ri-map-pin-2-line"></i>
          <div >
           <h3 className='text-lg font-semibold'>576/11-A</h3>
           <p className='text-sm font-medium'>NEW DELHI</p>
          </div>            
      </div>
      <div className='flex items-center gap-5 p-3 '>
      <i className="text-lg ri-money-dollar-box-line"></i>
          <div >
           <h3 className='text-lg font-semibold'>$231.6</h3>
           <p className='text-sm font-medium'>Cash Cash</p>
          </div>            
      </div>
      <div></div>
   </div>
   </div>
            <button className='bg-green-500 text-white py-2 px-4 w-full rounded'>make a payment</button>
        </div>
    </div>
  )
}

export default Riding