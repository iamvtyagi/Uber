import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CaptainDetails } from '../components/CaptainDetails'
import RidePopUp from '../components/RidePopUp'
import ConfirmRidePopUp from '../components/ConfirmRidePopUp'
import gsap from 'gsap'


const CaptainHome = () => {

const [ridePopUpPanel, setridePopUpPanel] = useState(true);
const [confirmedRideopen, setconfirmedRideopen] = useState(false);

const ridePopUpPanelRef = useRef(null);
const confirmedRideopenRef = useRef(null);





useEffect(() => {
  if (ridePopUpPanel) {
    gsap.to(ridePopUpPanelRef.current, {
      transform: 'translateY(0)',
      duration: 0.5,
      ease: 'easeInOut',
    });
  } else {
    gsap.to(ridePopUpPanelRef.current, {
      transform: 'translateY(100%)',
      duration: 0.5,
      ease: 'easeInOut',
    });
  }
}, [ridePopUpPanel]);


useEffect(() => {
  if (confirmedRideopen) {
    gsap.to(confirmedRideopenRef.current, {
      transform: 'translateY(0)',
      duration: 0.5,
      ease: 'easeInOut',
    });
  } else {
    gsap.to(confirmedRideopenRef.current, {
      transform: 'translateY(100%)',
      duration: 0.5,
      ease: 'easeInOut',
    });
  }
}, [confirmedRideopen]);



  return (
    <div className='h-screen w-screen'>
      <div className='fixed p-6 top-0 flex items-center justify-between w-screen'>
        <img className='w-16' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
        <Link to={'/home'} className=' h-10 w-10 bg-white flex items-center justify-center rounded-full'>
          <i className="ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className='h-3/5'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>

      <div className='h-2/5 '>


      {/* part 2 */}

     <CaptainDetails/>

     {/* part 2 */}

      <div ref={ridePopUpPanelRef} className='fixed w-full z-10 bottom-0 px-3 py-10 translate-y-full  bg-white'>
          <RidePopUp setridePopUpPanel={setridePopUpPanel}  setconfirmedRideopen={setconfirmedRideopen}/>
      </div>

      <div ref={confirmedRideopenRef} className='fixed w-full h-screen z-10 bottom-0 px-3 py-10    bg-white'>
          <ConfirmRidePopUp setridePopUpPanel={setridePopUpPanel} setconfirmedRideopen={setconfirmedRideopen}/>
      </div>

      </div>
    </div>
  )
}

export default CaptainHome