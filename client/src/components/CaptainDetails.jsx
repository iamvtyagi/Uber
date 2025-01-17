import React from 'react'

export const CaptainDetails = () => {
    return (
        <div>
            <div className='flex p-7 items-center  justify-between'>

                <div>
                    <img className='w-12 h-12 object-cover rounded-full' src="https://upload.wikimedia.org/wikipedia/commons/1/1e/Prime_Minister_Of_Bharat_Shri_Narendra_Damodardas_Modi_with_Shri_Rohit_Gurunath_Sharma_%28Cropped%29.jpg" alt="" />
                    <h4 className='text-lg font-semibold mt-1'>Tushar Tyagi</h4>
                </div>
                <div>
                    <h4 className='text-2xl font-semibold'>$44.20</h4>
                    <p className='text-gray-500'>Earned</p>
                </div>
            </div>

            <div>
                <div className='flex p-6   bg-gray-50 rounded-full items-center justify-between'>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-extralight ri-time-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>hours online</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-extralight ri-speed-up-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>hours online</p>
                    </div>
                    <div className='text-center'>
                        <i className="text-3xl mb-2 font-extralight ri-sticky-note-add-line"></i>
                        <h5 className='text-lg font-medium'>10.2</h5>
                        <p className='text-sm text-gray-600'>hours online</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
