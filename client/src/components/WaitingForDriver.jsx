import React from 'react'

const WaitingForDriver = (props) => {
  return (
    <div >
    <h5 className='p-3 pb-14 text-center absolute top-0 w-full' onClick={() => props.setwaitingForDriver(false)}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>

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
      <i className= "text-lg ri-map-pin-line"></i>
          <div >
           <h3 className='text-lg font-semibold'>576/11-A</h3>
           <p className='text-sm font-medium'>NEW DELHI</p>
          </div>
      </div>
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
 </div>
  )
}

export default WaitingForDriver