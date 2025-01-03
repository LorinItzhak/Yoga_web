import React from 'react'
import { FcGoogle } from "react-icons/fc";
import useAuth from '../../hooks/useAuth';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const GoogleLogin = () => {
    const{googleLogin} = useAuth();
    const navigate= useNavigate();
    const handleLogin = () => {
        // console.log("google Login")
        googleLogin()
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
    
             if(user){
                const userImp={
                    name: user?.displayName,
                    email: user?.email,
                    photo: user?.photoURL,
                    role: 'user',
                    gender: 'is not specified',
                    phone: 'is not specified',
                    address: 'is not specified',
                }
                if(user.email && user.displayName){
                    return axios.post('http://localhost:3000/new-user', userImp)
                    .then(res => {
                        navigate('/');
                        return "Registration Successful"
                    })
                    .catch(err => {
                     throw new Error(err);
                    })
                }
             }
        }).catch(error => {
            const errorCode = error.code;
            const errorMessage = error.message;
         console.log(errorMessage)

        });
    }
  return (
    <div className='flex items-center justify-center my-3 '>
      <button onClick={()=> handleLogin()} className='flex items-center outline-none bg-white border border-gray-300
      rounded-lg shadow-md px-6 py-4 text-sm font-medium text-gray-800 hover:bg-gray-200
      focus:outline-none'>
          <FcGoogle  className='h-6 w-6 mr-2'/>
        <span>Continue with Google</span>
        </button>
    </div>
  )
}

export default GoogleLogin
