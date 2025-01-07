import React from 'react'

const LocationPanel = (props) => {

 console.log(props)
  // sample array for locations
  const locations = ["Location X Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, iste!",
        "Location  Y Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, at debitis.",
        "Location Z Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facere assumenda in.",
        "Location Z Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa facere assumenda in."]
  return (
    <div className="location-panel flex flex-col gap-4 px-4 py2  absolute top-[200px] text-lg font-[550]"> 
     {
        locations.map(function(location,index){

          return   <div key={index} onClick={() => {
            props.setvehicalPanelopen(true)
            props.setpanelOpen(false)
            }} className="location active:border-black  rounded-md  border-2 border-white active:border-black">
          <i className="ri-map-pin-line"></i> {location}
        </div>
        })
     }

    {/* <div className="location-panel flex flex-col gap-4 p-4  absolute top-[200px] text-lg font-[550]">
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
    </div> */}
    </div>
  )
}

export default LocationPanel