import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className='bg-cover bg-[url(https://plus.unsplash.com/premium_photo-1682834983265-27a10ba5232c?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8  flex justify-between flex-col w-full bg-red-400'>
        <img className='w-16  ml-8'  src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
         <div className='bg-white py-4 pb-7 px-4'>
          <h2 className='text-3xl font-bold'>Get Started With Uber</h2>
          <Link to={'/login'} className='w-full flex items-center justify-center bg-black text-white py-3 rounded mt-5'>Continue</Link>
         </div>
      </div>
    </div>
  )
}

export default Home
