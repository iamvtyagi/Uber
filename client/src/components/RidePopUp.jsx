import React from 'react'

const RidePopUp = (props) => {
    return (
        <div >
        <h5 className='p-3 pb-14 text-center absolute top-0 w-full' onClick={() => props.setconfirmedRideopen(false)}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>New Ride Available!</h3>

      <div className='flex items-center justify-between p-3 bg-yellow-300 rounded-xl '>
        <div className='flex items-center gap-3 '>
            <img className='h-16 w-16 rounded-full object-cover' src="https://imgs.search.brave.com/JSCYVNrUSKZ1erENj6dzqo1CMwNexoK31BzGB0_Mh5k/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9w/b3J0cmFpdC1naXJs/LXBpbmstc2hvcnQt/d2lnXzEyNTgtMjM4/NDguanBnP3NlbXQ9/YWlzX2h5YnJpZA" alt="" />
            <h2 className='text-xl font-medium'>Suchi Tyagi</h2>
        </div>
        <h5 className='text-lg font-semibold'>2.5 KM</h5>
      </div>

       <div className='flex gap-3 w-full rounded-xl mb-2 p-3 justify-between flex-col items-center'>
       {/* <img className='h-20 ' src="https://www.pngall.com/wp-content/uploads/2016/07/Car-Free-Download-PNG.png" alt="" />    */}
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
       <button onClick={()=> {
        props.setconfirmedRideopen(true)
        props.setridePopUpPanel(false)

       }} className='bg-green-500 text-white py-2 px-4 w-full rounded'>Accept</button>

     <button onClick={()=> {
        props.setridePopUpPanel(false)
       }} className='bg-gray-300  text-gray-700 py-2 px-4 w-full rounded'>Ignore</button>
       </div>
     </div>
    )
}

export default RidePopUp