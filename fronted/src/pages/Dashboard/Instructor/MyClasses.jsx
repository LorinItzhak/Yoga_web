import React from 'react'
import { useState } from 'react' 
import useUser from '../../../hooks/useUser';
import { useNavigate } from 'react-router-dom';
import useAxiosSeciure from '../../../hooks/useAxiosSeciure';
import { use } from 'react';
import { useEffect } from 'react';

const MyClasses = () => {
  const [classes, setClasses] =useState([]);
  const {currentUser, isLoading} = useUser();
  const navigate = useNavigate();
  const axiosSecure = useAxiosSeciure();

  useEffect(() => {
           axiosSecure.get(`/classes/${currentUser?.email}`).then((res) => 
           setClasses(res.data)).catch((err) => {
            console.log(err);
           
           })
        } , [isLoading])


  return (
    <div className=' w-full h-full'>
      <div className="my-9 flex " style={{justifyContent: 'center', flexDirection: 'column'}}>
        <h1 className='text-4xl font-bold text-center'>My <span className='text-secondary'>Classes</span></h1>
        <div>
          <p className='text-[12px] text-center my-2'>Here you can see how many classes added by you and all classes status</p>
        </div>
      </div>

      <div>
        {
          classes.length === 0
           ? 
          <div className='text-center text-2xl font-bold mt-10'>
            You have not added any classes yet
            </div>
            :
            <div>
              {
                classes.map((cls, index) => (
                  <div
                    key={index}>
                      <div>
                        <div>
                          <img src={cls.image} alt=""  className='max-h-[200px] max-w-[300px]'/>
                        </div>
                        <div className='w-full '>

                        </div>
                      </div>
                  </div>
                ))
              }
            </div>
        }
      </div>
    </div>
  )
}

export default MyClasses
