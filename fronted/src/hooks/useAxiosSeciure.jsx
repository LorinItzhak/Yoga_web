import React, { useEffect } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { AuthContext } from '../ultilities/providers/AuthProvider'

const useAxiosSeciure = () => {
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate();

  const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    // withCredentials: true,
  });

  useEffect(() => {
   const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if(token){
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    }); 

    const responseInterceptor = axiosSecure.interceptors.response.use((response) => response, async (error) => {
      if(error.response && error.response.status === 401 || error.response.status === 403){  
        await logout();
        navigate('/login');
        throw error;
      }
      throw error;
    });

      return () => {
        axiosSecure.interceptors.request.eject(requestInterceptor);
        axiosSecure.interceptors.response.eject(responseInterceptor);
      }


  }, [logout, navigate, axiosSecure]);

  return axiosSecure;
}

export default useAxiosSeciure
