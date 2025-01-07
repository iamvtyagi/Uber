import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationPanel from '../components/LocationPanel';
import VehinclePanel from '../components/VehinclePanel';
import ConfirmedRide from '../components/ConfirmedRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitingForDriver from '../components/WaitingForDriver';

function Home() {
  const [pickup, setpickup] = useState('');
  const [destination, setdestination] = useState('');
  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const [vehicalPanelopen, setvehicalPanelopen] = useState(false);
  const [confirmedRideopen, setconfirmedRideopen] = useState(false);
  const vehicalPanelRef = useRef(null);
  const confirmedRideRef = useRef(null);
  const [vehicleFound, setvehicleFound] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (vehicalPanelopen) {
      gsap.to(vehicalPanelRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
        ease: 'easeInOut',
      });
    } else {
      gsap.to(vehicalPanelRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'easeInOut',
      });
    }
  }, [vehicalPanelopen]);


  useEffect(() => {
    if (confirmedRideopen) {
      gsap.to(confirmedRideRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
        ease: 'easeInOut',
      });
    } else {
      gsap.to(confirmedRideRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'easeInOut',
      });
    }
  }, [confirmedRideopen]);


  useEffect(() => {
    if (vehicleFound) {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(0)',
        duration: 0.5,
        ease: 'easeInOut',
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: 'translateY(100%)',
        duration: 0.5,
        ease: 'easeInOut',
      });
    }
  }, [vehicleFound]);


  useEffect(() => {
    gsap.to(panelRef.current, {
      height: panelOpen ? '70%' : 0,
      opacity: panelOpen ? '1' : '0',
      padding: panelOpen ? '1.5rem' : '0',
      duration: 0.5,
      ease: 'easeInOut',
    });

    gsap.to('.hello1', {
      opacity: panelOpen ? 0 : 1,
      duration: 0.5,
    });

    gsap.to('.hello2', {
      opacity: panelOpen ? 1 : 0,
      duration: 0.5,
    });
  }, [panelOpen]);

  return (
    <div className='relative h-screen overflow-hidden'>
      <img className='w-16 absolute top-5 left-5' src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png" alt="" />
      <div className='h-screen w-full'>
        <img className='h-full w-full object-cover' src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className='h-screen flex flex-col justify-end absolute w-full top-0'>
        <div ref={panelRef} className='h-[30%] p-6 bg-white relative'>
          <h5 onClick={() => setpanelOpen(!panelOpen)} className='absolute text-2xl right-6 top-5'>
            <i className="hello1 ri-arrow-up-s-line"></i>
            <i className="hello2 ri-arrow-down-s-line"></i>
          </h5>
          <h4 className='text-2xl font-semibold'>Find a Trip</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 top-[37%] left-[10%] bg-gray-800 rounded-full"></div>
            <input onClick={() => setpanelOpen(true)} value={pickup} onChange={(e) => setpickup(e.target.value)} className='bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-5' type="text" placeholder='Add a pickup location' />
            <input onClick={() => setpanelOpen(true)} value={destination} onChange={(e) => setdestination(e.target.value)} className='bg-[#eeeeee] px-12 py-2 text-lg rounded-lg w-full mt-3' type="text" placeholder='Add a dropoff location' />
          </form>
        </div>
        <div ref={panelRef} className='w-full bg-white h-0'>
          <LocationPanel panelOpen={panelOpen} setpanelOpen={setpanelOpen} vehicalPanelopen={vehicalPanelopen} setvehicalPanelopen={setvehicalPanelopen} />
        </div>
      </div>

      <div ref={vehicalPanelRef} className='fixed w-full z-10 bottom-0 px-3 py-10  translate-y-full bg-white'>
           
           <VehinclePanel confirmedRideopen={confirmedRideopen} setconfirmedRideopen={setconfirmedRideopen} vehicalPanelopen={vehicalPanelopen} setvehicalPanelopen={setvehicalPanelopen} />

      </div>



      <div ref={confirmedRideRef} className='fixed w-full z-10 bottom-0 px-3 py-10  translate-y-full bg-white'>
           <ConfirmedRide confirmedRideopen={confirmedRideopen} setconfirmedRideopen={setconfirmedRideopen} vehicleFound={vehicleFound} setvehicleFound={setvehicleFound}  />
      </div>

      <div  ref={vehicleFoundRef} className='fixed w-full z-10 bottom-0 px-3 py-10  translate-y-full bg-white'>
           <LookingForDriver vehicleFound={vehicleFound} setvehicleFound={setvehicleFound} />
      </div>

      <div   className='fixed w-full z-10 bottom-0 px-3 py-10  translate-y-full bg-white'>
           <WaitingForDriver/>
      </div>
      
    </div>
  );
}

export default Home;