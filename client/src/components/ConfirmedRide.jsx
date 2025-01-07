import React from 'react'

const ConfirmedRide = (props) => {
  return (
    <div >
         <h5 className='p-3 pb-14 text-center absolute top-0 w-full' onClick={() => props.setconfirmedRideopen(false)}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
         <h3 className='text-2xl font-semibold mb-5'>Confirm your Ride</h3>
        <div className='flex gap-3 w-full rounded-xl mb-2 p-3 justify-between flex-col items-center'>
        <img className='h-20 ' src="https://www.pngall.com/wp-content/uploads/2016/07/Car-Free-Download-PNG.png" alt="" />
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
        <button onClick={()=> props.setvehicleFound(true)} className='bg-green-500 text-white py-2 px-4 w-full rounded'>Confirm</button>
        </div>
      </div>
  )
}

export default ConfirmedRide