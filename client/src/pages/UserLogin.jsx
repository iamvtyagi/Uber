import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';
import { toast } from 'react-toastify'; // Ensure you have 'react-toastify' installed and properly configured

const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
   const userData = ({
      email: email,
      password: password
    });
    try {
      const res = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
      if (res.status === 200) {
        const data = res.data;
        setUser(data.user);
        localStorage.setItem('token', data.token);
        navigate('/home');
      }
    } catch (error) {
      toast.error('Login failed. Please check your credentials and try again.');
      console.log(error);
    }
  };

  return (
    <div className='p-7 flex h-screen flex-col justify-between'>
      <div>
        <img className='w-16 mb-10' src="https://imgs.search.brave.com/FZq7YFqzVbkjhipVXmxfaZY-RmPwy3wsG0WV1UdM8bs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjAv/MDUvVWJlci1Mb2dv/LTcwMHgzOTQucG5n" alt="" />
        <form onSubmit={submitHandler} action="">
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input
            className='bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            name="email"
            id="email"
            placeholder='email@example.com'
          />
          <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
          <input
            className='bg-[#EEEEEE] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            required
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id="password"
            placeholder="what's your password"
          />
          <button className='bg-[#111] text-[#fff] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Login</button>
          <p className='text-center'>New here? <Link to={'/signup'} className='text-blue-600'>Create new Account</Link></p>
        </form>
      </div>
      <div>
        <Link to={'/captain-login'} className='bg-[#10b461] flex items-center justify-center text-[#fff] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'>Sign in as captain</Link>
      </div>
    </div>
  );
}

export default UserLogin;
