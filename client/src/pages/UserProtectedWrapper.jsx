import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';
import axios from 'axios';

const UserProtectedWrapper = ({children}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }).then(response => {
      if (response.status === 200) {
        navigate('/home');
      }
    }).catch(error => {
      console.log(error);
      localStorage.removeItem('token');
      navigate('/login');
    });
  }, [token]);
  
  return (
    <div>
      {children}
    </div> 
  );
}

export default UserProtectedWrapper;