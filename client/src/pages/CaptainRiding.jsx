import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'
import gsap from 'gsap'

const CaptainRiding = () => {

const [finishRidePanel, setfinishRidePanel] = useState(false)

const finishRidePanelRef = useRef(null)



useEffect(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
        ease: 'easeInOut',
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'easeInOut',
      });
    }
  }, [finishRidePanel]);



  return (
    <div className='h-screen w-screen'>

    <h5 className='p-3 pb-14 text-center absolute top-0 w-full' onClick={() => props.setconfirmedRideopen(false)}><i className="text-3xl text-gray-300 ri-arrow-down-wide-line"></i></h5>
    <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>

      <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <Link to={'/home'} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
        <i className="ri-logout-box-r-line"></i>
      </Link>
    </div>
    <div className='h-4/5'>
      <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
    </div>

    <div className='h-1/5 bg-yellow-400 p-6 flex items-center relative justify-between'  onClick={() => setfinishRidePanel(!finishRidePanel)}  >
       <h5 className='p-3 pb-14  text-center font-bold text-black absolute top-0 w-[95%]' ><i class="ri-arrow-up-wide-fill"></i></h5>
         <h4 className='text-xl font-semibold'>4 KM away</h4>
         <button className='bg-green-500  text-white py-2 px-4 rounded'>Complete ride</button>

    </div>

    <div ref={finishRidePanelRef} className='fixed w-full h-screen z-10 bottom-0 px-3 py-10    bg-white'>
          <FinishRide setfinishRidePanel={setfinishRidePanel} />
      </div>


  </div>
  )
}

export default CaptainRiding