import React from 'react'

const VehinclePanel = (props) => {
  return (
    <div>
         <h5 className='p-3 pb-14 text-center absolute top-0 w-full' onClick={() => props.setvehicalPanelopen(false)}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Ride</h3>
        <div onClick={() => props.setconfirmedRideopen(true)} className='flex w-full border-2 active:border-black rounded-xl mb-2 p-3 justify-between items-center'>
          <img className='h-14' src="https://www.pngall.com/wp-content/uploads/2016/07/Car-Free-Download-PNG.png" alt="" />
          <div className='w-1/2'>
            <h4 className='text-lg font-medium'>UberGo <span><i className="ri-user-3-fill"></i>4</span></h4>
            <h5 className='text-sm font-medium'>2 mins away</h5>
            <p className='text-sm font-normal'>Affordable compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$10.22</h2>
        </div>

        <div onClick={() => props.setconfirmedRideopen(true)} className='flex w-full border-2 active:border-black rounded-xl mb-2 p-3 justify-between items-center'>
          <img className='h-14' src="https://www.pngall.com/wp-content/uploads/2/Sports-Bike-PNG-File.png" alt="" />
          <div className='w-1/2'>
            <h4 className='text-lg font-medium'>Moto<span><i className="ri-user-3-fill"></i>1</span></h4>
            <h5 className='text-sm font-medium'>3 mins away</h5>
            <p className='text-sm font-normal'>Affordable moto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$88.22</h2>
        </div>

        <div onClick={() => props.setconfirmedRideopen(true)}  className='flex w-full border-2 active:border-black rounded-xl mb-2 p-3 justify-between items-center'>
          <img className='h-14' src="https://imgs.search.brave.com/QYJaS_SSM1C11jlhl3GdwIR8Av-QIK9b-G-onHjv4YU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2F1dG8tcmlj/a3NoYXctcG5nLWJh/amFqLXJlLWF1dG8t/cmlja3NoYXctY29t/cGFjdC10aHJlZS13/aGVlbGVyLWtleS1m/ZWF0dXJlcy00NDQu/cG5n" alt="" />
          <div className='w-1/2'>
            <h4 className='text-lg font-medium'>UberAuto <span><i className="ri-user-3-fill"></i>3</span></h4>
            <h5 className='text-sm font-medium'>10 mins away</h5>
            <p className='text-sm font-normal'>Affordable Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$100.22</h2>
        </div>
    </div>
  )
}

export default VehinclePanel