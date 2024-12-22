import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserDataContext } from '../context/UserContext';


const UserProtectedWrapper = ({children}) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, [token, navigate]);

  return (
    <div>
      {children}
    </div> 
  );
}

export default UserProtectedWrapper;