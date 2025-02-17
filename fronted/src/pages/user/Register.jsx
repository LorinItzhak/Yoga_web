import React, { useContext } from 'react'
import {useForm} from 'react-hook-form';
import { AiOutlineLock, AiOutlineMail, AiOutlinePhone, AiOutlinePicture, AiOutlineUser } from "react-icons/ai";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { Link } from 'react-router-dom';
import GoogleLogin from '../../components/Social/GoogleLogin';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../ultilities/providers/AuthProvider';
import { use } from 'react';
import axios from 'axios';

const Register = () => {
    const navigate = useNavigate();
    const {signUp,updateUser,setError} = useContext(AuthContext);
    const {register, handleSubmit,watch, formState:{errors}} = useForm();
    const onSubmit = data => {
        setError('');
        signUp(data.email, data.password).then((res) => {
            const user = res.user;
            if(user){
                return updateUser(data.name, data.photoURL).then(() => {
                    const userImp={
                        name: user?.displayName,
                        email: user?.email,
                        photoURL: user?.photoURL,
                        role: 'user',
                        gender:data.gender,
                        phone: data.phone,
                        address: data.address,
                    };
                    if(user.email && user.displayName){
                        return axios.post('http://localhost:3000/new-user', userImp)
                        .then(() => {
                            setError("");
                            navigate('/');
                            return "Registration Successful"
                        }) 
                        .catch(err => {
                         throw new Error(err);
                        })
                    } 
                }).catch(err => {
                    setError(err.code);
                    throw new Error(err);
                }) 
            }
            
        })
        
    };
    const password = watch('password','');

  return (
    <div className='flex justify-center items-center pt-14 bg-gray-100'>
      <div className='bg-white p-8 rounded-lg shadow-md'>
        <h2 className='text-center font-bold text-3xl mb-6'>Please Register</h2>

        {/* form */}
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='flex items-center gap-5'>
                <div className='mb-4'>
                    <label htmlFor='name' className='block text-gray-700 font-bold mb-2'>
                        <AiOutlineUser className='inline-block mr-2 mb-1  text-lg'/>
                        Name
                        </label>
                    <input type='name'  placeholder='Enter Name' {...register('name', {required: true})}
                     className='w-full border focus:outline-none rounded-md border-gray-300 py-2 px-4 
                     focus:ring focus:border-blue-300'/>
                   
                </div>
                <div className='mb-4'>
                    <label htmlFor='email' className='block text-gray-700 font-bold mb-2'>
                        <AiOutlineMail className='inline-block mr-2 mb-1  text-lg'/>
                        Email
                        </label>
                    <input type='email'  placeholder='Enter Email' {...register('email', {required: true})}
                     className='w-full border focus:outline-none rounded-md border-gray-300 py-2 px-4 
                     focus:ring focus:border-blue-300'/>
                   
                </div> 
            </div>

            <div className='flex items-center gap-5'>
                <div className='mb-4'>
                    <label htmlFor='password' className='block text-gray-700 font-bold mb-2'>
                        <AiOutlineLock className='inline-block mr-2 mb-1  text-lg'/>
                        Password
                        </label>
                    <input type='password'  placeholder='Enter Password' {...register('password', {required: true})}
                     className='w-full border focus:outline-none rounded-md border-gray-300 py-2 px-4 
                     focus:ring focus:border-blue-300'/>
                   
                </div>
                <div className='mb-4'>
                    <label htmlFor='confirmpassword' className='block text-gray-700 font-bold mb-2'>
                        <AiOutlineLock className='inline-block mr-2 mb-1  text-lg'/>
                        Confirm Password
                        </label>
                    <input type='password'  placeholder='confirm password'
                    {...register('confirmPassword', 
                    {required: true ,
                     validate: (value) => value === password || "Password does not match"
                    })}
                     className='w-full border focus:outline-none rounded-md border-gray-300 py-2 px-4 
                     focus:ring focus:border-blue-300'/>
                   
                </div> 
            </div> 

            <div className='flex items-center gap-5'>
                <div className='mb-4'>
                    <label htmlFor='phoneNumber' className='block text-gray-700 font-bold mb-2'>
                        <AiOutlinePhone className='inline-block mr-2 mb-1  text-lg'/>
                        Phone Number
                        </label>
                    <input type='tel'  placeholder='Enter Phone number' {...register('phone', {required: true})}
                     className='w-full border focus:outline-none rounded-md border-gray-300 py-2 px-4 
                     focus:ring focus:border-blue-300'/>
                   
                </div>
                <div className='mb-4'>
                    <label htmlFor='photoURL' className='block text-gray-700 font-bold mb-2'>
                        <AiOutlinePicture className='inline-block mr-2 mb-1  text-lg'/>
                        Photo URL
                        </label>
                    <input type='photo URL'  placeholder='photo URL' {...register('photoURL')}
                     className='w-full border focus:outline-none rounded-md border-gray-300 py-2 px-4 
                     focus:ring focus:border-blue-300'/>
                   
                </div> 
            </div>  

            <div>
            <div className='mb-4'>
                    <label htmlFor='gender' className='block text-gray-700 font-bold mb-2'>
                        <AiOutlineUser className='inline-block mr-2 mb-1  text-lg'/>
                        Gender
                        </label>
                   <select {...register("gender",{required:true})}
                   className=' w-full border  border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring
                    focus:border-blue-300'>
                        <option value="">Select Gender</option>
                     <option value="female">Female</option>
                     <option value="male">Male</option>
                     <option value="other">Other</option>
                    </select>
                   
                </div>

                <div className='mb-4'>
                    <label htmlFor='address' className='block text-gray-700 font-bold mb-2'>
                        <HiOutlineLocationMarker className='inline-block mr-2 mb-1  text-lg'/>
                        Address
                        </label>
                    <textarea type='address'  placeholder='Enter Address'
                    {...register('address', {required: true})}
                        className='w-full border focus:outline-none rounded-md border-gray-300 py-2 px-4 
                        focus:ring focus:border-blue-300'
                    rows="3"
                    
                   />
                </div>
            </div>
            <div className='text-center'>
                <button type='submit' className='bg-secondary hover:bg-red-500
                 text-white py-2 px-4 rounded-md'>
                     Register
                </button>
                {
                    errors.confirmPassword &&(
                        <div className='text-red-500 text-sm w-full mt-1'>
                            <p>Password doesn't match!</p>
                        </div>
                    )
                }
            </div>
        </form>
        <p className='text-center mt-4'>
            Already have an account? <Link to='/login' className='underline text-secondary ml-1'>Login</Link>
        </p>
        <GoogleLogin/>
      </div>
    </div>
  )
}

export default Register
