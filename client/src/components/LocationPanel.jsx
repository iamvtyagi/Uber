import React from 'react'

const LocationPanel = () => {
  return (
    <div className="location-panel flex flex-col gap-4 p-4  absolute top-[200px] text-lg font-[550]">
      <div className="location active:border-black px-4 py-2 rounded-md  border-2 border-white active:border-black">
        <i className="ri-map-pin-line"></i> Location X
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iste!
      </div>
      <div className="location active:border-black px-4 py-2 rounded-md  border-2 border-white active:border-black">
        <i className="ri-map-pin-line"></i> Location  Y Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at debitis.
      </div>
      <div className="location active:border-black px-4 py-2 rounded-md  border-2 border-white active:border-black">
        <i className="ri-map-pin-line"></i> Location Z Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facere assumenda in.
      </div>
    </div>
  )
}

export default LocationPanel