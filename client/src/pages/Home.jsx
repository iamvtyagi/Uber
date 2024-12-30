import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import 'remixicon/fonts/remixicon.css';
import LocationPanel from '../components/LocationPanel';

function Home() {
  const [pickup, setpickup] = useState('');
  const [destination, setdestination] = useState('');
  const [panelOpen, setpanelOpen] = useState(false);
  const panelRef = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
  };

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
          <LocationPanel />
        </div>
      </div>

      <div className='fixed w-full z-10 bottom-0 px-3 py-8  bg-white'>
        <h3 className='text-2xl font-semibold mb-5'>Choose a Ride</h3>
        <div className='flex w-full border-2 active:border-black rounded-xl mb-2  p-3  justify-between items-center '>
          <img className='h-14' src="https://www.pngall.com/wp-content/uploads/2016/07/Car-Free-Download-PNG.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='text-lg font-medium'>UberGo <span><i className="ri-user-3-fill" ></i>4</span></h4>
            <h5 className='text-sm font-medium'>2 mins away</h5>
            <p className='text-sm font-normal '>Affordable compact rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$10.22</h2>
        </div>

        <div className='flex w-full border-2 active:border-black rounded-xl mb-2  p-3  justify-between items-center '>
          <img className='h-14' src="https://www.pngall.com/wp-content/uploads/2/Sports-Bike-PNG-File.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='text-lg font-medium'>Moto<span><i className="ri-user-3-fill" ></i>1</span></h4>
            <h5 className='text-sm font-medium'>3 mins away</h5>
            <p className='text-sm font-normal '>Affordable moto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$88.22</h2>
        </div>

        <div className='flex w-full border-2 active:border-black rounded-xl mb-2  p-3  justify-between items-center '>
          <img className='h-14' src="https://imgs.search.brave.com/QYJaS_SSM1C11jlhl3GdwIR8Av-QIK9b-G-onHjv4YU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9wbHVz/cG5nLmNvbS9pbWct/cG5nL2F1dG8tcmlj/a3NoYXctcG5nLWJh/amFqLXJlLWF1dG8t/cmlja3NoYXctY29t/cGFjdC10aHJlZS13/aGVlbGVyLWtleS1m/ZWF0dXJlcy00NDQu/cG5n" alt="" />
          <div className=' w-1/2'>
            <h4 className='text-lg font-medium'>UberAuto <span><i className="ri-user-3-fill" ></i>3</span></h4>
            <h5 className='text-sm font-medium'>10 mins away</h5>
            <p className='text-sm font-normal '>Affordable Auto rides</p>
          </div>
          <h2 className='text-lg font-semibold'>$100.22</h2>
        </div>

      </div>
    </div>
  );
}

export default Home;